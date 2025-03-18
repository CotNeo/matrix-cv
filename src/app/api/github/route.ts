import { NextResponse } from 'next/server';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export async function GET() {
  try {
    // The token should be stored as an environment variable
    // For this example, we'll fetch public data without a token
    const username = 'CotNeo'; // Doğru GitHub kullanıcı adı
    
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    
    // Transform the data
    const projects = repos.map((repo: GitHubRepo) => ({
      id: repo.id.toString(),
      title: repo.name,
      description: repo.description || 'No description provided',
      image: '', // GitHub doesn't provide repo images
      tags: [repo.language].filter(Boolean),
      sourceCode: repo.html_url,
      liveDemo: repo.homepage,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updatedAt: repo.updated_at
    }));

    return NextResponse.json({ projects });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub repositories' },
      { status: 500 }
    );
  }
} 