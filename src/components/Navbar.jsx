import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={cn(
        'fixed z-40 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 py-3 shadow-xs backdrop-blur-md' : 'py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-primary flex items-center text-xl font-bold"
          href="#home"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground mr-1">Khai</span>
            Porfolio
          </span>
        </a>

        {/* DESKTOP */}
        <div className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-foreground z-50 p-2 md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MOBILE */}
        <div
          className={cn(
            'bg-background/95 fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-md transition-all duration-300 md:hidden',
            isMenuOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
