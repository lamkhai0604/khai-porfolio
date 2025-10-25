import { Briefcase, Code, User } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              I’m a Computer Science student at the University of Washington
              Tacoma with hands-on experience in building responsive and
              user-friendly web applications. My work focuses on creating clean,
              interactive UIs using frameworks like React, Angular, and Next.js
              — always aiming for wellness performance across devices.
            </p>
            <p className="text-muted-foreground">
              I’m passionate about coding and constantly learning from
              experienced developers to grow as a better engineer. My journey in
              tech is fueled by curiosity, teamwork, and a genuine love for
              solving problems through code.
            </p>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/public/Khai_Resume.pdf"
                download={true}
                className="border-primary text-primary hover:bg-primary/10 rounded-full border px-6 py-2 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border card-hover p-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Code className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and modern web applications with React,
                    Next.js, and TypeScript.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border card-hover p-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <User className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Crafting user-friendly interfaces and experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border card-hover p-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Briefcase className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Continuous Learning</h4>
                  <p className="text-muted-foreground">
                    Always exploring new technologies and improving my coding
                    skills through real-world projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
