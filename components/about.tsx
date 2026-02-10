export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
          About
        </h2>
        <h3 className="mt-2 text-balance text-2xl font-bold text-foreground sm:text-3xl">
          A bit about me
        </h3>

        <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
          <p>
            {
              "I'm a passionate developer and student who loves building things for the web. My journey in software development started with curiosity about how websites work, and it has since evolved into a deep appreciation for clean code and thoughtful design."
            }
          </p>
          <p>
            {
              "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or learning about system design and cloud architecture. I believe in continuous learning and enjoy tackling complex problems with simple, elegant solutions."
            }
          </p>
          <p>
            My interests span across full-stack development, cloud computing,
            and developer tooling. I enjoy working with modern frameworks and
            staying up-to-date with the latest in the JavaScript ecosystem.
          </p>
        </div>
      </div>
    </section>
  )
}
