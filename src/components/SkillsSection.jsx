import { useState } from 'react';
import { cn } from '../lib/utils';

const skills = [
  { name: 'HTML/CSS', level: 80, category: 'frontend' },
  { name: 'JavaScript', level: 70, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'Typescript', level: 70, category: 'frontend' },
  { name: 'Tailwind CSS', level: 80, category: 'frontend' },

  // { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Java', level: 50, category: 'backend' },
  // { name: 'MySQL', level: 80, category: 'backend' },
  { name: 'Git', level: 60, category: 'tools' },
  // { name: 'Docker', level: 80, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' },
];

const categories = ['all', 'frontend', 'backend', 'tools'];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="bg-secondary/30 relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                'cursor-pointer rounded-full px-5 py-2 capitalize transition-colors duration-300',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-foreground hover:bg-secondary'
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card card-hover rounded-lg p-6 shadow-xs"
            >
              <div className="text-flex mb-4">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="bg-secondary/50 h-2 w-full overflow-hidden rounded-full">
                <div
                  className="bg-primary grow-animation h-2 origin-left rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="mt-1 text-right">
                <span className="text-muted-foreground text-sm">
                  {skill.level >= 90
                    ? 'Expert'
                    : skill.level >= 70 && skill.level < 90
                      ? 'Intermediate'
                      : 'Learning'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
