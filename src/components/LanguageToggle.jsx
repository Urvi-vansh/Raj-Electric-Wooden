import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle({ className = '', variant = 'header' }) {
  const { language, setLanguage, isGujarati } = useLanguage();

  if (variant === 'mobile') {
    return (
      <div className={`lang-toggle-mobile ${className}`}>
        <div className="lang-toggle-label">
          <Globe size={18} />
          <span>ભાષા / Language:</span>
        </div>
        <div className="lang-btn-group">
          <button
            type="button"
            className={`lang-choice-btn ${!isGujarati ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
            aria-label="Switch to English"
          >
            English
          </button>
          <button
            type="button"
            className={`lang-choice-btn ${isGujarati ? 'active' : ''}`}
            onClick={() => setLanguage('gu')}
            aria-label="ગુજરાતી ભાષા પસંદ કરો"
          >
            ગુજરાતી
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`lang-toggle-wrap ${className}`} title="Change Website Language / ભાષા બદલો">
      <div className="lang-pill">
        <Globe size={15} className="lang-icon" />
        <button
          type="button"
          className={`lang-btn ${!isGujarati ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
          aria-label="Switch to English"
        >
          English
        </button>
        <span className="lang-divider">|</span>
        <button
          type="button"
          className={`lang-btn ${isGujarati ? 'active' : ''}`}
          onClick={() => setLanguage('gu')}
          aria-label="ગુજરાતી ભાષા પસંદ કરો"
        >
          ગુજરાતી
        </button>
      </div>
    </div>
  );
}
