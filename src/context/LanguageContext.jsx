import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Read saved preference or default to English ('en')
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('raj_electric_lang');
      return saved === 'gu' ? 'gu' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang) => {
    const validLang = lang === 'gu' ? 'gu' : 'en';
    setLanguageState(validLang);
    try {
      localStorage.setItem('raj_electric_lang', validLang);
      document.documentElement.lang = validLang === 'gu' ? 'gu' : 'en';
    } catch (e) {
      console.error(e);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'gu' : 'en');
  };

  useEffect(() => {
    try {
      document.documentElement.lang = language === 'gu' ? 'gu' : 'en';
    } catch {}
  }, [language]);

  /**
   * Helper translation function: t('home.heroTitle', 'Fallback English')
   */
  const t = (path, fallback = '') => {
    if (!path) return fallback;
    const parts = path.split('.');
    let current = TRANSLATIONS[language];
    for (const part of parts) {
      if (current && current[part] !== undefined) {
        current = current[part];
      } else {
        // Fallback to English translation if available
        let engCurrent = TRANSLATIONS['en'];
        for (const p of parts) {
          if (engCurrent && engCurrent[p] !== undefined) {
            engCurrent = engCurrent[p];
          } else {
            return fallback || path;
          }
        }
        return engCurrent || fallback;
      }
    }
    return current !== undefined ? current : fallback;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isGujarati: language === 'gu' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
