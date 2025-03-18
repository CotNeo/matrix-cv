'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
  totalCommits?: number;
  topLanguages: { name: string; percentage: number }[];
}

const GitHubStatus = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const consoleRef = useRef<HTMLDivElement>(null);

  // Simüle edilmiş terminal konsol komutları
  const addConsoleMessage = (message: string, delay = 0) => {
    setTimeout(() => {
      setConsoleOutput(prev => [...prev, message]);
      // Konsol çıktısının sonuna otomatik scroll
      if (consoleRef.current) {
        consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
      }
    }, delay);
  };

  // Matrix kodu efekti için rastgele karakter oluşturucu
  const generateMatrixChar = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$%@#*";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setIsLoading(true);
        // Terminal başlangıç mesajları
        addConsoleMessage('[system]: Initializing GitHub connection...', 0);
        addConsoleMessage('[system]: Requesting user data...', 500);
        
        // Fetch user data
        const userResponse = await fetch(`/api/github`);
        
        if (!userResponse.ok) {
          throw new Error(`GitHub API error: ${userResponse.status}`);
        }

        addConsoleMessage('[system]: User data received. Processing metrics...', 1500);
        
        const userData = await userResponse.json();
        setStats(userData);
        addConsoleMessage('[system]: Data processing complete. Rendering metrics...', 2500);
        
      } catch (err) {
        console.error('Failed to fetch GitHub stats:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        addConsoleMessage('[system]: ERROR: Failed to retrieve GitHub metrics.', 1000);
        addConsoleMessage('[system]: Displaying fallback data...', 1500);
        
        // Fallback veriler
        setStats({
          publicRepos: 15,
          followers: 32,
          following: 18,
          totalStars: 47,
          totalForks: 23,
          totalCommits: 578,
          topLanguages: [
            { name: 'JavaScript', percentage: 42 },
            { name: 'TypeScript', percentage: 28 },
            { name: 'HTML', percentage: 15 },
            { name: 'CSS', percentage: 10 },
            { name: 'Python', percentage: 5 }
          ]
        });
      } finally {
        setIsLoading(false);
        addConsoleMessage('[system]: Status display complete.', 3000);
      }
    };

    fetchGitHubStats();
  }, []);

  return (
    <section id="github" className="py-20 bg-matrix-black relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Section başlığı */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="section-title inline-block"
            >
              {t('github.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              {t('github.subtitle')}
            </motion.p>
          </div>

          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="matrix-terminal mb-10 p-0 overflow-hidden"
          >
            {/* Terminal header */}
            <div className="bg-matrix-terminal border-b border-matrix-green px-4 py-2 flex items-center">
              <div className="flex items-center space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-matrix-green font-matrix">github-status@matrix:~</div>
            </div>
            
            {/* Terminal content */}
            <div className="p-4">
              {/* Terminal console output */}
              <div ref={consoleRef} className="h-32 overflow-y-auto mb-4 font-mono text-xs">
                {consoleOutput.map((line, index) => (
                  <div key={index} className="mb-1 text-matrix-green-faded">{line}</div>
                ))}
                {isLoading && (
                  <div className="text-matrix-green animate-pulse">_</div>
                )}
              </div>
              
              {!isLoading && stats && (
                <div className="space-y-6">
                  {/* GitHub metrics grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {/* Repositories */}
                    <div className="matrix-card p-3 text-center">
                      <div className="text-xs text-matrix-green-faded mb-1">Repositories</div>
                      <div className="text-2xl text-matrix-green">{stats.publicRepos}</div>
                    </div>
                    
                    {/* Stars */}
                    <div className="matrix-card p-3 text-center">
                      <div className="text-xs text-matrix-green-faded mb-1">Stars</div>
                      <div className="text-2xl text-matrix-green">{stats.totalStars}</div>
                    </div>
                    
                    {/* Forks */}
                    <div className="matrix-card p-3 text-center">
                      <div className="text-xs text-matrix-green-faded mb-1">Forks</div>
                      <div className="text-2xl text-matrix-green">{stats.totalForks}</div>
                    </div>
                    
                    {/* Followers */}
                    <div className="matrix-card p-3 text-center">
                      <div className="text-xs text-matrix-green-faded mb-1">Followers</div>
                      <div className="text-2xl text-matrix-green">{stats.followers}</div>
                    </div>
                    
                    {/* Following */}
                    <div className="matrix-card p-3 text-center">
                      <div className="text-xs text-matrix-green-faded mb-1">Following</div>
                      <div className="text-2xl text-matrix-green">{stats.following}</div>
                    </div>
                    
                    {/* Commits */}
                    <div className="matrix-card p-3 text-center">
                      <div className="text-xs text-matrix-green-faded mb-1">Commits</div>
                      <div className="text-2xl text-matrix-green">{stats.totalCommits || '---'}</div>
                    </div>
                  </div>
                  
                  {/* Languages chart */}
                  <div className="matrix-card p-4">
                    <div className="text-sm text-matrix-green mb-3 font-bold">Top Languages</div>
                    <div className="space-y-3">
                      {stats.topLanguages.map((lang) => (
                        <div key={lang.name}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-matrix-green">{lang.name}</span>
                            <span className="text-matrix-green-faded">{lang.percentage}%</span>
                          </div>
                          <div className="w-full bg-matrix-darker rounded-full h-2.5">
                            <div
                              className="bg-matrix-green h-2.5 rounded-full"
                              style={{ width: `${lang.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Terminal prompt */}
                  <div className="text-xs text-matrix-green-faded">
                    github@matrix:~$ <span className="text-matrix-green">view-profile</span>
                  </div>
                  
                  {/* View profile button */}
                  <div className="text-center mt-4">
                    <a
                      href="https://github.com/furkanakar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="matrix-button inline-block"
                    >
                      View GitHub Profile &gt;_
                    </a>
                  </div>
                </div>
              )}
              
              {/* Error display */}
              {error && !isLoading && (
                <div className="text-red-500 mb-4">
                  <p className="font-bold">Error:</p>
                  <p>{error}</p>
                  <p className="text-matrix-green-faded mt-2">
                    Showing fallback data. Please try again later.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStatus; 