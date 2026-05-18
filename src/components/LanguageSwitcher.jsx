import { useTranslation } from 'react-i18next';
import { languageNames } from '../i18n';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Flag mapping for supported languages
const languageFlags = {
  'ar': '🇸🇦',
  'bn': '🇧🇩',
  'de': '🇩🇪',
  'en': '🇺🇸',
  'es': '🇪🇸',
  'fr': '🇫🇷',
  'hi': '🇮🇳',
  'id': '🇮🇩',
  'ja': '🇯🇵',
  'ko': '🇰🇷',
  'pt-BR': '🇧🇷',
  'pt-PT': '🇵🇹',
  'ru': '🇷🇺',
  'tr': '🇹🇷',
  'vi': '🇻🇳',
  'zh-CN': '🇨🇳',
  'zh-TW': '🇹🇼',
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
    document.documentElement.dir = i18n.dir(); // Handle RTL languages
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="language-switcher" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={toggleDropdown}
        className="btn"
        style={{ 
          background: isOpen ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255,255,255,0.05)', 
          border: '1px solid var(--border-glass)', 
          color: 'white',
          padding: '8px 16px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: isOpen ? '0 0 15px rgba(6, 182, 212, 0.2)' : 'none',
          transition: 'all 0.2s ease'
        }}
      >
        <span style={{ fontSize: '18px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
          {languageFlags[i18n.language] || '🌐'}
        </span>
        <span style={{ fontWeight: '500', fontSize: '15px' }}>
          {languageNames[i18n.language] || 'Language'}
        </span>
        <svg 
          width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', opacity: 0.7 }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="language-dropdown-scroll"
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '12px',
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--border-glass)',
              borderRadius: '16px',
              padding: '8px',
              minWidth: '220px',
              maxHeight: '380px',
              overflowY: 'auto',
              zIndex: 1000,
              boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset'
            }}
          >
            {Object.entries(languageNames).map(([code, name]) => {
              const isActive = i18n.language === code;
              return (
                <button
                  key={code}
                  onClick={() => changeLanguage(code)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 14px',
                    background: isActive ? 'linear-gradient(90deg, rgba(6, 182, 212, 0.15), transparent)' : 'transparent',
                    color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                    border: 'none',
                    borderLeft: isActive ? '3px solid var(--primary-cyan)' : '3px solid transparent',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '2px',
                    transition: 'all 0.2s ease',
                    fontWeight: isActive ? '600' : '400',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.color = 'var(--text-main)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-muted)';
                    }
                  }}
                >
                  <span style={{ fontSize: '18px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                    {languageFlags[code] || '🌐'}
                  </span>
                  <span style={{ flex: 1 }}>{name}</span>
                  {isActive && (
                    <span style={{ color: 'var(--primary-cyan)', fontSize: '14px' }}>✓</span>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
