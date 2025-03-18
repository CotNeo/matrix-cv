'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { certificates } from '../utils/constants';
import Image from 'next/image';

const Certificates = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<number | null>(null);
  const [showFullscreenCertificate, setShowFullscreenCertificate] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState('');
  
  // Matrix kodu efekti için rastgele karakter oluşturucu
  const generateMatrixChar = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$%@#*";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };
  
  // Random glitch effect
  const [glitchItem, setGlitchItem] = useState<number | null>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Rastgele bir sertifika seç ve glitch efekti uygula
      const randomIndex = Math.floor(Math.random() * certificates.length);
      setGlitchItem(randomIndex);
      
      // 300ms sonra glitch efektini kaldır
      setTimeout(() => {
        setGlitchItem(null);
      }, 300);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Fullscreen certificate modal
  const handleFullscreen = (imageUrl: string) => {
    setFullscreenImage(imageUrl);
    setShowFullscreenCertificate(true);
  };

  return (
    <section id="certificates" className="py-20 bg-matrix-black relative overflow-hidden">
      {/* Matrix arka plan efekti */}
      <div className="matrix-pattern"></div>
      
      {/* Matrix kod yağmuru efekti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-vertical-scroll">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex gap-4 text-matrix-green opacity-20 overflow-hidden whitespace-nowrap">
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
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="section-title inline-block"
            >
              {t('certificates.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              {t('certificates.description')}
            </motion.p>
          </div>

          {/* Certificates grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`matrix-card overflow-hidden transition-all duration-300 hover:shadow-lg relative 
                  ${glitchItem === index ? 'animate-glitch' : ''} 
                  ${selected === index ? 'ring-2 ring-matrix-green' : ''}`}
                onClick={() => setSelected(index === selected ? null : index)}
              >
                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-matrix text-matrix-green mb-2">
                        {certificate.title}
                      </h3>
                      <p className="text-xs md:text-sm text-matrix-green-faded">
                        {certificate.organization}
                      </p>
                    </div>
                    <span className="px-3 py-1 text-xs font-mono rounded-full border border-matrix-green text-matrix-green bg-matrix-darker">
                      {certificate.inProgress 
                        ? t('certificates.inProgress') 
                        : certificate.date}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-matrix-green-faded mb-4">
                    {t(certificate.description)}
                  </p>

                  {/* Certificate badge */}
                  <div className="mb-4 cursor-pointer transform transition-transform hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFullscreen(certificate.badgeImageUrl);
                      }}>
                    <div 
                      className="relative flex items-center justify-center p-2 bg-matrix-darker text-matrix-green rounded-md font-mono text-center" 
                      style={{ height: '24px' }}
                    >
                      <Image
                        src={certificate.badgeImageUrl}
                        alt={certificate.title}
                        width={150}
                        height={24}
                        className="h-auto"
                      />
                    </div>
                    <div className="text-xs text-center mt-1 text-matrix-green-faded">
                      Click to zoom
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold mb-2 text-matrix-green">
                      {t('certificates.skills')}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {certificate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded-md bg-matrix-terminal text-matrix-green border border-matrix-green/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between items-center mt-4">
                    {certificate.verified && (
                      <span className="flex items-center text-xs text-matrix-green">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t('certificates.verified')}
                      </span>
                    )}

                    {certificate.url && (
                      <a
                        href={certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="matrix-button-sm inline-flex items-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t('certificates.view')}
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Terminal decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-matrix-terminal border-t border-matrix-green flex items-center px-2">
                  <div className="w-2 h-2 rounded-full bg-matrix-green mr-1"></div>
                  <div className="w-2 h-2 rounded-full bg-matrix-green-faded mr-1"></div>
                  <div className="w-2 h-2 rounded-full bg-matrix-darker border border-matrix-green-faded"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Fullscreen certificate modal */}
      {showFullscreenCertificate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowFullscreenCertificate(false)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute -top-10 right-0 text-white text-3xl"
              onClick={() => setShowFullscreenCertificate(false)}
            >
              &times;
            </button>
            <div className="bg-white p-2 rounded">
              <div className="relative w-full h-auto" style={{ minHeight: '300px' }}>
                <Image
                  src={fullscreenImage}
                  alt="Certificate"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates; 