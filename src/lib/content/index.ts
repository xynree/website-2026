import type { Project, SocialLink } from '$lib/types';

export const bio = {
	name: 'Xinrui Chen',
	bio: 'I make software, interactive visualizations & websites as well as drawings,paintings, and autobio comics. Spending my time hunting down new hobbies. Ask me about making jewelry, doing tattoos, and collecting rocks.',
	socialLinks: [
		{ name: 'Email', url: 'mailto:xynree@gmail.com' },
		{ name: 'GitHub', url: 'https://github.com/xynree' },
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/xinruichen7' },
		{ name: 'Instagram', url: 'https://instagram.com/xynree' }
	]
};

export const headerLinks = [
	{ name: 'Work', url: '/' },
	{ name: 'About', url: '/about' },
	{ name: 'Contact', url: '/contact' }
] as SocialLink[];

export const projectCategories = ['Software', 'UI/UX', 'Art/Design', 'Data Visualization'] as const;

/**
 * Sample project data
 * Replace with your actual projects
 */
export const projects: Project[] = [
	{
		id: 'seattle-tree-spy',
		title: 'Seattle Tree Spy',
		categories: ['Software', 'Data Visualization', 'UI/UX'],
		shortDescription:
			'Interactive map interface for exploring neighborhood trees from local SDOT Tree dataset',
		fullDescription: '',
		year: 2025,
		technologies: ['React.JS', 'Deck.GL'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Data+Viz+1', caption: 'Main view' },
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Data+Viz+2', caption: 'Details' }
		],
		links: [
			{ title: 'View on Web', url: 'https://www.xynree.github.io/seattle-tree-spy' },
			{ title: 'Source', url: 'https://github.com/xynree/seattle-tree-spy' }
		]
	},
	{
		id: 'diary-comics',
		title: 'Diary Comics',
		categories: ['Software', 'Art/Design'],
		shortDescription: 'Ongoing autobiographical comics practice and website',
		fullDescription: '',
		technologies: ['Next.JS', 'TailwindCSS', 'Procreate'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Gen+Art+1', caption: 'Composition' },
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Gen+Art+2', caption: 'Interface' }
		],
		links: [
			{ title: 'View on Web', url: 'https://comics.xinrui.work' },
			{ title: 'Source', url: 'https://github.com/xynree/diary-comics' }
		]
	},
	{
		id: 'john-honda-website',
		title: 'John Honda Website & Branding',
		year: 2025,
		categories: ['Software', 'UI/UX', 'Art/Design'],
		shortDescription:
			'Website, merchandise, promotional art materials & branding for the band John Honda',
		fullDescription: '',
		technologies: ['Astro', 'Procreate'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Design+System+1', caption: 'Palette' },
			{
				url: 'https://placehold.co/1600x1000/EEE/31343C?text=Design+System+2',
				caption: 'Components'
			}
		],
		links: [{ title: 'View on Web', url: 'https://www.johnhonda.com' }]
	},
	{
		id: 'thread-association-flow',
		title: 'Utility Asset Association Flow',
		year: 2024,
		categories: ['UI/UX', 'Software'],
		shortDescription:
			'Design and implementation for software to associate drone photography to utility assets in the field',
		fullDescription: '',
		technologies: ['Figma', 'Angular', 'Storybook'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+1', caption: 'Checkout' },
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+2', caption: 'Mobile' }
		]
	},
	{
		id: 'thread-design-system',
		title: 'Design System and Implementation',
		year: 2023,
		categories: ['UI/UX', 'Software'],
		shortDescription:
			'Custom Design System implemented for utility inspection interface. Implemented in Svelte',
		fullDescription: '',
		technologies: ['Figma', 'Svelte', 'Storybook'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+1', caption: 'Checkout' },
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+2', caption: 'Mobile' }
		]
	},
	{
		id: 'rating-room',
		title: 'Rating Room',
		year: 2023,
		categories: ['Software', 'UI/UX'],
		shortDescription: 'Desktop app for keeping a personal database of ratings',
		fullDescription: '',
		technologies: ['Rust', 'Tauri', 'Svelte', 'Figma'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+1', caption: 'Checkout' },
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+2', caption: 'Mobile' }
		]
	},
	{
		id: 'debris-series',
		title: 'Painting Series - Debris',
		year: 2019,
		categories: ['Art/Design'],
		shortDescription: 'Painting Series',
		fullDescription: '',
		technologies: ['Procreate'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+1', caption: 'Checkout' },
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+2', caption: 'Mobile' }
		]
	},
	{
		id: 'tattoo-series',
		title: 'Tattoo Practice',
		year: 2019,
		categories: ['Art/Design'],
		shortDescription: 'Log of tattoos done for friends, family and clients',
		fullDescription: '',
		technologies: [],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+1', caption: 'Checkout' },
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+2', caption: 'Mobile' }
		]
	}
];
