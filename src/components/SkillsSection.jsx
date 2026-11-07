import { skillGroups } from '../data/profile';

export const SkillsSection = () => {
  return (
    <section id="skills" className="bg-secondary/30 relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className="bg-card card-hover rounded-lg p-6 text-left shadow-xs"
            >
              <h3 className="text-primary mb-4 text-lg font-semibold">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground rounded-full border px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
