export const links = {
  github: 'https://github.com/lamkhai0604',
  linkedin: 'https://www.linkedin.com/in/khailam0604/',
  email: 'lamkhai0604@gmail.com',
};

export const projects = [
  {
    id: 'finding-house',
    title: 'Finding House',
    description:
      'A room-rental and roommate-finding platform for Seattle. Landlords post and manage listings; renters browse, filter and save favorites, and can describe what they want in plain English for the AI search to turn into filters.',
    img: '/projects/finding-house.jpg',
    tags: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'LLM'],
    demoUrl: 'https://finding-house.vercel.app',
    githubUrl: 'https://github.com/lamkhai0604/finding-house',
  },
  {
    id: 'commerceflow',
    title: 'CommerceFlow',
    description:
      'An e-commerce application with a React storefront and a Spring Boot API: catalog, guest and member carts, idempotent checkout, order tracking and an admin area. Session authentication with roles, CSRF protection and HTTPS, covered by unit, integration and real-browser end-to-end tests.',
    img: '/projects/commerceflow.png',
    tags: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Playwright'],
    demoUrl: 'https://khai-shop.vercel.app',
    githubUrl: 'https://github.com/lamkhai0604/commerceflow',
  },
  {
    id: 'algoquest',
    title: 'AlgoQuest',
    status: 'In progress',
    description:
      'A gamified web app for learning the algorithm patterns used in coding interviews. Players explain their approach in words, and an AI grades the explanation against a teacher-written answer key; optional Java code runs in a sandbox. Levels from Big-O basics through recursion are playable, with more in development.',
    tags: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Gemini API'],
    githubUrl: 'https://github.com/lamkhai0604/algoquest',
  },
];

export const skillGroups = [
  {
    name: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Redux', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    name: 'Backend',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'REST APIs', 'PostgreSQL', 'Flyway'],
  },
  {
    name: 'AI & Testing',
    skills: ['LLM API integration (Groq, Gemini)', 'JUnit', 'Testcontainers', 'Vitest / Jest', 'Playwright'],
  },
  {
    name: 'Tools',
    skills: ['Git & GitHub', 'GitHub Actions', 'Docker', 'Vercel', 'Render', 'Figma'],
  },
];
