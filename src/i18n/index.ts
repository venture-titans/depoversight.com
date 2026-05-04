import i18n, { type Resource } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  STORAGE_KEY,
  isRtl,
} from './languages';

// English ships in the initial bundle so the page hydrates without a network round-trip.
// Every non-EN dictionary is split into its own lazy chunk via Vite's import.meta.glob —
// only the user's selected/detected language is fetched. This keeps the initial JS small
// (a hard requirement for SEO / Core Web Vitals) and means each new language adds zero
// weight to the eager bundle.
const lazyLocaleModules = import.meta.glob<{ default: Record<string, unknown> }>([
  './locales/*.ts',
  '!./locales/en.ts',
]);

const initialResources: Resource = {
  [DEFAULT_LANGUAGE]: { translation: en },
};

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: initialResources,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: LANGUAGES.map((l) => l.code),
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    returnObjects: true,
    // partialBundledLanguages tells i18next that some bundles will arrive after init —
    // without this it errors when a non-EN language is selected before its bundle loads.
    partialBundledLanguages: true,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: STORAGE_KEY,
    },
  });

const loadedBundles = new Set<string>([DEFAULT_LANGUAGE]);
const inFlight = new Map<string, Promise<boolean>>();

async function loadLocale(code: string): Promise<boolean> {
  if (loadedBundles.has(code)) return true;
  const existing = inFlight.get(code);
  if (existing) return existing;

  const loader = lazyLocaleModules[`./locales/${code}.ts`];
  if (!loader) return false;

  const promise = loader()
    .then((mod) => {
      if (mod.default) {
        i18n.addResourceBundle(code, 'translation', mod.default, true, true);
        loadedBundles.add(code);
        return true;
      }
      return false;
    })
    .catch(() => false)
    .finally(() => inFlight.delete(code));

  inFlight.set(code, promise);
  return promise;
}

const syncDocAttrs = (lng: string) => {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lng;
  document.documentElement.dir = isRtl(lng) ? 'rtl' : 'ltr';
};

i18n.on('languageChanged', syncDocAttrs);
syncDocAttrs(i18n.resolvedLanguage ?? DEFAULT_LANGUAGE);

// If the detected language isn't English, kick off the fetch so the UI swaps from
// the EN fallback to the user's language as soon as the bundle arrives.
const detected = i18n.resolvedLanguage ?? DEFAULT_LANGUAGE;
if (detected !== DEFAULT_LANGUAGE) {
  void loadLocale(detected).then((ok) => {
    if (ok) {
      void i18n.changeLanguage(detected);
    }
  });
}

export const setLanguage = async (code: string) => {
  await loadLocale(code);
  await i18n.changeLanguage(code);
};

export default i18n;
