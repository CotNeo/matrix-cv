'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGit, FaNpm, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiSocketdotio, SiJest, SiCypress, SiVercel, SiNetlify, SiHeroku, SiPostman, SiVite, SiBabel, SiJsonwebtokens, SiReactrouter } from 'react-icons/si';
import { TbBrandNextjs, TbBrandFramerMotion } from 'react-icons/tb';
import { RiBootstrapFill } from 'react-icons/ri';
import { BsFileCodeFill } from 'react-icons/bs';
import { AiFillApi } from 'react-icons/ai';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  description: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'api' | 'testing' | 'tools';
}

const TechStack = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [glitchInterval, setGlitchInterval] = useState<NodeJS.Timeout | null>(null);
  const [glitchTech, setGlitchTech] = useState<string | null>(null);

  // Tech stack definitions
  const techStack = useMemo(() => [
    // Frontend
    { name: 'React', icon: <FaReact size={48} />, description: 'UI Library', category: 'frontend' },
    { name: 'Next.js', icon: <TbBrandNextjs size={48} />, description: 'React Framework', category: 'frontend' },
    { name: 'TypeScript', icon: <SiTypescript size={48} />, description: 'Typed JavaScript', category: 'frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} />, description: 'CSS Framework', category: 'frontend' },
    { name: 'Redux', icon: <SiRedux size={48} />, description: 'State Management', category: 'frontend' },
    { name: 'Framer Motion', icon: <TbBrandFramerMotion size={48} />, description: 'Animation Library', category: 'frontend' },
    { name: 'React Bootstrap', icon: <RiBootstrapFill size={48} />, description: 'UI Components', category: 'frontend' },
    { name: 'HTML5', icon: <FaHtml5 size={48} />, description: 'Markup Language', category: 'frontend' },
    { name: 'CSS3', icon: <FaCss3 size={48} />, description: 'Styling Language', category: 'frontend' },
    { name: 'JavaScript', icon: <FaJs size={48} />, description: 'Programming Language', category: 'frontend' },
    { name: 'React Router', icon: <SiReactrouter size={48} />, description: 'Routing Library', category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: <FaNodeJs size={48} />, description: 'JavaScript Runtime', category: 'backend' },
    { name: 'Express', icon: <SiExpress size={48} />, description: 'Web Framework', category: 'backend' },
    { name: 'GraphQL', icon: <SiGraphql size={48} />, description: 'API Query Language', category: 'backend' },
    { name: 'Socket.IO', icon: <SiSocketdotio size={48} />, description: 'Real-time Communication', category: 'backend' },
    { name: 'Mongoose', icon: <BsFileCodeFill size={48} />, description: 'MongoDB ODM', category: 'backend' },
    { name: 'Axios', icon: <BsFileCodeFill size={48} />, description: 'HTTP Client', category: 'backend' },
    
    // Database
    { name: 'MongoDB', icon: <SiMongodb size={48} />, description: 'NoSQL Database', category: 'database' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={48} />, description: 'SQL Database', category: 'database' },
    { name: 'JSON', icon: <SiJsonwebtokens size={48} />, description: 'Data Format', category: 'database' },
    
    // DevOps
    { name: 'Docker', icon: <FaDocker size={48} />, description: 'Containerization', category: 'devops' },
    { name: 'AWS', icon: <FaAws size={48} />, description: 'Cloud Services', category: 'devops' },
    { name: 'Vercel', icon: <SiVercel size={48} />, description: 'Deployment Platform', category: 'devops' },
    { name: 'Netlify', icon: <SiNetlify size={48} />, description: 'Deployment Platform', category: 'devops' },
    { name: 'Heroku', icon: <SiHeroku size={48} />, description: 'Cloud Platform', category: 'devops' },
    { name: 'Git', icon: <FaGit size={48} />, description: 'Version Control', category: 'devops' },
    
    // API Development
    { name: 'RESTful APIs', icon: <AiFillApi size={48} />, description: 'API Architecture', category: 'api' },
    { name: 'GraphQL APIs', icon: <SiGraphql size={48} />, description: 'API Query Language', category: 'api' },
    { name: 'WebSockets', icon: <SiSocketdotio size={48} />, description: 'Real-time Protocol', category: 'api' },
    { name: 'Postman', icon: <SiPostman size={48} />, description: 'API Testing Tool', category: 'api' },
    
    // Testing
    { name: 'Jest', icon: <SiJest size={48} />, description: 'Testing Framework', category: 'testing' },
    { name: 'Cypress', icon: <SiCypress size={48} />, description: 'E2E Testing', category: 'testing' },
    { name: 'Supertest', icon: <BsFileCodeFill size={48} />, description: 'HTTP Testing', category: 'testing' },
    
    // Tools
    { name: 'Git', icon: <FaGit size={48} />, description: 'Version Control', category: 'tools' },
    { name: 'NPM', icon: <FaNpm size={48} />, description: 'Package Manager', category: 'tools' },
    { name: 'Babel', icon: <SiBabel size={48} />, description: 'JavaScript Compiler', category: 'tools' },
    { name: 'Vite', icon: <SiVite size={48} />, description: 'Build Tool', category: 'tools' },
    { name: 'VS Code', icon: <BsFileCodeFill size={48} />, description: 'Code Editor', category: 'tools' },
  ] as TechItem[], []);

  // Add a Matrix glitch effect to randomly selected tech item
  useEffect(() => {
    const interval = setInterval(() => {
      const filteredTech = techStack.filter(tech => tech.category === activeCategory);
      if (filteredTech.length > 0) {
        const randomTech = filteredTech[Math.floor(Math.random() * filteredTech.length)];
        setGlitchTech(randomTech.name);
        
        // Clear the glitch effect after a short delay
        setTimeout(() => {
          setGlitchTech(null);
        }, 300);
      }
    }, 3000);
    
    setGlitchInterval(interval);
    
    return () => {
      if (glitchInterval) clearInterval(glitchInterval);
    };
  }, [activeCategory, techStack, glitchInterval]);

  const categories = [
    { key: 'frontend', label: t('tech.frontend') },
    { key: 'backend', label: t('tech.backend') },
    { key: 'database', label: t('tech.database') },
    { key: 'devops', label: t('tech.devops') },
    { key: 'api', label: t('tech.api') },
    { key: 'testing', label: t('tech.testing') },
    { key: 'tools', label: t('tech.tools') },
  ];

  const filteredTechStack = techStack.filter(tech => tech.category === activeCategory);
  
  // Matrix binary code effect
  const generateBinaryEffect = () => {
    return Array.from({ length: 20 }).map((_, i) => (
      <div 
        key={i} 
        className="absolute text-[8px] text-matrix-green opacity-20"
        style={{ 
          left: `${Math.random() * 100}%`, 
          top: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 360}deg)`
        }}
      >
        {Array.from({ length: 8 }).map((_, j) => (
          <span key={j}>{Math.round(Math.random())}</span>
        ))}
      </div>
    ));
  };

  return (
    <section id="tech" className="py-20 bg-matrix-darkest relative overflow-hidden">
      {/* Background decorative elements - Matrix patterns */}
      <div className="matrix-pattern absolute inset-0 opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">
            {t('tech.title')}
          </h2>
          <p className="section-subtitle text-matrix-green-faded max-w-2xl mx-auto">
            {t('tech.description')}
          </p>
        </motion.div>

        {/* Category Selector - Styled as terminal tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category, index) => (
            <motion.button
              key={category.key}
              className={`px-4 py-2 border font-matrix text-sm md:text-base ${
                activeCategory === category.key
                  ? 'bg-matrix-darker border-matrix-green text-matrix-green shadow-matrix'
                  : 'bg-matrix-darkest border-matrix-green-dark text-matrix-green-faded'
              }`}
              onClick={() => setActiveCategory(category.key)}
              whileHover={{ 
                backgroundColor: 'rgba(0, 255, 65, 0.1)',
                boxShadow: '0 0 10px rgba(0, 255, 65, 0.3)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <span className="inline-block mr-1 opacity-60">{'>'}</span>
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Tech Grid - Terminal like cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 relative">
          {/* Binary Matrix Effect in background */}
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            {generateBinaryEffect()}
          </div>
          
          {filteredTechStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={`relative bg-matrix-darker border border-matrix-green p-4 flex flex-col items-center text-center group ${
                glitchTech === tech.name ? 'animate-glitch' : ''
              }`}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ 
                boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)',
                y: -5
              }}
            >
              {/* Tech Icon with Matrix filter effect */}
              <div className="relative w-12 h-12 mb-3 flex items-center justify-center">
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredTech === tech.name ? 'opacity-30' : 'opacity-100'
                }`}>
                  <div className="absolute inset-0 bg-matrix-green opacity-20 filter blur-sm"></div>
                  <div className="relative z-10 text-matrix-green">
                    {tech.icon}
                  </div>
                </div>
                
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredTech === tech.name ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-matrix-green-bright">
                    {tech.icon}
                  </div>
                </div>
              </div>
              
              {/* Tech Name with Matrix terminal effect */}
              <h3 className="text-matrix-green text-lg font-matrix font-bold mb-1 text-shadow-matrix">
                {tech.name}
              </h3>
              
              {/* Description with reveal effect */}
              <p className={`text-sm text-matrix-green-faded transition-opacity duration-300 ${
                hoveredTech === tech.name ? 'opacity-100' : 'opacity-60'
              }`}>
                {tech.description}
              </p>
              
              {/* Terminal command decoration */}
              <div className={`absolute bottom-2 right-2 text-[8px] text-matrix-green-faded transition-opacity duration-300 ${
                hoveredTech === tech.name ? 'opacity-100' : 'opacity-0'
              }`}>
                $ load_{tech.name.toLowerCase()}
              </div>
              
              {/* Glow effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-matrix-green opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                animate={hoveredTech === tech.name ? {
                  opacity: [0.02, 0.05, 0.02],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Matrix-style terminal display */}
        <motion.div
          className="mt-16 mx-auto max-w-2xl matrix-terminal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="terminal-text">
            <p className="text-matrix-green-faded mb-1">[sys@matrix ~]$ <span className="text-matrix-green">scan_technologies</span></p>
            <p className="text-matrix-green mb-2">{`> Scanning ${activeCategory} technologies...`}</p>
            
            <p className="text-matrix-green-faded mb-1">[sys@matrix ~]$ <span className="text-matrix-green">show_status</span></p>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-matrix-green rounded-full animate-pulse"></span>
              <p className="text-matrix-green">All systems operational. Ready for development.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack; 