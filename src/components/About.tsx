'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const { t } = useTranslation();
  
  // Binary kod efekti için rastgele karakter oluşturucu
  const generateRandomChar = () => {
    return Math.random() > 0.5 ? '1' : '0';
  };

  return (
    <section id="about" className="py-20 bg-matrix-black relative overflow-hidden">
      {/* Matrix arka plan deseni */}
      <div className="matrix-pattern"></div>
      
      {/* Binary kod overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="text-matrix-green text-xs">
            {Array.from({ length: 100 }).map((_, j) => (
              <span key={j}>{generateRandomChar()}</span>
            ))}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="section-title inline-block"
            >
              {t('about.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="section-subtitle text-matrix-green-faded"
            >
              {t('about.subtitle')}
            </motion.p>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3"
            >
              <div className="matrix-terminal p-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-8 bg-matrix-terminal border-b border-matrix-green flex items-center px-4">
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  </div>
                  <div className="ml-4 text-xs text-matrix-green">user@matrix:~$ show_identity</div>
                </div>
                
                <div className="pt-10 pb-2 px-2">
                  <div className="relative w-full aspect-square rounded overflow-hidden border border-matrix-green">
                    <Image
                      src="/profile.png"
                      alt={t('about.avatarAlt')}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-matrix-black opacity-30 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-matrix-black via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3"
            >
              <div className="matrix-terminal h-full">
                <div className="text-xs text-matrix-green-faded mb-2">[root@matrix ~]$ <span className="text-matrix-green">cat about.md</span></div>
                <div className="space-y-4 text-matrix-green">
                  {t('about.bio').split('\n\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-matrix-green text-shadow-matrix mb-2 font-bold">{t('about.experience.title')}</h3>
                    <ul className="space-y-1">
                      {(() => {
                        const items = t('about.experience.items', { returnObjects: true });
                        if (items && Array.isArray(items)) {
                          return items.map((item, index) => (
                            <li key={index} className="text-matrix-green-faded text-sm flex items-start">
                              <span className="mr-2">&gt;</span>
                              {String(item)}
                            </li>
                          ));
                        } else {
                          // Fallback for when items are not properly defined
                          return (
                            <li className="text-matrix-green-faded text-sm flex items-start">
                              <span className="mr-2">&gt;</span>
                              No experience items found. Please check the i18n configuration.
                            </li>
                          );
                        }
                      })()}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-matrix-green text-shadow-matrix mb-2 font-bold">{t('about.education.title')}</h3>
                    <ul className="space-y-1">
                      {(() => {
                        const items = t('about.education.items', { returnObjects: true });
                        if (items && Array.isArray(items)) {
                          return items.map((item, index) => (
                            <li key={index} className="text-matrix-green-faded text-sm flex items-start">
                              <span className="mr-2">&gt;</span>
                              {String(item)}
                            </li>
                          ));
                        } else {
                          // Fallback for when items are not properly defined
                          return (
                            <li className="text-matrix-green-faded text-sm flex items-start">
                              <span className="mr-2">&gt;</span>
                              No education items found. Please check the i18n configuration.
                            </li>
                          );
                        }
                      })()}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 text-xs text-matrix-green-faded">
                  [root@matrix ~]$ <span className="text-matrix-green">_</span>
                  <span className="animate-blink-caret inline-block h-4 w-2 bg-matrix-green ml-1"></span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 