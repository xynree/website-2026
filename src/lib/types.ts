/**
 * Core type definitions for the portfolio
 */

export interface Project {
	id: string;
	title: string;
	year: number;
	category: string; // e.g., "Software Engineering", "UI/UX Design", "Interactive Visual Applications"
	shortDescription: string;
	fullDescription: string;
	technologies: string[]; // e.g., ["React", "D3.js", "TypeScript"]
	images: string[]; // Array of image URLs for the gallery
	featured: boolean; // Whether to show on main page
}

export type ProjectCategory = string;
