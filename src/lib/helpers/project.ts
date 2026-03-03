import type { Project } from '$lib/types';

export function formatProjectYear(project: Project) {
	if (project.ongoing) {
		return `${project.year ? project.year[0] : ''} - Ongoing`;
	}
	if (!project.year) return '';
	if (project.year.length === 1) return project.year[0].toString();
	return `${project.year[0]} - ${project.year[1]}`;
}

export function sortProjectByYear(a: Project, b: Project) {
	const valA = a.ongoing ? Infinity : a.year ? Math.max(...a.year) : -Infinity;
	const valB = b.ongoing ? Infinity : b.year ? Math.max(...b.year) : -Infinity;

	if (valA === Infinity && valB === Infinity) {
		return (b.year?.[0] || 0) - (a.year?.[0] || 0);
	}
	return valB - valA;
}
