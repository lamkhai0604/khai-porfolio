import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relavtive from-background to-background/90 flex min-h-screen flex-col items-center justify-center px-4"
    >
      <div className="z-10 container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
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

          <p className="tex text-muted-foreground animate-fade-in-delay-4 max-2-2xl mx-auto text-lg opacity-0 md:text-xl">
            I’m a Computer Science student at the University of Washington
            Tacoma with hands-on experience in frontend web development. I’m
            always excited to learn, improve, and get inspired by the amazing
            developers around me.
          </p>

          <div className="animate-fade-in-delay-5 pt-4 opacity-0">
            <a className="cosmic-button" href="#projects">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="trasform absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center">
        <span className="text-muted-foreground mb-2 text-sm">Scroll</span>
        <ArrowDown className="text-primary h-5 w-5" />
      </div>
    </section>
  );
};
