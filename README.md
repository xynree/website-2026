# Personal Website (2026)

A minimal, typography-focused portfolio website built with SvelteKit. It features a high-contrast tabular aesthetic with project filtering, infinite scrolling, and detailed project galleries.

## Technologies

- SvelteKit (Svelte 5)
- TypeScript
- GSAP (for animations)
- Vanilla CSS with CSS Variables

## Project Structure

- `src/lib/content/index.ts`: Central location for all site content including bio, social links, and project data.
- `src/lib/styles/global.css`: Global design system including color palettes, typography tokens, and layout variables.
- `src/lib/components/`: Reusable UI components (Header, ProjectCard, TagFilter, etc.).
- `src/routes/`: Page layouts and views.

## Editing Content

To update personal information, site links, or project data, modify the exports in `src/lib/content/index.ts`. Projects follow the `Project` type definition found in `src/lib/types.ts`.

## Styling

The site's visual identity is controlled via CSS variables in `src/lib/styles/global.css`. Key design tokens like `--mono-size` or `--color-border` can be adjusted there to update the look and feel globally.

## Development

```bash
pnpm install
pnpm dev
```
