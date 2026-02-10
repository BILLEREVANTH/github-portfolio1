import { SectionHeading } from "@/components/section-heading";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Cloud Dashboard",
    description:
      "A real-time cloud infrastructure monitoring dashboard built with Next.js and WebSockets. Features live metrics, alerting, and team collaboration tools.",
    technologies: ["Next.js", "TypeScript", "WebSocket", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "DevConnect",
    description:
      "A developer networking platform that matches engineers based on skills, interests, and availability. Includes real-time chat and project collaboration features.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "TaskFlow",
    description:
      "A minimal, keyboard-first project management tool designed for individual developers. Supports Markdown, custom workflows, and GitHub integration.",
    technologies: ["TypeScript", "React", "Prisma", "tRPC"],
    github: "https://github.com",
    live: null,
  },
  {
    title: "PixelGen",
    description:
      "An AI-powered image generation tool that creates unique artwork from text prompts. Features a gallery, community voting, and remix capabilities.",
    technologies: ["Next.js", "Python", "FastAPI", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="03" title="Projects" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-6 flex items-center justify-between">
                <Folder className="h-10 w-10 text-primary" />
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`${project.title} live site`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
