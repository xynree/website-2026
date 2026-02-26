import { softwareProjects, softwareCategories } from '$lib/content';
import type { Project, ProjectCategory } from '../types';

/**
 * Get all available categories
 */
export function getCategories(): string[] {
	return [...softwareCategories];
}

/**
 * Get a single project by ID
 */
export function getProjectById(id: string): Project | undefined {
	return softwareProjects.find((p) => p.id === id);
}

/**
 * Filter projects by categories
 */
export function filterProjectsByCategories(categories: ProjectCategory[]): Project[] {
	if (!categories || categories.length === 0) {
		return softwareProjects;
	}
	return softwareProjects.filter((p) => categories.some((cat) => p.categories.includes(cat)));
}
