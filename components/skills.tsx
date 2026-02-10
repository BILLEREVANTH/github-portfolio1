const skillCategories = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Docker"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
          Skills
        </h2>
        <h3 className="mt-2 text-balance text-2xl font-bold text-foreground sm:text-3xl">
          Technologies I work with
        </h3>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                {group.category}
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
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
  )
}
