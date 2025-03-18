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

/**
 * Fetches GitHub repositories from our API endpoint
 */
export const fetchGitHubProjects = async (): Promise<Project[]> => {
  try {
    // Use relative URL to avoid CORS issues and to work in both development and production
    const response = await fetch('/api/github');
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.projects;
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    throw error;
  }
}; 