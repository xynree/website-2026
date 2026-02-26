<script lang="ts">
	import type { ArtProject, ProjectImage } from '$lib/types';

	interface Props {
		project: ArtProject;
	}

	let { project }: Props = $props();

	// Find the featured image for the thumbnail
	let featuredImage = $derived(
		project.images.find((img: ProjectImage) => img.featured) ?? project.images[0]
	);
</script>

<article class="art-card">
	<a href={`/projects/${project.id}`} class="art-card-link container">
		<div class="art-header">
			<div class="art-title-section">
				<h2 class="art-title">{project.title}</h2>
				<div class="art-categories">
					{#each project.categories as category (category)}
						<span class="mono-label">{category}</span>
					{/each}
				</div>
			</div>
			<span class="art-date mono-label">{project.year ?? 'Ongoing'}</span>
		</div>

		{#if featuredImage}
			<div class="art-image-wrapper">
				<img src={featuredImage.url} alt={project.title} class="art-image" />
			</div>
		{/if}
	</a>
</article>

<style>
	.art-card {
		border-top: 1px solid var(--color-border);
		transition: background-color var(--transition-fast);
		padding: var(--spacing-xl) 0;
	}

	.art-card:hover {
		background-color: var(--color-surface-1);
	}

	.art-card-link {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
		text-decoration: none;
	}

	.art-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.art-title-section {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xxs);
	}

	.art-categories {
		display: flex;
		gap: var(--spacing-sm);
	}

	.art-title {
		font-size: var(--text-lg);
		font-weight: var(--weight-medium);
		text-transform: uppercase;
		margin: 0;
		color: var(--color-text-primary);
		letter-spacing: var(--ls-tight);
	}

	.art-date {
		color: var(--color-text-tertiary);
	}

	.mono-label {
		font-family: var(--font-mono);
		font-size: var(--mono-size);
		font-weight: var(--mono-weight);
		text-transform: var(--mono-text-transform);
		letter-spacing: var(--mono-ls);
	}

	.art-image-wrapper {
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		background: var(--color-surface-2);
	}

	.art-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);
	}

	.art-card:hover .art-image {
		transform: scale(1.02);
	}

	@media (max-width: 768px) {
		.art-card {
			padding: var(--spacing-lg) 0;
		}

		.art-header {
			flex-direction: column;
			gap: var(--spacing-xxs);
		}

		.art-title {
			font-size: var(--text-md);
		}
	}
</style>
