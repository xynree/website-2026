import type { Project } from '$lib/types';

export const bio = {
	name: 'Xinrui Chen',
	bio: 'I make software & interactive visualizations, websites, drawings & paintings, and autobio comics. Spending my time hunting down new hobbies. Ask me about making jewelry, doing tattoos, and collecting rocks.',
	socialLinks: [
		{ name: 'Email', url: 'mailto:your.email@example.com' },
		{ name: 'GitHub', url: 'https://github.com/xynree' },
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/xinruichen7' },
		{ name: 'Instagram', url: 'https://instagram.com/xynree' }
	]
};

export const projectCategories = [
	'Software',
	'UI/UX',
	'Art',
	'Design',
	'Misc',
	'Data Visualization'
] as const;

/**
 * Sample project data
 * Replace with your actual projects
 */
export const projects: Project[] = [
	{
		id: 'interactive-data-viz',
		title: 'Interactive Data Visualization Dashboard',
		categories: ['Software', 'Data Visualization'],
		shortDescription: 'A real-time analytics dashboard for tracking user engagement metrics.',
		fullDescription:
			'A comprehensive real-time analytics dashboard designed to track and visualize user engagement metrics across multiple platforms. Built with React and D3.js.',
		technologies: ['React', 'D3.js', 'TypeScript', 'WebSocket'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Data+Viz+1', caption: 'Main view' },
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Data+Viz+2', caption: 'Details' }
		]
	},
	{
		id: 'generative-art',
		title: 'Generative Art Playground',
		year: 2024,
		categories: ['Software', 'Art'],
		shortDescription: 'Web-based tool for creating algorithmic art using shader programming.',
		fullDescription:
			'An interactive web-based platform that democratizes generative art creation through shader programming. Built with WebGL and GLSL.',
		technologies: ['WebGL', 'GLSL', 'Canvas API'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Gen+Art+1', caption: 'Composition' },
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Gen+Art+2', caption: 'Interface' }
		]
	},
	{
		id: 'design-system',
		title: 'Design System for SaaS Platform',
		year: 2024,
		categories: ['UI/UX', 'Design'],
		shortDescription: 'Comprehensive design system including component library and documentation.',
		fullDescription:
			'A comprehensive design system created to unify the user experience across a large-scale SaaS platform.',
		technologies: ['Figma', 'React', 'Storybook'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Design+System+1', caption: 'Palette' },
			{
				url: 'https://placehold.co/1600x1000/EEE/31343C?text=Design+System+2',
				caption: 'Components'
			}
		]
	},
	{
		id: 'ecommerce-checkout',
		title: 'E-commerce Checkout Redesign',
		year: 2023,
		categories: ['UI/UX', 'Design'],
		shortDescription: 'Led user research and redesign of checkout flow for mid-sized retailer.',
		fullDescription:
			'A comprehensive redesign of the checkout experience for a mid-sized e-commerce retailer.',
		technologies: ['Figma', 'User Research', 'A/B Testing'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+1', caption: 'Checkout' },
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Ecommerce+2', caption: 'Mobile' }
		]
	},
	{
		id: 'mobile-banking-app',
		title: 'Mobile Banking Experience',
		year: 2023,
		categories: ['UI/UX', 'Design'],
		shortDescription: 'Modernizing personal finance management for the digital age.',
		fullDescription:
			'A complete overhaul of the mobile banking experience focused on accessibility and intuitive financial tracking.',
		technologies: ['Swift', 'Framer', 'Figma'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Banking+App', caption: 'Transactions' }
		]
	},
	{
		id: 'ar-wayfinding',
		title: 'AR Wayfinding in Campus',
		year: 2024,
		categories: ['Software', 'Design'],
		shortDescription: 'Augmented reality navigation system for university students.',
		fullDescription:
			'An experimental AR application designed to help new students navigate complex university campuses.',
		technologies: ['Unity', 'ARKit', 'C#'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=AR+Wayfinding', caption: 'AR Overlay' }
		]
	},
	{
		id: 'abstract-watercolor-series',
		title: 'Abstract Watercolor Explorations',
		year: 2022,
		categories: ['Art'],
		shortDescription: 'A series of paintings exploring the fluidity of watercolor.',
		fullDescription:
			'This series investigates the intersection of control and chaos through traditional watercolor techniques.',
		technologies: ['Watercolor', 'Paper'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Watercolor+Art', caption: 'Flow' }
		]
	},
	{
		id: 'smart-city-dashboard',
		title: 'Smart City Data Portal',
		year: 2024,
		categories: ['Data Visualization', 'Software'],
		shortDescription: 'Visualizing urban metrics for city planners and citizens.',
		fullDescription:
			'A public-facing dashboard showing real-time urban data from traffic to air quality sensors.',
		technologies: ['Vue.js', 'Mapbox', 'Node.js'],
		images: [
			{
				url: 'https://placehold.co/1600x1000/EEE/31343C?text=City+Dashboard',
				caption: 'Urban View'
			}
		]
	},
	{
		id: 'typographic-poster-set',
		title: 'Typographic Poetry Posters',
		year: 2023,
		categories: ['Design', 'Art'],
		shortDescription: 'Experimental typography interpreting classic poetry.',
		fullDescription:
			'A collection of posters where letterforms become the primary expressive element for literature.',
		technologies: ['Adobe Illustrator', 'Screen Printing'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Typography+Design', caption: 'Poster' }
		]
	},
	{
		id: 'community-herb-garden-app',
		title: 'Herb Garden Community App',
		year: 2024,
		categories: ['Software', 'Misc'],
		shortDescription: 'Connecting urban gardeners to share tips and harvests.',
		fullDescription:
			'A local social network designed specifically for community garden members to coordinate care.',
		technologies: ['React Native', 'Firebase'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Garden+App', caption: 'Community' }
		]
	},
	{
		id: 'isometric-illustration-world',
		title: 'Isometric Micro-worlds',
		year: 2023,
		categories: ['Art', 'Design'],
		shortDescription: 'Digital illustrations of miniature imaginary landscapes.',
		fullDescription:
			'A series of detailed isometric illustrations depicting small, self-contained fantasy ecosystems.',
		technologies: ['Procreate', 'Adobe Photoshop'],
		images: [
			{
				url: 'https://placehold.co/1600x1000/EEE/31343C?text=Isometric+Art',
				caption: 'Micro-world'
			}
		]
	},
	{
		id: 'iot-smart-home-interface',
		title: 'Unified Smart Home Control',
		year: 2024,
		categories: ['UI/UX', 'Software'],
		shortDescription: 'A streamlined interface for complex home automation systems.',
		fullDescription:
			'Simplifying the interaction with dozens of nested IoT devices into a single, cohesive experience.',
		technologies: ['Figma', 'React', 'Home Assistant'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Smart+Home+UI', caption: 'Dashboard' }
		]
	},
	{
		id: 'jewelry-experiment-series',
		title: '3D Printed Jewelry Experiments',
		year: 2022,
		categories: ['Misc', 'Art'],
		shortDescription: 'Exploring generative forms through wearable objects.',
		fullDescription:
			'Using computational design to create jewelry that would be impossible to cast using traditional methods.',
		technologies: ['Rhino', 'Grasshopper', '3D Printing'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Jewelry+Design', caption: 'Wearable' }
		]
	},
	{
		id: 'weather-data-sculpture',
		title: 'Weather Data Sculpture',
		year: 2023,
		categories: ['Data Visualization', 'Art'],
		shortDescription: 'Physical manifestation of wind patterns over one year.',
		fullDescription:
			'A 3D-sculpted piece where the topology is directly driven by local wind velocity data.',
		technologies: ['Processing', 'CNC Milling'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Data+Sculpture', caption: 'Topology' }
		]
	},
	{
		id: 'recipe-manager-minimal',
		title: 'Minimalist Recipe Manager',
		year: 2024,
		categories: ['Software', 'Design'],
		shortDescription: 'A distraction-free way to store and view cooking instructions.',
		fullDescription: 'Focusing on legibility and ease of use in a messy kitchen environment.',
		technologies: ['Svelte', 'IndexedDB'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Recipe+App', caption: 'Clean UI' }
		]
	},
	{
		id: 'autobio-comic-collection',
		title: 'Autobio Comics: Year One',
		year: 2023,
		categories: ['Art', 'Misc'],
		shortDescription: 'A collection of short comics about everyday life.',
		fullDescription:
			'A personal project documenting small moments and awkward conversations through hand-drawn panels.',
		technologies: ['Ink', 'Paper', 'Digitization'],
		images: [{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Comic+Art', caption: 'Panel' }]
	},
	{
		id: 'portfolio-v1-redesign',
		title: 'Legacy Portfolio Redesign',
		year: 2021,
		categories: ['Software', 'Design'],
		shortDescription: 'A look back at my first ever portfolio site development.',
		fullDescription:
			'Retrospective on the technical and design choices made during my early career development.',
		technologies: ['HTML', 'CSS', 'Vanilla JS'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Legacy+Site', caption: 'V1 Work' }
		]
	},
	{
		id: 'music-visualizer-vr',
		title: 'Immersive Music Visualizer VR',
		year: 2024,
		categories: ['Software', 'Art'],
		shortDescription: 'Walking through soundscapes in virtual reality.',
		fullDescription:
			'An interactive VR experience where the environment pulses and shifts in sync with live audio input.',
		technologies: ['Unity', 'Oculus SDK', 'Web Audio API'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=VR+Visualizer', caption: 'Immersive' }
		]
	},
	{
		id: 'urban-botany-study',
		title: 'Urban Botany: A Photo Study',
		year: 2023,
		categories: ['Misc', 'Art'],
		shortDescription: 'Cataloging plants found in city sidewalk cracks.',
		fullDescription:
			'A photographic series documenting the resilience of nature in the concrete jungle of New York City.',
		technologies: ['Photography', 'Lightroom'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=Botany+Study', caption: 'Resilience' }
		]
	},
	{
		id: 'task-flow-productivity',
		title: 'TaskFlow Productivity Tool',
		year: 2024,
		categories: ['Software', 'UI/UX'],
		shortDescription: 'A new mental model for organizing daily workflows.',
		fullDescription:
			'Ditching lists for a more fluid, spatial representation of high-priority tasks.',
		technologies: ['Tauri', 'Rust', 'React'],
		images: [
			{ url: 'https://placehold.co/1600x1000/EEE/31343C?text=TaskFlow+UI', caption: 'Spatial View' }
		]
	}
];
