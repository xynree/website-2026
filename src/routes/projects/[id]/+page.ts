import type { PageLoad } from './$types';
import { getProjectById } from '$lib/data/projects';
import { error } from '@sveltejs/kit';

/**
 * Load project data for the detail page
 * Returns 404 if project not found
 */
export const load: PageLoad = ({ params }) => {
	const project = getProjectById(params.id);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
};
