import { projectCategories } from './content';

export type ProjectCategory = (typeof projectCategories)[number];

export interface SocialLink {
	name: string;
	url: string;
}

export interface ProjectImage {
	url: string;
	caption?: string;
	featured?: boolean;
}

export interface ProjectLink {
	title: string;
	url: string;
}

export interface Project {
	id: string;
	title: string;
	year?: number;
	categories: ProjectCategory[]; // Now multiple categories
	shortDescription: string;
	fullDescription: string;
	technologies: string[]; // e.g., ["React", "D3.js", "TypeScript"]
	images: ProjectImage[]; // Array of image objects for the gallery
	links?: ProjectLink[];
}
