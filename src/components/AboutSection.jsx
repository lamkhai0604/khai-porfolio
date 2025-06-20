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
              With over 5 years of experience in web development, I specialize
              in creating dynamic and responsive websites. My expertise lies in
              JavaScript frameworks like React and Vue, as well as backend
              technologies such as Node.js and Express.
            </p>
            <p className="text-muted-foreground">
              I am a passionate developer with a love for creating beautiful and
              functional web applications. My journey in tech has been driven by
              a desire to learn and innovate.
            </p>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#contact"
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
                    Building responsive and interactive web applications.
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
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and interactive web applications.
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
