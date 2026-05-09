#!/usr/bin/env node
/**
 * Post-build prerender step.
 *
 * Reads every markdown file in `posts/`, renders each to HTML, and writes:
 *   dist/blog/<slug>/index.html  — full HTML page (crawler-readable, JS hydrates over)
 *   dist/blog/<slug>.md          — raw markdown copy (LLM-friendly)
 *   dist/blog/index.html         — blog index page
 *   dist/sitemap.xml             — appended with /blog/ + every post URL
 *   dist/rss.xml                 — RSS 2.0 feed of recent posts
 *   dist/llms.txt                — <!-- BLOG-INDEX --> replaced with post list
 *   dist/llms-full.txt           — <!-- BLOG-FULL --> replaced with full bodies
 *   dist/404.html                — copy of dist/index.html (SPA fallback)
 *
 * Pure Node ESM; no Vite-specific imports. The shared markdown helpers in
 * src/blog/markdown.ts are duplicated here because tsc -b emits to a buildinfo
 * cache, not standalone JS — easier to keep two small renderers in sync than
 * to run a separate compile step.
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Marked } from 'marked';

// Minimal frontmatter parser. Mirrors src/blog/frontmatter.ts so that the
// React side and the prerender script produce identical output. Handles the
// small YAML subset we actually use in posts: scalar strings (quoted/unquoted),
// inline arrays `[a, b, c]`, and `key: <ISO date>`.
const FENCE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
function parseFrontmatter(raw) {
  const match = raw.match(FENCE);
  if (!match) return { data: {}, content: raw };
  const data = {};
  const lines = match[1].split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) { i++; continue; }
    const m = line.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    if (!m) { i++; continue; }
    const key = m[1];
    const rest = m[2];
    if (/^\[.*\]$/.test(rest.trim())) {
      const inner = rest.trim().slice(1, -1).trim();
      data[key] = inner ? inner.split(',').map((s) => unquote(s.trim())) : [];
      i++; continue;
    }
    if (rest.trim() === '') {
      const items = [];
      let j = i + 1;
      while (j < lines.length && /^\s+-\s+/.test(lines[j])) {
        items.push(unquote(lines[j].replace(/^\s+-\s+/, '').trim()));
        j++;
      }
      if (items.length > 0) {
        data[key] = items;
        i = j;
        continue;
      }
    }
    data[key] = unquote(rest.trim());
    i++;
  }
  return { data, content: raw.slice(match[0].length) };
}
function unquote(v) {
  if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) {
    return v.slice(1, -1);
  }
  return v;
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE_URL = 'https://depoversight.com';
const POSTS_DIR = join(ROOT, 'posts');
const DIST = join(ROOT, 'dist');
const CATEGORIES = ['industry', 'fundamentals', 'tools'];
const CATEGORY_LABELS = {
  industry: 'Industry',
  fundamentals: 'Fundamentals',
  tools: 'Tools',
};

// --- Markdown rendering (mirrors src/blog/markdown.ts; kept in sync manually) ---
const marked = new Marked({ gfm: true, breaks: false });
marked.use({
  renderer: {
    link(token) {
      const { href, title, tokens } = token;
      const text = this.parser.parseInline(tokens);
      const isExternal = /^https?:\/\//i.test(href) && !/depoversight\.com/i.test(href);
      const titleAttr = title ? ` title="${escapeAttr(title)}"` : '';
      const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${escapeAttr(href)}"${titleAttr}${targetAttr}>${text}</a>`;
    },
    image(token) {
      const { href, title, text } = token;
      const titleAttr = title ? ` title="${escapeAttr(title)}"` : '';
      const altAttr = ` alt="${escapeAttr(text ?? '')}"`;
      return `<img src="${escapeAttr(href)}"${altAttr}${titleAttr} loading="lazy" decoding="async" />`;
    },
  },
});

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function escapeHtml(value) {
  return escapeAttr(value);
}
function escapeXml(value) {
  return escapeAttr(value).replace(/'/g, '&apos;');
}

function readingTimeMinutes(source) {
  const words = source.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

// --- Load posts -------------------------------------------------------------
function loadPosts() {
  if (!existsSync(POSTS_DIR)) return [];
  const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const raw = readFileSync(join(POSTS_DIR, file), 'utf8');
    const { data, content } = parseFrontmatter(raw);
    if (!data.title || !data.date || !data.excerpt) {
      throw new Error(`Post "${slug}" missing required frontmatter (title, date, excerpt).`);
    }
    if (!data.category || !CATEGORIES.includes(data.category)) {
      throw new Error(
        `Post "${slug}" must declare category as one of: ${CATEGORIES.join(', ')}.`,
      );
    }
    return {
      slug,
      title: String(data.title),
      date: String(data.date),
      updated: data.updated ? String(data.updated) : undefined,
      excerpt: String(data.excerpt),
      category: String(data.category),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      ogImage: data.ogImage ? String(data.ogImage) : undefined,
      html: marked.parse(content),
      markdown: content,
      readingTimeMinutes: readingTimeMinutes(content),
    };
  });
  posts.sort((a, b) => b.date.localeCompare(a.date));
  return posts;
}

// --- HTML template manipulation --------------------------------------------
function readBaseTemplate() {
  return readFileSync(join(DIST, 'index.html'), 'utf8');
}

const HEAD_REPLACEMENTS = [
  // Title
  { re: /<title>[^<]*<\/title>/, build: (meta) => `<title>${escapeHtml(meta.title)}</title>` },
  // Meta description
  {
    re: /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    build: (meta) =>
      `<meta name="description" content="${escapeAttr(meta.description)}" />`,
  },
  // Canonical
  {
    re: /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    build: (meta) => `<link rel="canonical" href="${escapeAttr(meta.canonical)}" />`,
  },
  // og:url
  {
    re: /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    build: (meta) => `<meta property="og:url" content="${escapeAttr(meta.canonical)}" />`,
  },
  // og:title
  {
    re: /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    build: (meta) => `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
  },
  // og:description
  {
    re: /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    build: (meta) =>
      `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
  },
  // og:image
  {
    re: /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    build: (meta) => `<meta property="og:image" content="${escapeAttr(meta.ogImage)}" />`,
  },
  // og:image:alt
  {
    re: /<meta\s+property="og:image:alt"\s+content="[^"]*"\s*\/?>/,
    build: (meta) =>
      `<meta property="og:image:alt" content="${escapeAttr(meta.ogImageAlt)}" />`,
  },
  // twitter:title
  {
    re: /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    build: (meta) => `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
  },
  // twitter:description
  {
    re: /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    build: (meta) =>
      `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
  },
  // twitter:image
  {
    re: /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
    build: (meta) => `<meta name="twitter:image" content="${escapeAttr(meta.ogImage)}" />`,
  },
  // twitter:image:alt
  {
    re: /<meta\s+name="twitter:image:alt"\s+content="[^"]*"\s*\/?>/,
    build: (meta) =>
      `<meta name="twitter:image:alt" content="${escapeAttr(meta.ogImageAlt)}" />`,
  },
];

function applyHeadReplacements(html, meta) {
  let out = html;
  for (const { re, build } of HEAD_REPLACEMENTS) {
    if (re.test(out)) {
      out = out.replace(re, build(meta));
    }
  }
  return out;
}

const ROBOTS_META =
  '<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />';
const RSS_LINK =
  '<link rel="alternate" type="application/rss+xml" title="DepOversight blog" href="/rss.xml" />';

function injectIntoHead(html, ...snippets) {
  return html.replace(/<\/head>/, `    ${snippets.join('\n    ')}\n  </head>`);
}

function replaceRoot(html, fallbackBody) {
  // Replace everything inside the outermost <div id="root">...</div>. The
  // production index.html has Vite's <script type="module"> in the <head>, so
  // </body> is the only reliable end-anchor. Greedy match consumes any nested
  // </div> tags inside the fallback markup itself.
  return html.replace(
    /<div id="root">[\s\S]*<\/div>(\s*<\/body>)/,
    `<div id="root">\n${fallbackBody}\n    </div>$1`,
  );
}

// --- Page builders ----------------------------------------------------------
function buildPostPage(post, base) {
  const canonical = `${SITE_URL}/blog/${post.slug}/`;
  const ogImage = post.ogImage
    ? (post.ogImage.startsWith('http') ? post.ogImage : `${SITE_URL}${post.ogImage}`)
    : `${SITE_URL}/og-image.svg`;
  const ogImageAlt = `${post.title}: DepOversight blog`;
  const description = post.excerpt;

  let html = applyHeadReplacements(base, {
    title: `${post.title} · DepOversight`,
    description,
    canonical,
    ogImage,
    ogImageAlt,
  });

  // Switch og:type to article on post pages.
  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
    '<meta property="og:type" content="article" />',
  );

  // Inject robots meta, RSS alternate, raw-markdown alternate, and JSON-LD blocks.
  const wordCount = post.markdown.trim().split(/\s+/).filter(Boolean).length;
  const blogPostingLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.updated || post.date).toISOString(),
    image: ogImage,
    keywords: post.tags.join(', '),
    articleSection: CATEGORY_LABELS[post.category] || post.category,
    wordCount,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    publisher: { '@id': `${SITE_URL}/#org` },
    author: { '@id': `${SITE_URL}/#org` },
    inLanguage: 'en',
  });
  const breadcrumbLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
    ],
  });
  const markdownAlt = `<link rel="alternate" type="text/markdown" href="/blog/${post.slug}.md" />`;
  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date(post.updated || post.date).toISOString();
  const articleTimes = [
    `<meta property="article:published_time" content="${publishedTime}" />`,
    `<meta property="article:modified_time" content="${modifiedTime}" />`,
    `<meta property="article:section" content="${escapeAttr(CATEGORY_LABELS[post.category] || post.category)}" />`,
    ...post.tags.map((tag) => `<meta property="article:tag" content="${escapeAttr(tag)}" />`),
  ].join('\n    ');

  html = injectIntoHead(
    html,
    ROBOTS_META,
    RSS_LINK,
    markdownAlt,
    articleTimes,
    `<script type="application/ld+json">${blogPostingLd}</script>`,
    `<script type="application/ld+json">${breadcrumbLd}</script>`,
  );

  // Crawler-readable article body inside #root.
  const tagsHtml = post.tags.length
    ? `<p>Tags: ${post.tags.map((t) => escapeHtml(t)).join(', ')}</p>`
    : '';
  const dateHuman = new Date(post.date).toISOString().slice(0, 10);
  const fallback = `      <main>
        <p><a href="/">DepOversight</a> &middot; <a href="/blog/">Blog</a></p>
        <article>
          <h1>${escapeHtml(post.title)}</h1>
          <p><em>${escapeHtml(post.excerpt)}</em></p>
          <p>Published ${dateHuman} · ${post.readingTimeMinutes} min read</p>
          ${tagsHtml}
          ${post.html}
        </article>
      </main>`;

  return replaceRoot(html, fallback);
}

function buildCategoryPage(category, posts, base) {
  const label = CATEGORY_LABELS[category];
  const canonical = `${SITE_URL}/blog/${category}/`;
  const description = `${label} posts on the DepOversight blog: field notes on dependency security, pre-disclosure signals, and the tooling around them.`;
  let html = applyHeadReplacements(base, {
    title: `${label} · Blog · DepOversight`,
    description,
    canonical,
    ogImage: `${SITE_URL}/og-image.svg`,
    ogImageAlt: `${label}: DepOversight blog`,
  });

  const collectionLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${canonical}#collection`,
    name: `${label} · DepOversight blog`,
    description,
    url: canonical,
    isPartOf: { '@id': `${SITE_URL}/blog/#blog` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/blog/${p.slug}/`,
        name: p.title,
      })),
    },
  });
  const breadcrumbLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
      { '@type': 'ListItem', position: 3, name: label, item: canonical },
    ],
  });

  html = injectIntoHead(html, ROBOTS_META, RSS_LINK, `<script type="application/ld+json">${collectionLd}</script>`, `<script type="application/ld+json">${breadcrumbLd}</script>`);

  const items = posts
    .map((p) => {
      const date = new Date(p.date).toISOString().slice(0, 10);
      return `          <li>
            <a href="/blog/${escapeAttr(p.slug)}/">${escapeHtml(p.title)}</a>
            , <time datetime="${escapeAttr(p.date)}">${date}</time>
            <p>${escapeHtml(p.excerpt)}</p>
          </li>`;
    })
    .join('\n');
  const empty = `<p>No posts in this category yet.</p>`;
  const fallback = `      <main>
        <p><a href="/">DepOversight</a> &middot; <a href="/blog/">Blog</a> &middot; ${escapeHtml(label)}</p>
        <h1>${escapeHtml(label)}</h1>
        <p>${escapeHtml(description)}</p>
        ${posts.length ? `<ul>\n${items}\n        </ul>` : empty}
      </main>`;

  return replaceRoot(html, fallback);
}

function buildBlogIndex(posts, base) {
  const canonical = `${SITE_URL}/blog/`;
  const description =
    'Field notes on dependency security, supply-chain incidents, and what we surface before disclosure.';
  let html = applyHeadReplacements(base, {
    title: 'Blog · DepOversight',
    description,
    canonical,
    ogImage: `${SITE_URL}/og-image.svg`,
    ogImageAlt: 'DepOversight blog',
  });

  const blogLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog/#blog`,
    name: 'DepOversight blog',
    description,
    url: canonical,
    publisher: { '@id': `${SITE_URL}/#org` },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}/`,
      datePublished: new Date(p.date).toISOString(),
      description: p.excerpt,
    })),
  });

  html = injectIntoHead(html, ROBOTS_META, RSS_LINK, `<script type="application/ld+json">${blogLd}</script>`);

  const items = posts
    .map((p) => {
      const date = new Date(p.date).toISOString().slice(0, 10);
      return `          <li>
            <a href="/blog/${escapeAttr(p.slug)}/">${escapeHtml(p.title)}</a>
            , <time datetime="${escapeAttr(p.date)}">${date}</time>
            <p>${escapeHtml(p.excerpt)}</p>
          </li>`;
    })
    .join('\n');
  const empty = `<p>No posts yet, check back soon.</p>`;
  const fallback = `      <main>
        <p><a href="/">DepOversight</a> &middot; Blog</p>
        <h1>Blog</h1>
        <p>${escapeHtml(description)}</p>
        ${posts.length ? `<ul>\n${items}\n        </ul>` : empty}
      </main>`;

  return replaceRoot(html, fallback);
}

// --- Sitemap and RSS --------------------------------------------------------
function writeSitemap(posts) {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    `  <url>
    <loc>${SITE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`,
    `  <url>
    <loc>${SITE_URL}/blog/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    ...CATEGORIES.filter((cat) => posts.some((p) => p.category === cat)).map(
      (cat) => `  <url>
    <loc>${SITE_URL}/blog/${cat}/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    ),
    ...posts.map((p) => {
      const lastmod = (p.updated || p.date).slice(0, 10);
      return `  <url>
    <loc>${SITE_URL}/blog/${escapeXml(p.slug)}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    }),
    '</urlset>',
    '',
  ];
  writeFileSync(join(DIST, 'sitemap.xml'), lines.join('\n'));
}

function writeRss(posts) {
  const top = posts.slice(0, 20);
  const items = top
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.slug}/`;
      const pubDate = new Date(p.date).toUTCString();
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
      ${p.tags.map((t) => `<category>${escapeXml(t)}</category>`).join('\n      ')}
    </item>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DepOversight blog</title>
    <link>${SITE_URL}/blog/</link>
    <description>Field notes on dependency security, supply-chain incidents, and what we surface before disclosure.</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  writeFileSync(join(DIST, 'rss.xml'), xml);
}

// --- llms.txt / llms-full.txt ----------------------------------------------
function refreshLlmsTxt(posts) {
  const path = join(DIST, 'llms.txt');
  if (!existsSync(path)) return;
  const sections = CATEGORIES.map((cat) => {
    const inCat = posts.filter((p) => p.category === cat);
    if (inCat.length === 0) return null;
    const list = inCat
      .map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}/): ${p.excerpt}`)
      .join('\n');
    return `### ${CATEGORY_LABELS[cat]}\n\n${list}`;
  }).filter(Boolean);
  const content = readFileSync(path, 'utf8').replace(
    '<!-- BLOG-INDEX -->',
    sections.join('\n\n'),
  );
  writeFileSync(path, content);
}

function refreshLlmsFullTxt(posts) {
  const path = join(DIST, 'llms-full.txt');
  if (!existsSync(path)) return;
  const sections = posts
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.slug}/`;
      return `### ${p.title}\n\nSource: ${url}\nPublished: ${p.date.slice(0, 10)}\n\n${p.markdown.trim()}`;
    })
    .join('\n\n---\n\n');
  const content = readFileSync(path, 'utf8').replace('<!-- BLOG-FULL -->', sections);
  writeFileSync(path, content);
}

// --- Run --------------------------------------------------------------------
function run() {
  if (!existsSync(DIST)) {
    console.error('dist/ not found — run `vite build` first.');
    process.exit(1);
  }
  const posts = loadPosts();
  console.log(`prerender-blog: found ${posts.length} post(s)`);

  const base = readBaseTemplate();

  // Per-post pages + raw markdown.
  for (const post of posts) {
    const dir = join(DIST, 'blog', post.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), buildPostPage(post, base));
    writeFileSync(join(DIST, 'blog', `${post.slug}.md`), readFileSync(join(POSTS_DIR, `${post.slug}.md`), 'utf8'));
    console.log(`  /blog/${post.slug}/`);
  }

  // Blog index.
  mkdirSync(join(DIST, 'blog'), { recursive: true });
  writeFileSync(join(DIST, 'blog', 'index.html'), buildBlogIndex(posts, base));
  console.log('  /blog/');

  // Per-category index pages.
  for (const cat of CATEGORIES) {
    const catPosts = posts.filter((p) => p.category === cat);
    if (catPosts.length === 0) continue;
    const dir = join(DIST, 'blog', cat);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), buildCategoryPage(cat, catPosts, base));
    console.log(`  /blog/${cat}/`);
  }

  // Sitemap + RSS.
  writeSitemap(posts);
  writeRss(posts);

  // llms.txt + llms-full.txt.
  refreshLlmsTxt(posts);
  refreshLlmsFullTxt(posts);

  // 404 fallback for SPA — boot the app on any unknown URL so the router can resolve it.
  writeFileSync(join(DIST, '404.html'), base);

  console.log('prerender-blog: done');
}

run();
