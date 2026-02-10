# Biller Evanth - Developer Portfolio

A clean, responsive personal portfolio website built with **Next.js** and **Tailwind CSS**, ready for deployment on **Vercel**.

## Sections

- **Home** - Name, role, and short introduction with call-to-action buttons
- **About Me** - Personal description, interests, and background
- **Projects** - Sample projects with descriptions, tech tags, and GitHub/demo links
- **Skills** - Technical skills organized by category (Languages, Frameworks, Tools, Databases)
- **Contact** - Email and social media links (GitHub, LinkedIn)

## Tech Stack

- [Next.js](https://nextjs.org) - React framework with App Router
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://typescriptlang.org) - Type-safe JavaScript
- [Lucide React](https://lucide.dev) - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/BILLEREVANTH/github-portfolio1.git
   cd github-portfolio1
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Deployment on Vercel

### Option 1: Deploy from v0

Click the **Publish** button in the top right of the v0 interface to deploy directly.

### Option 2: Deploy from GitHub

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and configure the build settings
5. Click **Deploy**

### Option 3: Deploy with Vercel CLI

1. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Run the deploy command from the project root:

   ```bash
   vercel
   ```

3. Follow the prompts to link your project and deploy

## Folder Structure

```
├── app/
│   ├── globals.css       # Global styles and design tokens
│   ├── layout.tsx        # Root layout with fonts and metadata
│   └── page.tsx          # Main page composing all sections
├── components/
│   ├── about.tsx         # About Me section
│   ├── contact.tsx       # Contact section
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero / Home section
│   ├── projects.tsx      # Projects section
│   └── skills.tsx        # Skills section
├── lib/
│   └── utils.ts          # Utility functions
├── tailwind.config.ts    # Tailwind configuration
├── next.config.mjs       # Next.js configuration
└── package.json
```

## Customization

- Edit the content in each component file under `components/` to personalize with your own information
- Update colors by modifying the CSS custom properties in `app/globals.css`
- Adjust fonts in `app/layout.tsx` and `tailwind.config.ts`

## License

This project is open source and available under the [MIT License](LICENSE).
