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
		<a href="/projects/{project.id}" class="project-title-link">
			<h2 class="project-title">{project.title}</h2>
		</a>
		<div class="project-meta">
			<span class="project-year">{project?.year ?? 'Ongoing'}</span>
			<span class="separator">·</span>
			<span class="project-category">{project.categories.join(' - ')}</span>
		</div>
	</div>

	<p class="project-description">{project.shortDescription}</p>

	<div class="project-footer">
		<div class="technologies">
			{#each project.technologies as p}
				<span class="tech-tag">{p}</span>
			{/each}
		</div>
	</div>
</article>


<style>
	.project-card {
		padding: var(--spacing-xl) 0;
		border-bottom: 1px solid var(--color-border);
	}


	.project-header {
		margin-bottom: var(--spacing-sm);
	}

	.project-title-link {
		text-decoration: none;
		display: inline-block;
	}

	.project-title {
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
		color: var(--color-text-primary);
		font-family: var(--font-header);
		transition: color var(--transition-fast);
	}

	.project-title-link:hover .project-title {
		color: var(--color-text-secondary);
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
		justify-content: flex-start;
		align-items: flex-end;
		gap: var(--spacing-md);
		flex-wrap: wrap;
	}

	.technologies {
		display: flex;
		gap: 12px;
		font-size: var(--text-xs);
		color: var(--color-text-secondary);
	}

	.tech-tag {
		background-color: var(--color-surface-1);
		padding: 4px 8px;
		border-radius: 4px;
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
