# xinrui chen

Personal ASCII animation website, ported from web-26-1 into the existing SvelteKit project.
The existing adapter, package configuration, Git repository, and deployment setup are preserved.

Run `pnpm dev`, `pnpm check`, `pnpm lint`, or `pnpm build`.

Drawings live in `src/lib/art`. Morphing, jitter, and embedded text live in the neighboring
JavaScript modules. The page retains six morph frames, three jitter poses held three ticks
each, 80ms frame timing, and background symbols synchronized to the main drawings.
Reduced-motion preferences display a still frame.
