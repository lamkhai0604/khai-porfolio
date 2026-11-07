import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { links, projects } from '../data/profile';

const IconLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="text-foreground/80 hover:text-primary flex items-center gap-1.5 text-sm transition-colors duration-300"
  >
    {children}
  </a>
);

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 mb-12 max-w-2xl text-center">
          Full-stack applications built end to end, from requirements and
          design to tests and deployment.
        </p>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card card-hover flex flex-col overflow-hidden rounded-lg text-left shadow-xs"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1 text-sm">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-secondary-foreground rounded-full border px-2 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5">
                  {project.demoUrl && (
                    <IconLink href={project.demoUrl} label={`${project.title} live demo`}>
                      <ExternalLink size={18} /> Live demo
                    </IconLink>
                  )}
                  {project.githubUrl && (
                    <IconLink href={project.githubUrl} label={`${project.title} source code`}>
                      <Github size={18} /> Code
                    </IconLink>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`${links.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="cosmic-button mx-auto flex w-fit items-center gap-2"
          >
            More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
