import { useEffect, useState } from 'react';

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteor();

    const handleResize = () => {
      generateStars();
      generateMeteor();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.5 + 0.5; // Opacity between 0.5 and 1
      const animationDuration = Math.random() * 4 + 2; // Animation duration between 2s and 6s
      newStars.push({
        id: i,
        x,
        y,
        size,
        opacity,
        animationDuration,
      });
    }
    setStars(newStars);
  };

  const generateMeteor = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 20;
      const size = Math.random() * 2 + 1;
      const delay = Math.random() * 15;
      const animationDuration = Math.random() * 3 + 3;
      newMeteors.push({
        id: i,
        x,
        y,
        size,
        delay,
        animationDuration,
      });
    }
    setMeteors(newMeteors);
  };
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            width: `${meteor.size * 10}px`,
            height: `${meteor.size * 3}px`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
