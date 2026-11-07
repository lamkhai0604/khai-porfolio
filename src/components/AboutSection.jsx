import { Code, Server, Sparkles } from 'lucide-react';

const focusAreas = [
  {
    icon: Code,
    title: 'Frontend',
    text: 'Responsive, accessible interfaces in React and TypeScript, built from reusable components.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    text: 'REST APIs in Java Spring Boot with PostgreSQL, authentication and automated tests.',
  },
  {
    icon: Sparkles,
    title: 'AI Features',
    text: 'Connecting language models to real products, such as turning a plain-English search into structured filters.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Building toward full-stack AI engineering
            </h3>
            <p className="text-muted-foreground">
              I’m a Computer Science student at the University of Washington
              Tacoma (expected graduation 2028), based in Seattle. I started as
              a frontend developer, building React interfaces for booking and
              communication products, and have since moved into the backend
              with Java and Spring Boot.
            </p>
            <p className="text-muted-foreground">
              My projects are built the way production software is: planned in
              sprints, with documented decisions, continuous integration and
              tests at every layer, then deployed so anyone can try them.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {focusAreas.map(({ icon: Icon, title, text }) => (
              <div key={title} className="gradient-border card-hover p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 shrink-0 rounded-full p-3">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">{title}</h4>
                    <p className="text-muted-foreground">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
