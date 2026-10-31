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
- `src/components/`: Nav, Hero, Button, SectionMarker, Stats, Tabs, ProjectCard, Portrait, Footer.
- `src/data/site.ts`: copy, projects, skills and stats in one place.
- `public/brand/`, `public/images/`: logo files and photos.

## License

Code: MIT. Photos and logo: all rights reserved. See [LICENSE](LICENSE).
