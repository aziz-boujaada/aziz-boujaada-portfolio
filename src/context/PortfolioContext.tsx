import React, { useState, useEffect } from 'react';
import { Language, Theme, Project } from '../types';
import { fr } from '../locales/fr';
import { en } from '../locales/en';
import { PortfolioContext } from './portfolio-context-base';

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // French must be default language as requested
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('aziz_portfolio_lang');
    if (saved === 'en' || saved === 'fr') return saved;
    return 'fr';
  });

  // Dark/Light theme state
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('aziz_portfolio_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    // Default to dark for modern developer aesthetic
    return 'dark';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    localStorage.setItem('aziz_portfolio_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem('aziz_portfolio_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const t = language === 'fr' ? fr : en;

  return (
    <PortfolioContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        toggleTheme,
        t,
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
