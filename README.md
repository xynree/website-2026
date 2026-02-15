# Personal Portfolio

A clean, minimal portfolio website built with SvelteKit, featuring project showcases with filtering and detail pages.

## Features

- 🎨 **Clean Design**: Minimal, typography-focused design inspired by modern portfolio aesthetics
- 🏷️ **Category Filtering**: Filter projects by category (Software Engineering, UI/UX Design, etc.)
- 📱 **Responsive**: Mobile-first design that works on all screen sizes
- 🚀 **Fast**: Built with SvelteKit for optimal performance
- ♿ **Accessible**: Semantic HTML and ARIA labels for screen readers
- 📝 **Type-Safe**: Full TypeScript support

## Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable UI components
│   │   ├── Header.svelte    # Site header with name, bio, and social links
│   │   ├── TagFilter.svelte # Category filter buttons
│   │   ├── ProjectCard.svelte # Project summary card
│   │   └── ImageGallery.svelte # Image gallery for project details
│   ├── data/
│   │   └── projects.ts      # Project data and utility functions
│   ├── styles/
│   │   └── global.css       # Global styles and CSS variables
│   └── types.ts             # TypeScript type definitions
└── routes/
    ├── +layout.svelte       # Root layout with global styles
    ├── +page.svelte         # Home page with project list
    └── projects/[id]/       # Dynamic project detail pages
        ├── +page.ts         # Data loading
        └── +page.svelte     # Project detail view
```

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm (or npm/yarn)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Customization

### 1. Update Personal Information

Edit `src/routes/+page.svelte` to update your name, bio, and social links:

```typescript
const personalInfo = {
	name: 'Your Name',
	bio: 'Your bio here...',
	socialLinks: [
		{ name: 'Email', url: 'mailto:your.email@example.com' },
		{ name: 'GitHub', url: 'https://github.com/yourusername' }
		// Add more links...
	]
};
```

### 2. Add Your Projects

Edit `src/lib/data/projects.ts` to add your projects:

```typescript
export const projects: Project[] = [
	{
		id: 'unique-project-id',
		title: 'Project Title',
		year: 2025,
		category: 'Software Engineering', // or 'UI/UX Design', 'Interactive Visual Applications', etc.
		shortDescription: 'Brief description for the main page',
		fullDescription: 'Detailed description for the project detail page',
		technologies: ['React', 'TypeScript', 'etc.'],
		images: ['/projects/project-id/image1.jpg', '/projects/project-id/image2.jpg'],
		featured: true // Show on main page
	}
	// Add more projects...
];
```

### 3. Add Project Images

Place your project images in the `static/projects/` directory:

```
static/
└── projects/
    ├── project-1/
    │   ├── hero.jpg
    │   ├── detail-1.jpg
    │   └── detail-2.jpg
    └── project-2/
        └── ...
```

### 4. Customize Styles

Edit `src/lib/styles/global.css` to customize colors, spacing, and typography:

```css
:root {
	/* Update these CSS variables */
	--color-text-primary: #1a1a1a;
	--color-background: #fafafa;
	--spacing-xl: 3rem;
	/* etc. */
}
```

## Component Architecture

### Reusable Components

All components are designed to be simple, focused, and reusable:

- **Header**: Displays site header with personal info
- **TagFilter**: Category filtering with accessible button states
- **ProjectCard**: Project summary with link to detail page
- **ImageGallery**: Responsive image grid for project galleries

### State Management

Uses Svelte 5's runes (`$state`, `$derived`) for reactive state management:

- `selectedCategory`: Tracks the active filter
- `filteredProjects`: Derived from selected category

## Building for Production

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Deployment

This SvelteKit app can be deployed to:

- **Vercel**: Zero-config deployment
- **Netlify**: Automatic builds from Git
- **Cloudflare Pages**: Fast edge deployment
- **Any Node.js host**: Using the Node adapter

See [SvelteKit deployment docs](https://kit.svelte.dev/docs/adapters) for more options.

## Technologies

- [SvelteKit](https://kit.svelte.dev/) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [GSAP](https://greensock.com/gsap/) - Animation library (optional)

## License

MIT
