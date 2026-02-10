export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {"© 2026 Biller Evanth. All rights reserved."}
        </p>
        <p className="text-sm text-muted-foreground">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-colors hover:underline"
          >
            Next.js
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-colors hover:underline"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  )
}
