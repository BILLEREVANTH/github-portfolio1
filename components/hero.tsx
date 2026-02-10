import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm text-primary">Hi, my name is</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          <span className="text-balance">Biller Evanth</span>
        </h1>
        <h2 className="mb-6 text-2xl font-semibold text-muted-foreground sm:text-4xl lg:text-5xl">
          <span className="text-balance">I build things for the web.</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground">
          A software developer focused on building accessible, performant, and
          beautiful web applications. Currently crafting digital experiences that
          blend design with engineering.
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/BILLEREVANTH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
