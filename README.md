# Piyush More - Portfolio

A responsive portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It is statically exported and configured for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run lint
npm run build
```

The static site is generated in `out/`.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. Open the repository's **Settings > Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push to `main`, or manually run the **Deploy portfolio to GitHub Pages** workflow.

The configuration automatically detects whether the repository is a user site (`username.github.io`) or a project site (`username.github.io/repository`), and sets the Next.js base path accordingly.

## Replace content and assets

- Portfolio facts: `data/portfolio.ts`
- Main experience: `components/Portfolio.tsx`
- Color and layout system: `app/globals.css`
- Temporary resume: `resume_trial2.pdf`
- Replaceable SVG artwork: `public/placeholders/`
- Social preview: `public/og-image.svg`

The current portrait and resume are intentionally replaceable. Replace `resume_trial2.pdf` with the final resume using the same filename when it is ready.
