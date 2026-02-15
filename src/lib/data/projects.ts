import { projects } from '$lib/content';
import type { Project } from '../types';

/**
 * Get all unique categories from projects
 */
export function getCategories(): string[] {
	const categories = new Set(projects.map((p) => p.category));
	return Array.from(categories).sort();
}

/**
 * Get a single project by ID
 */
export function getProjectById(id: string): Project | undefined {
	return projects.find((p) => p.id === id);
}

/**
 * Filter projects by category
 */
export function filterProjectsByCategory(category: string | null): Project[] {
	if (!category) {
		return projects.filter((p) => p.featured);
	}
	return projects.filter((p) => p.category === category && p.featured);
}
