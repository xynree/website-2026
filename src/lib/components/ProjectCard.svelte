<script lang="ts">
	import type { Project, ProjectImage } from '$lib/types';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();

	// Find the featured image for the thumbnail
	let featuredImage = $derived(
		project.images.find((img: ProjectImage) => img.featured) ?? project.images[0]
	);
</script>

<article class="project-card">
	<a href={`/projects/${project.id}`} class="project-card-link">
		<div class="project-row container">
			<div class="col-index">
				<span class="mono-label">{project.year ?? 'Ongoing'}</span>
			</div>

			<div class="col-content">
				<div class="content-wrapper">
					<div class="title-section">
						<h2 class="project-title">{project.title}</h2>
						<p class="project-description">{project.shortDescription}</p>
					</div>

					<div class="metadata-section">
						<div class="col-categories">
							<span class="mono-label">{project.categories[0]}</span>
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
			</div>

			{#if featuredImage}
				<div class="project-thumbnail">
					<img src={featuredImage.url} alt={project.title} class="thumbnail-image" />
				</div>
			{/if}
		</div>
	</a>
</article>

<style>
	.project-card {
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
		grid-template-columns: var(--col-width-label) 1fr;
		gap: var(--spacing-lg);
		align-items: stretch;
		position: relative;
	}

	.col-index {
		padding-top: var(--spacing-xxs);
	}

	.col-content {
		display: flex;
		flex-direction: column;
	}

	.content-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: var(--spacing-xl);
	}

	.title-section {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xxs);
	}

	.metadata-section {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
		align-items: flex-end;
		text-align: right;
	}

	.mono-label {
		font-family: var(--font-mono);
		font-size: var(--mono-size);
		font-weight: var(--mono-weight);
		text-transform: var(--mono-text-transform);
		color: var(--color-text-secondary);
		letter-spacing: var(--mono-ls);
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

	.project-thumbnail {
		position: absolute;
		left: calc(100% + var(--spacing-lg));
		top: 0;
		width: auto;
		height: 100%;
		opacity: 0;
		transition: all var(--transition-medium);
		background: transparent;
		pointer-events: none;
		z-index: 10;
		transform: translateX(-10px);
	}

	.project-card-link:hover .project-thumbnail {
		opacity: 1;
		transform: translateX(0);
	}

	.thumbnail-image {
		width: auto;
		height: 100%;
		object-fit: contain;
		mix-blend-mode: multiply;
		filter: grayscale(1);
	}

	@media (max-width: 1400px) {
		/* Inherit dynamic width from aspect ratio */
	}

	@media (max-width: 1200px) {
		.project-thumbnail {
			position: static;
			width: auto;
			height: 140px;
			opacity: 1;
			transform: none;
			pointer-events: auto;
			margin-left: var(--spacing-lg);
		}

		.project-row {
			display: flex;
			flex-wrap: wrap;
		}

		.col-content {
			flex: 1;
		}
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

		.project-thumbnail {
			width: 100%;
			height: auto;
			aspect-ratio: 16 / 9;
			margin-left: 0;
			margin-top: var(--spacing-md);
		}
	}
</style>
