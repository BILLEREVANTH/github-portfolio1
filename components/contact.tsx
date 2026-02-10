import { SectionHeading } from "@/components/section-heading";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <SectionHeading number="04" title="Get In Touch" centered />

        <p className="mb-8 leading-relaxed text-muted-foreground">
          If you would like to discuss a project or just say hi, I am always
          open to a conversation. Whether you have a question or just want to
          connect, my inbox is always open.
        </p>

        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 rounded-lg border border-primary bg-transparent px-8 py-3 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
        >
          <Mail className="h-4 w-4" />
          Say Hello
        </a>

        <div className="mt-16 flex items-center justify-center gap-6">
          <a
            href="https://github.com/BILLEREVANTH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
