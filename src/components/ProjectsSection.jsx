import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description for project one.',
    img: '/projects/project1.png',
    tags: ['React', 'JavaScript', 'CSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description for project two.',
    img: '/projects/project2.png',
    tags: ['React', 'JavaScript', 'CSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description for project three.',
    img: '/projects/project3.png',
    tags: ['React', 'JavaScript', 'CSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 mb-12 max-w-2xl text-center">
          Here are some of the projects I've worked on. Each project showcases
          my skills and creativity in web development. Feel free to explore
          them!
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card card-hover overflow-hidden rounded-lg p-6 shadow-xs"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-secondary-foreground hover:bg-secondary rounded-full border px-2 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-1 text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/lamkhai0604?tab=repositories"
            target="_blank"
            className="cosmic-button mx-auto flex w-fit items-center gap-2"
          >
            View All Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
