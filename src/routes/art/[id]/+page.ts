import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { artProjects } from '$lib/content';

/**
 * Load project data for the detail page
 * Returns 404 if project not found
 */
export const load: PageLoad = ({ params }) => {
	const project = artProjects.find((p) => p.id === params.id);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
};
