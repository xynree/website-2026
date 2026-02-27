export const webCategories = ['Software', 'UI/UX'] as const;
export const artCategories = ['Illustration', 'Design', 'Comics', 'Other'] as const;

export type WebCategory = (typeof webCategories)[number];
export type ArtCategory = (typeof artCategories)[number];

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
	shortDescription: string;
	fullDescription: string;
	images: ProjectImage[]; // Array of image objects for the gallery
	links?: ProjectLink[];
	technologies?: string[]; // e.g., ["React", "D3.js", "TypeScript"]
	categories: string[];
}

export interface WebProject extends Project {
	categories: WebCategory[];
}

export interface ArtProject extends Project {
	categories: ArtCategory[];
}
