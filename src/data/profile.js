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
      'An e-commerce application with a React storefront and a Spring Boot API. Session authentication with roles, CSRF protection and HTTPS, covered by unit, integration and real-browser end-to-end tests.',
    img: '/projects/commerceflow.png',
    tags: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Playwright'],
    githubUrl: 'https://github.com/lamkhai0604/ecommerce-project',
  },
  {
    id: 'student-forum',
    title: 'Vietnam Student Forum',
    description:
      'Event pages for the Vietnamese Students Association, helping students connect with the association and its members.',
    img: '/projects/student-forum.png',
    tags: ['React', 'JavaScript', 'CSS'],
    demoUrl: 'https://svvn.hoisinhvien.com.vn/event',
  },
];

export const skillGroups = [
  {
    name: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Redux', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    name: 'Backend',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'PostgreSQL'],
  },
  {
    name: 'AI & Testing',
    skills: ['LLM API integration', 'JUnit', 'Vitest / Jest', 'Playwright'],
  },
  {
    name: 'Tools',
    skills: ['Git & GitHub', 'GitHub Actions', 'Docker', 'Vercel', 'Figma'],
  },
];
