// Single source of truth for which languages the site exposes in the UI.
// Adding a new language is two steps:
//   1. Drop a `<code>.ts` file into ./locales/ that does
//      `export default { ... } satisfies Dictionary;`
//   2. Add `{ code, label }` to LANGUAGES below.
// Optionally, if the new language is RTL, add its code to RTL_LANGUAGES.
// No edits to ./index.ts are required — locales auto-load via import.meta.glob.

export type LanguageCode =
  | 'en'
  | 'es'
  | 'fr'
  | 'de'
  | 'pt'
  | 'ja'
  | 'ko'
  | 'nl'
  | 'it'
  | 'pl'
  | 'sv'
  | 'fi';

export interface LanguageEntry {
  code: LanguageCode | string;
  label: string;
}

export const LANGUAGES: ReadonlyArray<LanguageEntry> = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'pt', label: 'Português' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'it', label: 'Italiano' },
  { code: 'pl', label: 'Polski' },
  { code: 'sv', label: 'Svenska' },
  { code: 'fi', label: 'Suomi' },
];

// Right-to-left language codes. Empty today; populate when adding ar, he, fa, etc.
export const RTL_LANGUAGES: ReadonlyArray<string> = [];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';
export const STORAGE_KEY = 'depoversight.lang';

export const isRtl = (code: string): boolean =>
  RTL_LANGUAGES.includes(code.split('-')[0]!.toLowerCase());
