import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A clean, responsive personal portfolio built with Next.js and Tailwind CSS. Features smooth scroll navigation, dark theme, and optimized performance.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/BILLEREVANTH/github-portfolio1",
    demo: "#",
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack task management application with user authentication, real-time updates, and collaborative features for team productivity.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/BILLEREVANTH",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that fetches real-time data from external APIs, displaying forecasts, temperature trends, and location-based information.",
    tags: ["JavaScript", "REST API", "CSS"],
    github: "https://github.com/BILLEREVANTH",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
          Projects
        </h2>
        <h3 className="mt-2 text-balance text-2xl font-bold text-foreground sm:text-3xl">
          Things I have built
        </h3>

        <div className="mt-10 flex flex-col gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-card-foreground">
                    {project.title}
                  </h4>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:mt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
