'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeCode, setActiveCode] = useState('');
  
  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' }
  ];
  
  // Initialize active language
  useEffect(() => {
    setActiveCode(i18n.language || 'en');
  }, [i18n.language]);
  
  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Change language function
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setActiveCode(code);
    setIsOpen(false);
  };
  
  // Get active language data
  const activeLanguage = languages.find(lang => lang.code === activeCode) || languages[0];
  
  // Matrix effect for language codes
  const generateCodeEffect = (code: string) => {
    return code.split('').map((char, i) => (
      <motion.span 
        key={i}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.2
        }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 bg-matrix-darker border border-matrix-green px-2 py-1 rounded-sm text-matrix-green text-sm font-matrix focus:outline-none"
        whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(0, 255, 65, 0.5)" }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{activeLanguage.flag}</span>
        <span className="hidden sm:inline-block">{generateCodeEffect(activeLanguage.code)}</span>
        <svg className="w-4 h-4 text-matrix-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-40 bg-matrix-darkest border border-matrix-green shadow-matrix rounded-sm z-50 overflow-hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Matrix code rain effect in background */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-xs text-matrix-green"
                  style={{ 
                    left: `${i * 10}%`,
                    top: -20
                  }}
                  animate={{ 
                    y: [0, 100],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1 + Math.random() * 2,
                    delay: i * 0.2
                  }}
                >
                  {String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}
                </motion.div>
              ))}
            </div>
            
            <div className="py-1 relative z-10">
              {languages.map((language) => (
                <motion.button
                  key={language.code}
                  type="button"
                  onClick={() => changeLanguage(language.code)}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 ${
                    activeLanguage.code === language.code
                      ? 'bg-matrix-darker text-matrix-green'
                      : 'text-matrix-green-faded hover:bg-matrix-darker hover:text-matrix-green'
                  }`}
                  whileHover={{ 
                    backgroundColor: "rgba(0, 255, 65, 0.1)",
                    textShadow: "0 0 5px rgba(0, 255, 65, 0.7)"
                  }}
                >
                  <span>{language.flag}</span>
                  <span className="font-matrix">{generateCodeEffect(language.code)}</span>
                </motion.button>
              ))}
            </div>
            
            {/* Terminal decoration at bottom */}
            <div className="border-t border-matrix-green/30 px-2 py-1 text-[8px] text-matrix-green-faded text-right font-mono">
              <span className="animate-pulse">sys:language={activeCode}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher; 