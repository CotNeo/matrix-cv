// Navigation links
export const navLinks = [
  { key: 'home', label: 'nav.home', href: '/' },
  { key: 'about', label: 'nav.about', href: '/#about' },
  { key: 'tech', label: 'nav.tech', href: '/#tech' },
  { key: 'projects', label: 'nav.projects', href: '/#projects' },
  { key: 'github', label: 'nav.github', href: '/#github' },
  { key: 'certificates', label: 'nav.certificates', href: '/#certificates' },
];

// Certificates data
export const certificates = [
  {
    id: 'cert-1',
    title: 'Full Stack Open',
    organization: 'University of Helsinki',
    date: '2023',
    description: 'certificates.fullstack.description',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'TypeScript'],
    url: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/4122575dc0cda9c0d7ae61c0476a0d16',
    badgeImageUrl: 'https://img.shields.io/badge/Full%20Stack%20Open%20Certificate-%2300D1FF.svg?&style=for-the-badge&logo=code&logoColor=white',
    verified: true,
  },
  {
    id: 'cert-2',
    title: 'Full Stack GraphQL',
    organization: 'University of Helsinki',
    date: '2023',
    description: 'certificates.graphql.description',
    skills: ['GraphQL', 'Apollo Server', 'Apollo Client', 'React'],
    url: 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/9a2e150918ec8fa50aaae6c6b5c1f93d',
    badgeImageUrl: 'https://img.shields.io/badge/Full%20Stack%20GraphQL%20Certificate-%23FF5733.svg?&style=for-the-badge&logo=graphql&logoColor=white',
    verified: true,
  },
  {
    id: 'cert-3',
    title: 'AWS Developer Associate',
    organization: 'Amazon Web Services',
    date: 'In Progress',
    description: 'certificates.aws.description',
    skills: ['AWS', 'Cloud Computing', 'Serverless', 'Lambda', 'S3', 'DynamoDB'],
    url: null,
    badgeImageUrl: 'https://img.shields.io/badge/AWS%20Developer%20Associate-%23232F3E.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white',
    verified: false,
    inProgress: true,
  },
];

// Tech stack categories
export const techStack = {
  frontend: [
    { 
      name: 'React', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
      url: 'https://reactjs.org/',
    },
    { 
      name: 'Next.js', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg',
      url: 'https://nextjs.org/',
    },
    { 
      name: 'JavaScript', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    { 
      name: 'TypeScript', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
      url: 'https://www.typescriptlang.org/',
    },
    { 
      name: 'Redux', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
      url: 'https://redux.js.org/',
    },
    { 
      name: 'HTML5', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    { 
      name: 'CSS3', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    { 
      name: 'Tailwind CSS', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
      url: 'https://tailwindcss.com/',
    },
    { 
      name: 'React Bootstrap', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/reactbootstrap/reactbootstrap-original.svg',
      url: 'https://react-bootstrap.github.io/',
    },
    { 
      name: 'React Router', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/reactrouter/reactrouter-original.svg',
      url: 'https://reactrouter.com/',
    },
    { 
      name: 'Three.js', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg',
      url: 'https://threejs.org/',
    },
  ],
  backend: [
    { 
      name: 'Node.js', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
      url: 'https://nodejs.org/',
    },
    { 
      name: 'Express', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
      url: 'https://expressjs.com/',
    },
    { 
      name: 'Python', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      url: 'https://www.python.org/',
    },
    { 
      name: 'FastAPI', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg',
      url: 'https://fastapi.tiangolo.com/',
    },
    { 
      name: 'MongoDB', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
      url: 'https://www.mongodb.com/',
    },
    { 
      name: 'PostgreSQL', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
      url: 'https://www.postgresql.org/',
    },
    { 
      name: 'GraphQL', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg',
      url: 'https://graphql.org/',
    },
    { 
      name: 'Mongoose', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongoose/mongoose-original.svg',
      url: 'https://mongoosejs.com/',
    },
    { 
      name: 'Socket.IO', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg',
      url: 'https://socket.io/',
    },
  ],
  devops: [
    { 
      name: 'Git', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
      url: 'https://git-scm.com/',
    },
    { 
      name: 'Docker', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
      url: 'https://www.docker.com/',
    },
    { 
      name: 'AWS', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      url: 'https://aws.amazon.com/',
    },
    { 
      name: 'Vercel', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original-wordmark.svg',
      url: 'https://vercel.com/',
    },
    { 
      name: 'Heroku', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original-wordmark.svg',
      url: 'https://www.heroku.com/',
    },
    { 
      name: 'Netlify', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original-wordmark.svg',
      url: 'https://www.netlify.com/',
    },
  ],
  tools: [
    { 
      name: 'Jest', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg',
      url: 'https://jestjs.io/',
    },
    { 
      name: 'Babel', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/babel/babel-original.svg',
      url: 'https://babeljs.io/',
    },
    { 
      name: 'Vite', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg',
      url: 'https://vitejs.dev/',
    },
    { 
      name: 'NPM', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg',
      url: 'https://www.npmjs.com/',
    },
    { 
      name: 'Postman', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
      url: 'https://www.postman.com/',
    },
    { 
      name: 'Axios', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/axios/axios-plain-wordmark.svg',
      url: 'https://axios-http.com/',
    },
    { 
      name: 'JSON', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/json/json-original.svg',
      url: 'https://www.json.org/',
    },
  ],
};

// Projects data
export const projects = [
  {
    id: 'project-1',
    title: 'Next.js Portfolio Website',
    description: 'Kişisel portföy web sitesi - Next.js, TypeScript ve Three.js ile geliştirildi',
    image: '/assets/projects/portfolio.jpg',
    tags: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS'],
    sourceCode: 'https://github.com/CotNeo/threejs-nextjs-chatbot',
    liveDemo: 'https://cotneo.github.io/my-react-cv/',
  },
  {
    id: 'project-2',
    title: 'News App',
    description: 'HubX Frontend Developer Case Study - News App',
    image: '/assets/projects/ecommerce.jpg',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    sourceCode: 'https://github.com/CotNeo/news-app',
    liveDemo: 'https://news-app-mu-topaz.vercel.app',
  },
  {
    id: 'project-3',
    title: 'Sözlük Projesi',
    description: 'HubX-sozluk - Türkçe sözlük uygulaması',
    image: '/assets/projects/forum.jpg',
    tags: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    sourceCode: 'https://github.com/CotNeo/sozluk',
    liveDemo: 'https://sozluk-one.vercel.app',
  },
  {
    id: 'project-4',
    title: 'Meveddet Derneği',
    description: 'Meveddet Derneği İçin Next Projesi',
    image: '/assets/projects/weather.jpg',
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    sourceCode: 'https://github.com/CotNeo/meveddet-dernegi',
    liveDemo: 'https://www.meveddet.org',
  },
  {
    id: 'project-5',
    title: 'AI Vesikalık',
    description: 'LLM modellerden vesikalık üretme OPENCV & Mediapp projesi',
    image: '/assets/projects/tasks.jpg',
    tags: ['Python', 'OpenCV', 'AI', 'Machine Learning'],
    sourceCode: 'https://github.com/CotNeo/ai-vesilalik',
    liveDemo: null,
  },
  {
    id: 'project-6',
    title: 'Full Stack Open Course',
    description: 'Deep Dive Into Modern Web Development',
    image: '/assets/projects/blog.jpg',
    tags: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/CotNeo/fullstack-Open',
    liveDemo: 'https://fullstackopen.com/en/',
  },
];

// Social media links
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/CotNeo',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/furkan-akar-7a176618a',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/furkanaliakar',
    icon: 'instagram',
  },
  {
    name: 'Email',
    url: 'mailto:furkanaliakar@gmail.com',
    icon: 'email',
  },
]; 