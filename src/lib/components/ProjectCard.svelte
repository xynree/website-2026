<script lang="ts">
	import type { Project, ProjectImage } from '$lib/types';
	import { getOptimizedUrl } from '$lib/cloudinary';

	interface Props {
		project: Project;
		showCategories?: boolean;
		basePath: string;
	}

	let { project, showCategories = false, basePath }: Props = $props();

	// Find the featured image for the thumbnail
	let featuredImage = $derived(
		project.images.find((img: ProjectImage) => img.featured) ?? project.images[0]
	);

	let sortedCategories = $derived(project.categories.sort((a, b) => a.localeCompare(b)));
	
	let formattedYear = $derived.by(() => {
		if (!project.year) return 'Ongoing';
		if (project.year.length === 1) return project.year[0].toString();
		return `${project.year[0]} - ${project.year[1]}`;
	});
</script>

<article class="project-card">
	<a href={`/${basePath}/${project.id}`} class="project-card-link container">
		<div class="project-row container">
			<div class="col-index">
				<span class="mono-label year-label">{formattedYear}</span>
			</div>

			<div class="col-content">
				<div class="content-wrapper">
					<div class="title-section">
						<h2 class="project-title">{project.title}</h2>
						<p class="project-description">{project.shortDescription}</p>

						{#if project.images && project.images.length > 0}
							<div class="project-previews">
								{#each project.images.slice(0, 3) as image, i (image.url)}
									<div class="project-preview-item">
										<img
											src={getOptimizedUrl(image.url)}
											alt={`${project.title} preview ${i + 1}`}
											class="preview-image"
											loading="lazy"
										/>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>

			<div class="metadata-section">
				<div class="col-categories">
					{#if showCategories}
						{#each sortedCategories as category (category)}
							<span class="mono-label">{category}</span>
						{/each}
					{/if}
				</div>
				<div class="col-tech">
					<div class="tech-tags">
						{#each project.technologies as p (p)}
							<span class="tech-tag">{p}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</a>
</article>

<style>
	.project-card {
		padding: var(--spacing-md) 0;
		border-top: 1px solid var(--color-border);
		transition: background-color var(--transition-fast);
		position: relative;
	}

	.project-card:hover {
		background-color: var(--color-surface-1);
	}

	.project-card-link {
		display: block;
		padding: var(--spacing-lg) 0;
	}

	.project-row {
		display: grid;
		grid-template-columns: var(--col-width-label) 1fr var(--col-width-link);
		gap: var(--spacing-sm);
		align-items: flex-start;
	}

	.col-index {
		padding-top: var(--spacing-xxs);
	}

	.col-content {
		display: flex;
		flex-direction: column;
		overflow:hidden;
	}

	.content-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: var(--spacing-xl);
	}

	.title-section {
		flex:1;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.year-label {
		font-weight: 600;
		color: var(--color-text-secondary);
		letter-spacing: -0.01em;
		
	}

	.metadata-section {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
		align-items: flex-end;
		text-align: right;
	}

	.project-title {
		font-size: var(--text-md);
		font-weight: var(--weight-medium);
		text-transform: uppercase;
		margin: 0;
		color: var(--color-text-primary);
		letter-spacing: -0.01em;
	}

	.project-description {
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
		margin: 0;
		line-height: 1.4;
		max-width: 500px;
	}

	.col-categories {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.col-tech {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
		justify-content: flex-end;
	}

	.tech-tag {
		font-family: var(--font-mono);
		font-size: var(--mono-size);
		font-weight: var(--mono-weight);
		text-transform: var(--mono-text-transform);
		color: var(--color-text-tertiary);
		background: var(--color-surface-2);
		padding: 2px 5px;
		border-radius: 2px;
		letter-spacing: var(--mono-ls);
	}

	.project-previews {
		display: flex;
		gap: var(--spacing-sm);
		margin-top: var(--spacing-xs);
		overflow: hidden;
		width: 100%;
	}

	.project-preview-item {
		width: 180px;
		flex-shrink: 0;
		aspect-ratio: 4 / 3;
		overflow: hidden;
	}

	.preview-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		.project-row {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-md);
		}

		.col-index {
			width: auto;
		}

		.content-wrapper {
			flex-direction: column;
			gap: var(--spacing-md);
		}

		.metadata-section {
			align-items: flex-start;
			text-align: left;
			margin-top: 0;
		}

		.tech-tags {
			justify-content: flex-start;
		}
	}
</style>
