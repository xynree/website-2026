import { projects, projectCategories } from '$lib/content';
import type { Project } from '../types';

/**
 * Get all available categories
 */
export function getCategories(): string[] {
	return [...projectCategories];
}

/**
 * Get a single project by ID
 */
export function getProjectById(id: string): Project | undefined {
	return projects.find((p) => p.id === id);
}

/**
 * Filter projects by categories (OR logic)
 */
export function filterProjectsByCategories(selectedCategories: string[]): Project[] {
	if (selectedCategories.length === 0) {
		return projects.filter((p) => p.featured);
	}
	return projects.filter(
		(p) => p.categories.some((cat) => selectedCategories.includes(cat as any)) && p.featured
	);
}
