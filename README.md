# Khai Lam — Portfolio

Personal portfolio website: who I am, what I build, and how to reach me.

**Live site:** https://khai-porfolio.vercel.app

## Featured projects

| Project | Summary | Links |
| --- | --- | --- |
| Finding House | Room-rental and roommate-finding platform for Seattle with AI-assisted search. React, TypeScript, Spring Boot, PostgreSQL. | [Live](https://finding-house.vercel.app) · [Code](https://github.com/lamkhai0604/finding-house) |
| CommerceFlow | E-commerce application with session authentication, CSRF protection and end-to-end tests. React, Spring Boot, PostgreSQL, Playwright. | [Code](https://github.com/lamkhai0604/ecommerce-project) |
| Vietnam Student Forum | Event pages for the Vietnamese Students Association. | [Live](https://svvn.hoisinhvien.com.vn/event) |

## Tech stack

- React 19 and Vite
- Tailwind CSS 4
- Lucide icons, react-toastify
- Contact form delivered through [FormSubmit](https://formsubmit.co)
- Hosted on Vercel

## Project structure

```text
public/            static files (favicon, project screenshots)
src/
  components/      page sections (Hero, About, Skills, Projects, Contact) and layout
  data/profile.js  projects, skills and contact links — edit content here
  pages/           Home and NotFound
  index.css        theme tokens (light and dark) and animations
```

## Running locally

Requires Node 20 or later.

```bash
npm install
npm run dev       # development server on http://localhost:5173
npm run build     # production build in dist/
npm run lint
```

## Contact

- Email: lamkhai0604@gmail.com
- LinkedIn: [khailam0604](https://www.linkedin.com/in/khailam0604/)
