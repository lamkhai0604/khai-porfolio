import { StarBackground } from '../components/StarBackground';
import { ThemeToggle } from '../components/ThemeToggle';

export const Home = () => {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}

      {/* Main Content */}

      {/* Footer */}
    </div>
  );
};
