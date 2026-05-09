// Minimal frontmatter parser. Handles the YAML subset we use in posts/*.md:
//   title: 'string'  |  "string"  |  bare string
//   date: 2026-04-15  (left as string — the consumer formats it)
//   excerpt: 'string'
//   tags: [a, b, c]  |  block list with `-` prefix on indented lines
//   ogImage: '/path'  |  bare string
//   updated: 2026-04-15
//
// Avoids `gray-matter` (Buffer-dependent, doesn't work in the browser without
// polyfills). Used by both the React side and scripts/prerender-blog.mjs so
// the same input yields the same output in both places.

export interface Frontmatter {
  [key: string]: string | string[];
}

export interface ParsedFile {
  data: Frontmatter;
  content: string;
}

const FENCE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

export function parseFrontmatter(raw: string): ParsedFile {
  const match = raw.match(FENCE);
  if (!match) return { data: {}, content: raw };
  const yaml = match[1];
  const content = raw.slice(match[0].length);
  return { data: parseYaml(yaml), content };
}

function parseYaml(yaml: string): Frontmatter {
  const data: Frontmatter = {};
  const lines = yaml.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) {
      i++;
      continue;
    }
    const match = line.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    if (!match) {
      i++;
      continue;
    }
    const key = match[1];
    const rest = match[2];

    // Inline array: [a, b, c]
    if (/^\[.*\]$/.test(rest.trim())) {
      data[key] = parseInlineArray(rest.trim());
      i++;
      continue;
    }

    // Block array: subsequent lines starting with `-`
    if (rest.trim() === '') {
      const items: string[] = [];
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
  return data;
}

function parseInlineArray(input: string): string[] {
  const inner = input.slice(1, -1).trim();
  if (!inner) return [];
  return inner.split(',').map((part) => unquote(part.trim()));
}

function unquote(value: string): string {
  if (
    (value.startsWith("'") && value.endsWith("'")) ||
    (value.startsWith('"') && value.endsWith('"'))
  ) {
    return value.slice(1, -1);
  }
  return value;
}
