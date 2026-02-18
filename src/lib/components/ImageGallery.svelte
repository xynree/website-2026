<script lang="ts">
	import type { ProjectImage } from '$lib/types';

	interface Props {
		images: ProjectImage[];
		projectTitle: string;
	}

	let { images, projectTitle }: Props = $props();
</script>

<div class="gallery">
	{#each images as image, index}
		<div class="gallery-item">
			<div class="gallery-image-wrapper">
				<img
					src={image.url}
					alt={image.caption || `${projectTitle} - Image ${index + 1}`}
					class="gallery-image"
				/>
			</div>
			{#if image.caption}
				<p class="image-caption">{image.caption}</p>
			{/if}
		</div>
	{/each}
</div>



<style>
	.gallery {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-lg);
		margin: var(--spacing-xl) 0;
	}

	.gallery-item {
		width: 100%;
	}

	.gallery-image-wrapper {
		width: 100%;
		background: var(--color-hover);
		aspect-ratio: 16 / 10;
		overflow: hidden;
		margin-bottom: var(--spacing-xs);
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.image-caption {
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
		line-height: 1.4;
	}

	@media (max-width: 768px) {
		.gallery {
			gap: var(--spacing-md);
			margin: var(--spacing-lg) 0;
		}

		.gallery-image-wrapper {
			aspect-ratio: 4 / 3;
		}
	}

</style>
