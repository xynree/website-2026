export const softwareCategories = ['Software', 'UI/UX'] as const;

export type SoftwareCategory = (typeof softwareCategories)[number];

export const artCategories = ['Comics', 'Tattoo', 'Painting'] as const;

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

export interface SoftwareProject extends Project {
	categories: SoftwareCategory[];
}

export interface ArtProject extends Project {
	categories: ArtCategory[];
}
