import type { Project } from '$lib/types';

export const bio = {
	name: 'Xinrui Chen',
	bio: 'Multidisciplinary frontend engineer with a background in design. Experience in hybrid roles spanning both design and development. Passionate about delivering great UX and creating beautiful products.',
	socialLinks: [
		{ name: 'Email', url: 'mailto:your.email@example.com' },
		{ name: 'GitHub', url: 'https://github.com/xynree' },
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/xinruichen7' },
		{ name: 'Instagram', url: 'https://instagram.com/xynree' }
	]
};

/**
 * Sample project data
 * Replace with your actual projects
 */
export const projects: Project[] = [
	{
		id: 'interactive-data-viz',
		title: 'Interactive Data Visualization Dashboard',
		year: 2025,
		category: 'Software Engineering',
		shortDescription:
			'A real-time analytics dashboard for tracking user engagement metrics. Built with React and D3.js, featuring custom visualizations and responsive design patterns.',
		fullDescription:
			'A comprehensive real-time analytics dashboard designed to track and visualize user engagement metrics across multiple platforms. The project leverages React for component architecture and D3.js for creating custom, interactive data visualizations. Key features include real-time data updates via WebSocket connections, responsive design patterns that adapt to various screen sizes, and a modular visualization system that allows for easy extension and customization. The dashboard processes large datasets efficiently and provides intuitive controls for filtering and exploring data across different time ranges and user segments.',
		technologies: ['React', 'D3.js', 'TypeScript', 'WebSocket'],
		images: [
			'/projects/data-viz/hero.jpg',
			'/projects/data-viz/detail-1.jpg',
			'/projects/data-viz/detail-2.jpg',
			'/projects/data-viz/detail-3.jpg'
		],
		featured: true
	},
	{
		id: 'generative-art',
		title: 'Generative Art Playground',
		year: 2024,
		category: 'Interactive Visual Applications',
		shortDescription:
			'Web-based tool for creating algorithmic art using shader programming. Users can manipulate parameters in real-time to generate unique visual compositions.',
		fullDescription:
			'An interactive web-based platform that democratizes generative art creation through shader programming. The application provides an intuitive interface where users can manipulate various parameters in real-time, instantly seeing the results of their creative decisions. Built with WebGL and GLSL, the tool offers a library of pre-built shader effects while also allowing advanced users to write custom shaders. The Canvas API integration enables users to export their creations in high resolution. The project emphasizes performance optimization to ensure smooth 60fps rendering even with complex visual effects, and includes a gallery system where users can save and share their favorite compositions.',
		technologies: ['WebGL', 'GLSL', 'Canvas API'],
		images: [
			'/projects/generative-art/hero.jpg',
			'/projects/generative-art/detail-1.jpg',
			'/projects/generative-art/detail-2.jpg'
		],
		featured: true
	},
	{
		id: 'design-system',
		title: 'Design System for SaaS Platform',
		year: 2024,
		category: 'UI/UX Design',
		shortDescription:
			'Comprehensive design system including component library, documentation, and accessibility guidelines. Improved development velocity by 40% across engineering teams.',
		fullDescription:
			'A comprehensive design system created to unify the user experience across a large-scale SaaS platform. The project involved extensive research, documentation, and implementation of a complete component library built with React and documented in Storybook. The system includes detailed accessibility guidelines ensuring WCAG 2.1 AA compliance, a robust token system for colors, typography, and spacing, and comprehensive usage documentation. The design system reduced design-to-development handoff time significantly and improved consistency across the product. It includes over 50 reusable components, each with multiple variants and states, all thoroughly tested for accessibility and responsive behavior. The implementation resulted in a 40% improvement in development velocity as teams could rapidly prototype and build new features using the established components.',
		technologies: ['Figma', 'React', 'Storybook'],
		images: [
			'/projects/design-system/hero.jpg',
			'/projects/design-system/detail-1.jpg',
			'/projects/design-system/detail-2.jpg',
			'/projects/design-system/detail-3.jpg'
		],
		featured: true
	},
	{
		id: 'ecommerce-checkout',
		title: 'E-commerce Checkout Redesign',
		year: 2023,
		category: 'UI/UX Design',
		shortDescription:
			'Led user research and redesign of checkout flow for mid-sized retailer. Reduced cart abandonment by 25% through simplified multi-step form and progressive disclosure.',
		fullDescription:
			'A comprehensive redesign of the checkout experience for a mid-sized e-commerce retailer, driven by extensive user research and data analysis. The project began with user interviews, usability testing sessions, and analysis of checkout analytics to identify pain points in the existing flow. The redesign introduced a simplified multi-step form with clear progress indicators, progressive disclosure to reduce cognitive load, and smart form validation with helpful error messages. Additional features include guest checkout options, address autocomplete, and saved payment methods for returning customers. The new design was A/B tested extensively, resulting in a 25% reduction in cart abandonment and a significant improvement in customer satisfaction scores. The project also included comprehensive mobile optimization, as mobile traffic represented over 60% of checkout attempts.',
		technologies: ['Figma', 'User Research', 'A/B Testing'],
		images: [
			'/projects/ecommerce/hero.jpg',
			'/projects/ecommerce/detail-1.jpg',
			'/projects/ecommerce/detail-2.jpg'
		],
		featured: true
	}
];
