import type { ArtProject, SocialLink, WebProject as WebProject } from '$lib/types';

export const bio = {
	name: 'Xinrui Chen',
	bio: "I'm an engineer & visual artist who does a little bit of everything. Making software, interactive visualizations & websites as well as drawings, paintings, and autobio comics. Spending my time hunting down new hobbies!",
	socialLinks: [
		{ name: 'Email', url: 'mailto:xynree@gmail.com' },
		{ name: 'GitHub', url: 'https://github.com/xynree' },
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/xinruichen7' },
		{ name: 'Instagram', url: 'https://instagram.com/xynree' },
		{ name: 'Diary', url: 'https://comics.xinrui.work' }
	]
};

export const headerLinks = [
	{ name: 'Art', url: '/art' },
	{ name: 'Web', url: '/' },
	{ name: 'Links', url: '/contact' }
] as SocialLink[];

export const CLOUDINARY_URL = 'https://res.cloudinary.com/xynree/image/upload/website';
export const CLOUDINARY_SOFTWARE = `${CLOUDINARY_URL}/software`;
export const CLOUDINARY_ART = `${CLOUDINARY_URL}/art`;

export const webProjects: WebProject[] = [
	{
		id: 'seattle-tree-spy',
		title: 'Seattle Tree Spy',
		categories: ['Software', 'UI/UX'],
		shortDescription:
			'Interactive map interface for exploring neighborhood trees from local SDOT Tree dataset',
		fullDescription: '',
		year: 2026,
		technologies: ['React.JS', 'Deck.GL', 'TailwindCSS'],
		images: [
			{
				url: 'https://raw.githubusercontent.com/xynree/seattle-tree-spy/main/public/screenshot.gif',
				caption: 'View and interact with surrounding SDOT Tree data'
			},
			{
				url: `${CLOUDINARY_SOFTWARE}/seattle-tree-spy/ss2.jpg`,
				caption: ''
			},
			{
				url: `${CLOUDINARY_SOFTWARE}/seattle-tree-spy/ss3.jpg`,
				caption: ''
			},
			{
				url: `${CLOUDINARY_SOFTWARE}/seattle-tree-spy/ss4.jpg`,
				caption: ''
			}
		],
		links: [
			{ title: 'View on Web', url: 'https://xynree.github.io/seattle-tree-spy/' },
			{ title: 'Source', url: 'https://github.com/xynree/seattle-tree-spy' }
		]
	},
	{
		id: 'diary-comics',
		title: 'Diary Comics',
		year: 2025,
		categories: ['Software'],
		shortDescription: 'Autobiographical comics website',
		fullDescription: '',
		technologies: ['Next.JS', 'TailwindCSS', 'Python'],
		images: [
			{
				url: `${CLOUDINARY_SOFTWARE}/diary-comics/recording.gif`,
				caption: ''
			},
			{
				url: `${CLOUDINARY_SOFTWARE}/diary-comics/ss1.jpg`,
				caption: ''
			},
			{
				url: `${CLOUDINARY_SOFTWARE}/diary-comics/recording-2.gif`,
				caption: ''
			}
		],
		links: [
			{ title: 'View on Web', url: 'https://comics.xinrui.work' },
			{ title: 'Source', url: 'https://github.com/xynree/diary-comics' }
		]
	},
	{
		id: 'thread-association-flow',
		title: 'Asset Utility Association Flow',
		year: 2025,
		categories: ['UI/UX', 'Software'],
		shortDescription:
			'Design and implementation for software to associate drone photography to utility assets in the field',
		fullDescription: '',
		technologies: ['Figma', 'Angular', 'Storybook'],
		images: [
			{ url: `${CLOUDINARY_SOFTWARE}/thread-association-flow/association-flow_1.jpg` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-association-flow/association-flow_2.jpg` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-association-flow/association-flow_3.jpg` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-association-flow/association-flow_4.jpg` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-association-flow/association-flow_5.jpg` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-association-flow/association-flow_6.jpg` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-association-flow/association-flow_7.jpg` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-association-flow/association-flow_8.jpg` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-association-flow/association-flow_9.jpg` }
		]
	},
	{
		id: 'john-honda-website',
		title: 'John Honda',
		year: 2025,
		categories: ['Software', 'UI/UX'],
		shortDescription: 'Website & branding for the band John Honda',
		fullDescription: '',
		technologies: ['Astro', 'Python'],
		images: [
			{ url: `${CLOUDINARY_SOFTWARE}/john-honda-website/screencap.gif`, caption: '' },
			{ url: `${CLOUDINARY_SOFTWARE}/john-honda-website/ss-1.jpg`, caption: '' }
		],
		links: [{ title: 'View on Web', url: 'https://www.johnhonda.com' }]
	},

	{
		id: 'thread-design-system',
		title: 'Design System',
		year: 2023,
		categories: ['UI/UX', 'Software'],
		shortDescription: 'Custom Design System for utility inspection interface',
		fullDescription: '',
		technologies: ['Figma', 'Svelte', 'Storybook'],
		images: [
			{ url: `${CLOUDINARY_SOFTWARE}/thread-design-system/design-system_1.png` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-design-system/design-system_2.png` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-design-system/design-system_3.png` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-design-system/design-system_4.png` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-design-system/design-system_5.png` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-design-system/design-system_6.png` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-design-system/design-system_7.png` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-design-system/design-system_8.png` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-design-system/design-system_9.png` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-design-system/design-system_10.png` },
			{ url: `${CLOUDINARY_SOFTWARE}/thread-design-system/design-system_11.jpg` }
		]
	}
];

export const artProjects: ArtProject[] = [
	{
		id: 'john-honda-branding',
		title: 'John Honda: Design & Branding',
		categories: ['Illustration', 'Design'],
		shortDescription: 'Branding and design work for the band John Honda',
		fullDescription: '',
		technologies: ['Procreate', 'Figma'],
		images: [
			{
				url: `${CLOUDINARY_ART}/john-honda-art/1.7.26_central-saloon-poster-small.jpg`,
				caption: ''
			},
			{
				url: `${CLOUDINARY_ART}/john-honda-art/3.8.26_chacha-lounge-poster-small.jpg`,
				caption: ''
			},
			{
				url: `${CLOUDINARY_ART}/john-honda-art/12.18.25_mountain-room-poster-small.jpg`,
				caption: ''
			},
			{
				url: `${CLOUDINARY_ART}/john-honda-art/nose-cars.gif`,
				caption: ''
			}
		],
		links: []
	},
	{
		id: 'diary-comics-art',
		title: 'Diary Comics',
		categories: ['Comics'],
		shortDescription: 'Ongoing autobiographical comics practice',
		fullDescription: '',
		images: [
			{
				url: 'https://res.cloudinary.com/xynree/image/upload/diary/2026/2.18.26_1',
				caption: '2/18/26 - 1'
			},
			{
				url: 'https://res.cloudinary.com/xynree/image/upload/diary/2026/2.18.26_2',
				caption: '2/18/26 - 2'
			},
			{
				url: 'https://res.cloudinary.com/xynree/image/upload/diary/2026/2.18.26_3',
				caption: '2/18/26 - 3'
			}
		],
		links: [{ title: 'View on Web', url: 'https://comics.xinrui.work' }]
	},
	{
		id: 'debris-series',
		title: 'Painting Series - Debris',
		year: 2019,
		categories: ['Illustration'],
		shortDescription: 'Painting Series',
		fullDescription: '',
		technologies: ['Procreate'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+1', caption: 'Checkout' },
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+2', caption: 'Mobile' }
		]
	},
	{
		id: 'tattoos',
		title: 'Tattoos',
		year: 2019,
		categories: ['Other'],
		shortDescription: 'Various tattoos done for friends, family and clients',
		fullDescription: '',
		technologies: [],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+1', caption: 'Checkout' },
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+2', caption: 'Mobile' }
		]
	}
];
