<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { ProjectImage } from '$lib/types';
	import { getOptimizedUrl } from '$lib/cloudinary';

	interface Props {
		images: ProjectImage[];
		projectTitle: string;
		baseDelay?: number;
	}

	let { images, projectTitle, baseDelay = 0 }: Props = $props();
	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<div class="gallery">
	{#if mounted}
		{#each images as image, index (image.url)}
			<div
				class="gallery-item"
				in:fly|global={{ y: 40, duration: 800, delay: baseDelay + index * 150, easing: cubicOut }}
			>
				<div class="gallery-image-wrapper">
					<img
						src={getOptimizedUrl(image.url, 1000)}
						alt={image.caption || `${projectTitle} - Image ${index + 1}`}
						class="gallery-image"
						loading={index < 2 ? 'eager' : 'lazy'}
						fetchpriority={index === 0 ? 'high' : 'auto'}
					/>
				</div>
				{#if image.caption}
					<p class="image-caption">{image.caption}</p>
				{/if}
			</div>
		{/each}
	{/if}
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
		background: var(--color-background);
		overflow: hidden;
		margin-bottom: var(--spacing-xs);
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
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
