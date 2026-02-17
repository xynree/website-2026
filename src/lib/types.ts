import { projectCategories } from './content';

export type ProjectCategory = (typeof projectCategories)[number];

export interface Project {
	id: string;
	title: string;
	year?: number;
	categories: ProjectCategory[]; // Now multiple categories
	shortDescription: string;
	fullDescription: string;
	technologies: string[]; // e.g., ["React", "D3.js", "TypeScript"]
	images: string[]; // Array of image URLs for the gallery
	featured: boolean; // Whether to show on main page
}
