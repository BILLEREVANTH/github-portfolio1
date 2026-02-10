import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="01" title="About Me" />

        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              I am a developer passionate about building accessible, polished
              user interfaces that combine thoughtful design with robust
              engineering. I enjoy working at the intersection of design and
              development, creating experiences that are both visually compelling
              and meticulously built for performance.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              In the past, I have had the opportunity to develop software across
              a variety of settings -- from startups to large-scale
              applications. I love tackling complex problems and turning them
              into simple, elegant solutions.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Here are a few technologies I have been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-sm">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Tailwind CSS",
                "PostgreSQL",
              ].map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="text-primary">{">"}</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
