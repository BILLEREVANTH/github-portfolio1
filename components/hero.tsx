import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm text-primary">
          {"Hello, I'm"}
        </p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Biller Evanth
        </h1>
        <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
          Student / Developer
        </p>
        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          I build accessible, pixel-perfect digital experiences for the web.
          Passionate about crafting clean interfaces and writing elegant code
          that makes a difference.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
          <a
            href="https://github.com/BILLEREVANTH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-5">
          <a
            href="https://github.com/BILLEREVANTH"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:billerevanth@example.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
