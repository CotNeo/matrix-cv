'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ui/ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { navLinks } from '@/utils/constants';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [glitchIndex, setGlitchIndex] = useState(-1);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Random glitch effect for menu items
  useEffect(() => {
    const interval = setInterval(() => {
      // Random index for the glitch effect
      setGlitchIndex(Math.floor(Math.random() * navLinks.length));
      
      // Reset after short delay
      setTimeout(() => {
        setGlitchIndex(-1);
      }, 200);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Matrix code characters
  const generateMatrixChar = () => {
    const chars = "01";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-matrix-darker/90 backdrop-blur-md shadow-matrix py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative">
            <motion.div
              className="text-matrix-green font-matrix text-2xl font-bold flex items-center text-shadow-matrix"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2 text-xl opacity-70">[</span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                F
              </motion.span>
              <span>urk</span>
              <motion.span
                animate={{ 
                  opacity: [1, 0.5, 1],
                  textShadow: [
                    "0 0 5px rgba(0, 255, 65, 0.7)",
                    "0 0 15px rgba(0, 255, 65, 0.9)",
                    "0 0 5px rgba(0, 255, 65, 0.7)"
                  ] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                a
              </motion.span>
              <span>n</span>
              <span className="ml-2 text-xl opacity-70">]</span>
              
              {/* Matrix character overlay */}
              <div className="absolute -bottom-3 left-0 right-0 flex justify-center overflow-hidden h-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="text-[8px] text-matrix-green opacity-70 mx-px"
                    initial={{ y: -10 }}
                    animate={{ y: 10 }}
                    transition={{ 
                      duration: 1 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  >
                    {generateMatrixChar()}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navLinks.map((link, index) => (
                <li key={link.key}>
                  <Link 
                    href={link.href}
                    className={`relative font-matrix text-shadow-matrix transition-all ${
                      glitchIndex === index 
                        ? 'glitch-text' 
                        : 'text-matrix-green hover:text-matrix-green-light'
                    }`}
                  >
                    <motion.span
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: "0 0 8px rgba(0, 255, 65, 0.9)",
                      }}
                    >
                      {index === glitchIndex ? (
                        <span className="relative">
                          <span className="relative inline-block">{t(link.label)}</span>
                          <span className="absolute top-0 left-0 right-0 overflow-hidden text-red-500 opacity-70" style={{ clipPath: 'inset(0 0 50% 0)' }}>{t(link.label)}</span>
                          <span className="absolute top-0 left-0 right-0 overflow-hidden text-blue-400 opacity-70" style={{ clipPath: 'inset(50% 0 0 0)', transform: 'translateX(-2px)' }}>{t(link.label)}</span>
                        </span>
                      ) : (
                        <span>{t(link.label)}</span>
                      )}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme & Language Switchers */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-matrix-green focus:outline-none"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span 
                  className="w-full h-0.5 bg-matrix-green rounded-full transform origin-left"
                  animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? -2 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-matrix-green rounded-full"
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-matrix-green rounded-full transform origin-left"
                  animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? 0 : -3 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-matrix-black/95 backdrop-blur-md border-t border-matrix-green/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.key}>
                    <Link 
                      href={link.href}
                      className="block font-matrix text-xl text-matrix-green hover:text-matrix-green-light text-shadow-matrix py-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="inline-block w-6 opacity-70">&#62;</span> {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Mobile Theme & Language Switchers */}
              <div className="mt-6 pt-6 border-t border-matrix-green/30 flex items-center justify-between">
                <LanguageSwitcher />
                <ThemeToggle />
                
                {/* Matrix code decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-3 overflow-hidden opacity-20">
                  <div className="flex">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="text-[8px] text-matrix-green opacity-70"
                        initial={{ y: -10 }}
                        animate={{ y: 10 }}
                        transition={{ 
                          duration: 0.5 + Math.random(),
                          repeat: Infinity,
                          delay: i * 0.05,
                          repeatType: "loop"
                        }}
                      >
                        {generateMatrixChar()}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 