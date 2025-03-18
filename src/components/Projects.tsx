'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { projects as fallbackProjects } from '../utils/constants';
import { fetchGitHubProjects } from '../utils/githubService';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  sourceCode: string;
  liveDemo?: string | null;
  stars?: number;
  forks?: number;
  updatedAt?: string;
}

const Projects = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>('all');

  // Rastgele matrix karakterleri oluşturan fonksiyon
  const getRandomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  // Fetch GitHub projects when component mounts
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const githubProjects = await fetchGitHubProjects();
        if (githubProjects && githubProjects.length > 0) {
          setGithubProjects(githubProjects);
        } else {
          // Fallback to local projects if GitHub API fails or returns empty
          setGithubProjects(fallbackProjects as Project[]);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Error loading projects. Showing fallback data.');
        setGithubProjects(fallbackProjects as Project[]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // Tüm etiketleri topla
  const allTags = ['all', ...Array.from(new Set(githubProjects.flatMap(project => project.tags)))];

  // Etiketlere göre filtreleme
  const filteredProjects = currentFilter === 'all' 
    ? githubProjects 
    : githubProjects.filter(project => project.tags.includes(currentFilter));

  return (
    <section id="projects" className="py-20 bg-matrix-darker relative overflow-hidden">
      {/* Matrix pattern background */}
      <div className="matrix-pattern"></div>
      
      {/* Code rain effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-vertical-scroll">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="text-xs text-matrix-green opacity-20 whitespace-nowrap">
              {Array.from({ length: 100 }).map((_, j) => (
                <span key={j}>{getRandomChar()}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
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
              {t('projects.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              {t('projects.subtitle')}
            </motion.p>
            
            {/* Filter tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setCurrentFilter(tag)}
                  className={`px-3 py-1 text-sm rounded transition-all ${
                    currentFilter === tag 
                      ? 'bg-matrix-green text-matrix-black' 
                      : 'border border-matrix-green-faded text-matrix-green-faded hover:border-matrix-green hover:text-matrix-green'
                  }`}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Loading & Error States */}
          {loading && (
            <div className="matrix-terminal text-center py-12">
              <div className="text-xs text-matrix-green-faded mb-2">[system]$ <span className="text-matrix-green">loading_projects</span></div>
              <div className="flex justify-center items-center h-8 mb-4">
                <div className="matrix-loading">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="h-2 w-2 bg-matrix-green rounded-full mr-1"
                      style={{ 
                        animation: `matrixPulse 1s ease-in-out ${i * 0.1}s infinite`,
                        opacity: 0.2 + (i * 0.08)
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <p className="text-matrix-green">Accessing repository data...</p>
            </div>
          )}

          {error && !loading && (
            <div className="matrix-terminal text-center py-6 mb-8">
              <div className="text-xs text-matrix-green-faded mb-2">[system]$ <span className="text-matrix-green">error</span></div>
              <p className="text-red-500">{error}</p>
              <p className="text-matrix-green-faded mt-2">Displaying fallback data...</p>
            </div>
          )}

          {/* Projects Grid */}
          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="matrix-card relative overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="h-48 relative overflow-hidden border-b border-matrix-green">
                    <div className="absolute top-0 left-0 w-full h-6 bg-matrix-terminal z-10 flex items-center px-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-matrix-green ml-2 truncate">project://{project.title.toLowerCase().replace(/\s+/g, '-')}</div>
                    </div>
                    
                    <div className="absolute inset-0 bg-matrix-black/30 z-[1]"></div>
                    <Image
                      src={project.image || '/assets/images/project-placeholder.jpg'}
                      alt={project.title}
                      fill
                      className="object-cover"
                      style={{ marginTop: '24px' }}
                    />
                    
                    {/* Matrix code rain effect */}
                    <div className="absolute inset-0 z-[2] opacity-30 overflow-hidden">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="text-[8px] text-matrix-green whitespace-nowrap">
                          {Array.from({ length: 50 }).map((_, j) => (
                            <span key={j}>{getRandomChar()}</span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-4">
                    <h3 className="text-matrix-green text-shadow-matrix text-lg font-bold mb-2">{project.title}</h3>
                    
                    <p className="text-matrix-green-faded text-sm mb-4 h-12 overflow-hidden">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-xs px-2 py-1 border border-matrix-green-faded text-matrix-green-faded rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* GitHub Stats if available */}
                    {project.stars !== undefined && (
                      <div className="flex items-center text-xs text-matrix-green-faded mb-4">
                        <span className="flex items-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                          {project.stars}
                        </span>
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                            <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clipRule="evenodd" />
                          </svg>
                          {project.forks}
                        </span>
                        {project.updatedAt && (
                          <span className="ml-auto">
                            {new Date(project.updatedAt).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    )}
                    
                    {/* Action Buttons */}
                    <div className="flex justify-between mt-auto pt-2 border-t border-matrix-green-faded/30">
                      <a 
                        href={project.sourceCode} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="matrix-button text-xs py-1"
                      >
                        &lt;/&gt; Code
                      </a>
                      
                      {project.liveDemo && (
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="matrix-button text-xs py-1"
                        >
                          Demo &gt;&gt;
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          {/* More Projects Button */}
          {filteredProjects.length > 0 && (
            <div className="text-center mt-12">
              <a 
                href="https://github.com/furkanakar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="matrix-button inline-block"
              >
                {t('projects.viewMore')} &gt;&gt;
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 