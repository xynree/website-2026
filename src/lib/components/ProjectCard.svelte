<!--
	ProjectCard Component
	Displays a project summary with title, year, category, description, and technologies
	Clicking "View Project" navigates to the project detail page
-->
<script lang="ts">
	import type { Project } from '$lib/types';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<article class="project-card">
	<div class="project-header">
		<h2 class="project-title">{project.title}</h2>
		<div class="project-meta">
			<span class="project-year">{project.year}</span>
			<span class="separator">·</span>
			<span class="project-category">{project.category}</span>
		</div>
	</div>

	<p class="project-description">{project.shortDescription}</p>

	<div class="project-footer">
		<a href="/projects/{project.id}" class="view-project-link">
			View Project <span aria-hidden="true">→</span>
		</a>
		<div class="technologies">
			{project.technologies.join(', ')}
		</div>
	</div>
</article>

<style>
	.project-card {
		padding: var(--spacing-xl) 0;
		border-bottom: 1px solid var(--color-border);
	}

	.project-card:last-child {
		border-bottom: none;
	}

	.project-header {
		margin-bottom: var(--spacing-sm);
	}

	.project-title {
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
		color: var(--color-text-primary);
	}

	.project-meta {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		font-size: 0.875rem;
		color: var(--color-text-tertiary);
	}

	.separator {
		color: var(--color-text-tertiary);
	}

	.project-description {
		margin-bottom: var(--spacing-md);
		line-height: 1.7;
	}

	.project-footer {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: var(--spacing-md);
		flex-wrap: wrap;
	}

	.view-project-link {
		font-size: 0.875rem;
		text-decoration: underline;
		color: var(--color-text-primary);
		transition: color var(--transition-fast);
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
	}

	.view-project-link:hover {
		color: var(--color-text-secondary);
	}

	.technologies {
		font-size: 0.875rem;
		color: var(--color-text-tertiary);
	}

	@media (max-width: 768px) {
		.project-card {
			padding: var(--spacing-lg) 0;
		}

		.project-title {
			font-size: 1rem;
		}

		.project-footer {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-sm);
		}
	}
</style>
