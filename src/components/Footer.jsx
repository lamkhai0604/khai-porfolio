import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-border relative mt-12 flex flex-wrap items-center justify-between border-t px-4 py-12 pt-8">
      <p className="text-smtext-muted-foreground">
        &copy; {new Date().getFullYear()} Khai Lam. All rights reserved.
      </p>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-primary/10 hover:bg-primary/20 text-primary cursor-pointer rounded-full p-2 transition-colors"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
};
