import { Marked } from 'marked';

const marked = new Marked({
  gfm: true,
  breaks: false,
});

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

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function renderMarkdown(source: string): string {
  return marked.parse(source) as string;
}

export function readingTimeMinutes(source: string): number {
  const words = source.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
