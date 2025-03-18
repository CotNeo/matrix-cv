'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { socialLinks } from '../utils/constants';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // Matrix kodu efekti için rastgele karakter oluşturucu
  const generateMatrixChar = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$%@#*";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };
  
  // Simple terminal effect
  const [terminalText, setTerminalText] = useState(">>> connecting to matrix...");
  
  useEffect(() => {
    const messages = [
      ">>> connecting to matrix...",
      ">>> establishing secure connection...",
      ">>> connection established.",
      ">>> system status: online",
      `>>> copyright © ${currentYear} // matrix initialized`
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      setTerminalText(messages[index]);
      index = (index + 1) % messages.length;
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentYear]);

  return (
    <footer id="contact" className="bg-matrix-black border-t border-matrix-green/30 py-16 relative overflow-hidden">
      {/* Matrix arka plan efekti */}
      <div className="matrix-pattern opacity-30"></div>
      
      {/* Matrix kod yağmuru efekti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-vertical-scroll">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="flex gap-4 text-matrix-green opacity-10 overflow-hidden whitespace-nowrap">
              {Array.from({ length: 8 }).map((_, j) => (
                <div key={j} className="text-xs">
                  {Array.from({ length: 25 }).map((_, k) => (
                    <span key={k}>{generateMatrixChar()}</span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Logo and short description */}
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="text-3xl font-matrix text-matrix-green mb-6 inline-block">
                  Furkan Akar<span className="text-matrix-green animate-pulse">_</span>
                </Link>
                <p className="text-matrix-green-faded mt-4 max-w-md leading-relaxed font-mono text-sm">
                  A frontend developer passionate about creating interactive and responsive web applications with modern technologies.
                </p>

                {/* Social links */}
                <div className="flex space-x-4 mt-6">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-md bg-matrix-terminal border border-matrix-green/50 flex items-center justify-center text-matrix-green-faded hover:text-matrix-green hover:border-matrix-green transition-all duration-300"
                      whileHover={{ y: -5, scale: 1.1 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      aria-label={link.name}
                    >
                      {/* GitHub */}
                      {link.icon === 'github' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      )}
                      
                      {/* LinkedIn */}
                      {link.icon === 'linkedin' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      )}
                      
                      {/* Instagram */}
                      {link.icon === 'instagram' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      )}
                      
                      {/* Email */}
                      {link.icon === 'email' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                        </svg>
                      )}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick links */}
            <div className="md:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-matrix text-matrix-green mb-5 relative inline-block">
                  Quick Links
                  <span className="absolute -bottom-2 left-0 h-0.5 bg-matrix-green w-full opacity-50"></span>
                </h3>
                <ul className="space-y-3 mt-6 font-mono text-sm">
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/#about" className="text-matrix-green-faded hover:text-matrix-green transition-colors duration-300 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {t('nav.about')}
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/#tech" className="text-matrix-green-faded hover:text-matrix-green transition-colors duration-300 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {t('nav.tech')}
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/#projects" className="text-matrix-green-faded hover:text-matrix-green transition-colors duration-300 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {t('nav.projects')}
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/chatbot" className="text-matrix-green-faded hover:text-matrix-green transition-colors duration-300 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {t('nav.chatbot')}
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            </div>

            {/* Contact information */}
            <div className="md:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-matrix text-matrix-green mb-5 relative inline-block">
                  {t('footer.contact')}
                  <span className="absolute -bottom-2 left-0 h-0.5 bg-matrix-green w-full opacity-50"></span>
                </h3>
                <ul className="space-y-4 mt-6 font-mono text-sm">
                  <li className="flex items-center text-matrix-green-faded group">
                    <div className="w-10 h-10 rounded-md bg-matrix-terminal border border-matrix-green/50 flex items-center justify-center mr-3 group-hover:border-matrix-green transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <a href="mailto:furkan.akar@example.com" className="hover:text-matrix-green transition-colors duration-300 group-hover:text-matrix-green">
                      furkan.akar@example.com
                    </a>
                  </li>
                  <li className="flex items-center text-matrix-green-faded group">
                    <div className="w-10 h-10 rounded-md bg-matrix-terminal border border-matrix-green/50 flex items-center justify-center mr-3 group-hover:border-matrix-green transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="group-hover:text-matrix-green transition-colors duration-300">İstanbul, Türkiye</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Terminal console */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 mx-auto max-w-2xl bg-matrix-terminal border border-matrix-green/50 rounded-md overflow-hidden"
          >
            <div className="bg-matrix-darker border-b border-matrix-green/50 px-4 py-2 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-matrix-green font-mono">matrix-terminal</div>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="text-matrix-green animate-typing overflow-hidden whitespace-nowrap">
                {terminalText}
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-matrix-green/20 my-10"></div>

          {/* Copyright */}
          <div className="text-center text-matrix-green-faded text-sm font-mono">
            <p>© {currentYear} Furkan Akar. {t('footer.rights')}.</p>
            <p className="mt-2 text-xs">
              Built with <span className="text-matrix-green">Next.js</span>, <span className="text-matrix-green">TypeScript</span>, <span className="text-matrix-green">Tailwind CSS</span>, and <span className="text-matrix-green">Three.js</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 