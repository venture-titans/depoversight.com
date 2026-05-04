# DepOversight — marketing site

Static marketing site for DepOversight, a dependency intelligence platform that surfaces security-relevant signals from upstream open-source activity before CVEs, advisories, or scanner alerts catch up.

Live at <https://depoversight.com>.

## Stack

Vite + React + TypeScript + Tailwind CSS + react-i18next. Static output deployed via GitHub Pages.

## Local development

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open <http://localhost:5173>.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` produces a static bundle in `dist/`. `npm run preview` serves that bundle locally so you can verify it before pushing.

## Repository structure

```
.
├── .github/workflows/deploy.yml   # GitHub Pages deploy
├── index.html                     # Vite entry + SEO meta + JSON-LD + crawler fallback
├── package.json
├── public/
│   ├── CNAME
│   ├── favicon.svg
│   ├── llms.txt
│   ├── llms-full.txt
│   ├── og-image.svg
│   ├── robots.txt
│   ├── site.webmanifest
│   └── sitemap.xml
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   ├── layout/                # Nav, MobileMenu, LanguageSelector, Footer
│   │   ├── sections/              # 14 page sections, including DemoDashboard
│   │   └── ui/                    # Card, Button, Badge, SeverityPill primitives
│   ├── data/                      # Static demo data — signals, scenarios, timeline, etc.
│   ├── i18n/
│   │   ├── index.ts               # i18next bootstrap, language detector, lang-attr sync
│   │   ├── languages.ts           # Supported language list
│   │   └── locales/               # en, es, fr, de, pt, ja, ko, nl, it, pl, sv, fi
│   └── styles/globals.css
├── tailwind.config.ts
└── vite.config.ts
```

## License

See [LICENSE](./LICENSE). All rights reserved.

## Disclaimer

DepOversight surfaces security-relevant review signals based on public upstream activity. A signal is not a confirmed vulnerability unless linked to an advisory or CVE.

DepOversight does not generate exploit code, proof-of-concept payloads, reproduction steps, exploitation instructions, or vulnerable query examples. It does not claim to detect all vulnerabilities, find zero-days, or provide guaranteed pre-CVE detection.
