import { projects, projectCategories } from '$lib/content';
import type { Project, ProjectCategory } from '../types';

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
 * Filter projects by categories
 */
export function filterProjectsByCategories(categories: ProjectCategory[]): Project[] {
	if (!categories || categories.length === 0) {
		return projects;
	}
	return projects.filter((p) => categories.some((cat) => p.categories.includes(cat)));
}
