import React from 'react';
import { usePortfolio } from '../context';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = usePortfolio();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/80 p-0.5 text-xs font-semibold backdrop-blur-sm ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        aria-pressed={language === 'fr'}
        className={`px-2.5 py-1 rounded-md transition-all duration-200 ${
          language === 'fr'
            ? 'bg-white dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 shadow-xs font-bold'
            : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
        }`}
      >
        FR
      </button>
      <span className="text-neutral-300 dark:text-neutral-700 select-none">|</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`px-2.5 py-1 rounded-md transition-all duration-200 ${
          language === 'en'
            ? 'bg-white dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 shadow-xs font-bold'
            : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
        }`}
      >
        EN
      </button>
    </div>
  );
};
