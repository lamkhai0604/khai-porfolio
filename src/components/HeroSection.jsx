import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { links } from '../data/profile';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-4"
    >
      <div className="z-10 container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <p className="text-primary animate-fade-in-delay-1 text-sm font-semibold tracking-widest uppercase opacity-0">
            Full-Stack Developer · AI Applications
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="animate-fade-in-delay-1 mr-2 opacity-0">
              Hi, I am
            </span>
            <span className="text-primary animate-fade-in-delay-2 opacity-0">
              Khai
            </span>
            <span className="text-gradient animate-fade-in-delay-3 ml-2 opacity-0">
              Lam
            </span>
          </h1>

          <p className="text-muted-foreground animate-fade-in-delay-4 mx-auto max-w-2xl text-lg opacity-0 md:text-xl">
            Computer Science student at the University of Washington Tacoma. I
            build full-stack web applications with React and Java Spring Boot,
            and add AI features where they make a product genuinely easier to
            use.
          </p>

          <div className="animate-fade-in-delay-5 flex flex-wrap items-center justify-center gap-4 pt-4 opacity-0">
            <a className="cosmic-button" href="#projects">
              View My Work
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="border-border hover:border-primary hover:text-primary rounded-full border p-2.5 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="border-border hover:border-primary hover:text-primary rounded-full border p-2.5 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center">
        <span className="text-muted-foreground mb-2 text-sm">Scroll</span>
        <ArrowDown className="text-primary h-5 w-5" />
      </div>
    </section>
  );
};
