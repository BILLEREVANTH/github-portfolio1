import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    label: "Email",
    href: "mailto:billerevanth@example.com",
    icon: Mail,
    display: "billerevanth@example.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/BILLEREVANTH",
    icon: Github,
    display: "github.com/BILLEREVANTH",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/",
    icon: Linkedin,
    display: "linkedin.com/in/billerevanth",
  },
]

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
          Contact
        </h2>
        <h3 className="mt-2 text-balance text-2xl font-bold text-foreground sm:text-3xl">
          Get in touch
        </h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {
            "If you'd like to discuss a project or just say hi, I'm always down to chat. Feel free to reach out through any of the channels below."
          }
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors group-hover:text-primary">
                <link.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">
                  {link.label}
                </p>
                <p className="text-sm text-muted-foreground">{link.display}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
