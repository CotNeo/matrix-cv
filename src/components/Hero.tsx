'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import MatrixRain from './three/MatrixRain';

const Hero = () => {
  const { t } = useTranslation();
  const [displayedText, setDisplayedText] = useState<string>('');
  const [textIndex, setTextIndex] = useState<number>(0);
  const typingSpeedRef = useRef(100); // MS per character
  const deletingSpeedRef = useRef(50); // MS per character
  
  // Texts to cycle through
  const texts = useMemo(() => [
    t('hero.typer.1'),
    t('hero.typer.2'),
    t('hero.typer.3'),
  ], [t]);

  const [isDeleting, setIsDeleting] = useState(false);
  const pauseTime = useRef(2000);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Yazma modu
      if (!isDeleting && displayedText.length < texts[textIndex].length) {
        setDisplayedText(texts[textIndex].substring(0, displayedText.length + 1));
        typingSpeedRef.current = 100 - Math.random() * 50;
      } 
      // Silme modu
      else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(texts[textIndex].substring(0, displayedText.length - 1));
        deletingSpeedRef.current = 50 - Math.random() * 30;
      } 
      // Silme işlemi bitti, bir sonraki yazıya geç
      else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      } 
      // Yazma işlemi bitti, silme moduna geç
      else {
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime.current);
      }
    }, isDeleting ? deletingSpeedRef.current : typingSpeedRef.current);

    return () => clearTimeout(timeout);
  }, [displayedText, textIndex, isDeleting, texts]);

  // Matrix kodlarını arka planda görüntüle
  const renderCodeOverlay = () => {
    const lines = Array(20).fill(0).map((_, i) => (
      <div key={i} className="text-matrix-green opacity-30">
        {Array(50).fill(0).map((_, j) => (
          <span key={j}>{String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}</span>
        ))}
      </div>
    ));
    
    return <div className="code-overlay animate-vertical-scroll">{lines}</div>;
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-matrix-black py-20">
      {/* Three.js Matrix Rain Effect */}
      <MatrixRain />
      
      {/* Statik kod overlay */}
      {renderCodeOverlay()}
      
      {/* Hero içerik bölümü */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-xl md:text-2xl mb-4 font-matrix text-matrix-green-faded">
            {t('hero.greeting')}
          </h2>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-7xl font-bold mb-8 text-matrix-green text-shadow-matrix-lg digital-glitch"
          data-text="Furkan Akar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Furkan Akar
        </motion.h1>
        
        <div className="h-16 flex items-center justify-center">
          <h3 className="text-xl md:text-3xl font-matrix text-matrix-green-light text-shadow-matrix terminal-text">
            <span className="inline-block">$ </span>
            <span className="terminal-typing">{displayedText}</span>
          </h3>
        </div>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="matrix-terminal max-w-lg mx-auto p-4 font-mono text-left">
            <p className="text-matrix-green-faded">[root@matrix ~]$ <span className="text-matrix-green">whoami</span></p>
            <p className="text-matrix-green mb-2">frontend-developer</p>
            
            <p className="text-matrix-green-faded">[root@matrix ~]$ <span className="text-matrix-green">cat skills.txt</span></p>
            <p className="text-matrix-green mb-2">React.js | TypeScript | Next.js | Three.js | Tailwind</p>
            
            <p className="text-matrix-green-faded">[root@matrix ~]$ <span className="text-matrix-green">./status</span></p>
            <p className="text-matrix-green animate-matrix-fade">Ready to create something extraordinary...</p>
            <div className="h-4 w-4 border-r-2 border-matrix-green animate-blink-caret inline-block"></div>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <a href="#projects" className="matrix-button flex items-center gap-2">
            <span>{t('hero.view_projects')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          
          <a href="#tech" className="matrix-button flex items-center gap-2 group">
            <span>{t('hero.discover_skills')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:rotate-90" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
        
        <motion.div
          className="mt-24 text-xs text-matrix-green-faded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <p>Press Esc to exit The Matrix</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero; 