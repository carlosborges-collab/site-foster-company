import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('foster_lang') as Language;
    if (saved && (saved === 'pt' || saved === 'es' || saved === 'en')) {
      setLanguageState(saved);
    } else {
      const browser = navigator.language;
      if (browser.startsWith('es')) setLanguageState('es');
      else if (browser.startsWith('en')) setLanguageState('en');
      else setLanguageState('pt');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('foster_lang', lang);
    document.documentElement.lang = lang;
    
    // Apply translations directly to DOM elements with data-i18n
    setTimeout(() => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && (translations[lang] as any)[key]) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            (el as HTMLInputElement).placeholder = (translations[lang] as any)[key];
          } else {
            el.innerHTML = (translations[lang] as any)[key];
          }
        }
      });
      
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key && (translations[lang] as any)[key]) {
          (el as HTMLInputElement).placeholder = (translations[lang] as any)[key];
        }
      });
    }, 0);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translations[language].meta_title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', translations[language].meta_description);
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', translations[language].og_title);
  }, [language]);

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
