import { SectionHeading } from "@/components/section-heading";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Acme Corp",
    url: "#",
    period: "2024 -- Present",
    description:
      "Build and maintain critical components used to construct the company's frontend, across the whole product. Work closely with cross-functional teams to implement best practices in accessibility and performance.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    role: "Full Stack Developer",
    company: "TechStart",
    url: "#",
    period: "2022 -- 2024",
    description:
      "Developed and shipped highly interactive web applications for diverse clients. Engineered micro-frontends and contributed to a shared component library used across multiple teams.",
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL"],
  },
  {
    role: "Frontend Developer",
    company: "WebCraft Studio",
    url: "#",
    period: "2020 -- 2022",
    description:
      "Built responsive, accessible web interfaces for e-commerce and SaaS platforms. Collaborated with designers to translate Figma mockups into pixel-perfect, animated user interfaces.",
    technologies: ["React", "CSS", "REST APIs", "Figma"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="02" title="Experience" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group relative flex flex-col gap-4 rounded-lg border border-transparent p-6 transition-colors hover:border-border hover:bg-card sm:flex-row"
            >
              <div className="shrink-0 pt-1">
                <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {exp.period}
                </p>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 flex items-center gap-2 font-medium text-foreground">
                  {exp.role} &middot;{" "}
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary transition-colors hover:underline"
                  >
                    {exp.company}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
