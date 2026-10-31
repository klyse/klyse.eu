# klyse.eu

Personal site of Klaus Prünster. Built with [Astro](https://astro.build), static output, no client framework.

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # static site in dist/
```

## Structure

- `src/styles/tokens.css`: design tokens (colours per theme, type, spacing, radii, the slab shadows) from the **klaus.** design system.
- `src/styles/global.css`: base styles and the component classes.
- `src/components/`: Nav, Mark (the inline k. mark with its hover lift), ThemeToggle (Night/Day switch, remembered), Logo (night/day wordmark and lockup files), Hero, Button, SectionMarker, Stats, Tabs, ProjectCard, ProjectArt (per-project drawings from the UI shapes), Portrait, Footer.
- `vercel.json`: pins the Vercel build to Astro + bun, output in `dist/`.
- `src/data/site.ts`: copy, projects, skills and stats in one place.
- `public/brand/`, `public/images/`: logo files and photos.

## License

Code: MIT. Photos and logo: all rights reserved. See [LICENSE](LICENSE).
