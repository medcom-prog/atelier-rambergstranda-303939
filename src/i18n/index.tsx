import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { dictionary, type DictionaryShape, type Language } from './dictionary';

interface I18nContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: DictionaryShape;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'atelier-rambergstranda-lang';

function getInitialLang(): Language {
  if (typeof window === 'undefined') return 'no';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'no' || stored === 'en') return stored;
  // Detect from browser
  const nav = window.navigator.language?.toLowerCase() ?? '';
  if (nav.startsWith('en')) return 'en';
  return 'no';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLang);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'en' ? 'en' : 'nb';
    }
  }, [lang]);

  const setLang = (l: Language) => {
    setLangState(l);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  };

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, t: dictionary[lang] }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT(): DictionaryShape {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useT must be used inside <I18nProvider>');
  return ctx.t;
}

export function useLang() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useLang must be used inside <I18nProvider>');
  return { lang: ctx.lang, setLang: ctx.setLang };
}
