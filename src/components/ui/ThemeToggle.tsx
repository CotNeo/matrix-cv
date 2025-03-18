'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can access the window object
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle theme between dark and light
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  // Matrix style theme labels
  const redPill = 'SYSTEM OVERRIDE';
  const bluePill = 'SYSTEM NORMAL';

  if (!mounted) {
    return (
      <div className="w-14 h-7 bg-matrix-darker border border-matrix-green rounded-full flex items-center justify-center opacity-70">
        <div className="w-4 h-4 bg-matrix-green rounded-full" />
      </div>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className={`relative h-7 rounded-full w-14 flex items-center transition-colors duration-300 focus:outline-none ${
        resolvedTheme === 'dark'
          ? 'bg-matrix-darker border border-matrix-green'
          : 'bg-matrix-darkest border border-red-500'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {/* Pill choice label */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[8px] font-matrix">
        {resolvedTheme === 'dark' ? (
          <span className="text-matrix-green text-shadow-matrix">
            {bluePill}
          </span>
        ) : (
          <span className="text-red-500 animate-pulse">
            {redPill}
          </span>
        )}
      </div>
      
      {/* Toggle pill with glow effect */}
      <motion.div
        className={`absolute w-5 h-5 rounded-full transition-transform duration-300 ${
          resolvedTheme === 'dark'
            ? 'bg-matrix-green translate-x-8 shadow-matrix' 
            : 'bg-red-500 translate-x-1 shadow-red-pill'
        }`}
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30
        }}
      />
      
      {/* Digital rain effect within the button */}
      <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none opacity-30">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute text-[8px] ${resolvedTheme === 'dark' ? 'text-matrix-green' : 'text-red-400'}`}
            style={{ left: `${i * 12 + 3}%` }}
            initial={{ y: -10 }}
            animate={{ y: 20 }}
            transition={{
              duration: 0.5 + Math.random() * 0.5,
              repeat: Infinity,
              repeatType: 'loop',
              delay: i * 0.07
            }}
          >
            {String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}
          </motion.div>
        ))}
      </div>
    </motion.button>
  );
};

export default ThemeToggle; 