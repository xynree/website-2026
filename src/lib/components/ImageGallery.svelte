<!--
	ImageGallery Component
	Displays a grid of images for a project
	Simple, responsive layout
-->
<script lang="ts">
	interface Props {
		images: string[];
		projectTitle: string;
	}

	let { images, projectTitle }: Props = $props();
</script>

<div class="gallery">
	{#each images as image, index}
		<div class="gallery-item">
			<img src={image} alt="{projectTitle} - Image {index + 1}" class="gallery-image" />
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
		background: var(--color-hover);
		aspect-ratio: 16 / 10;
		overflow: hidden;
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	@media (max-width: 768px) {
		.gallery {
			gap: var(--spacing-md);
			margin: var(--spacing-lg) 0;
		}

		.gallery-item {
			aspect-ratio: 4 / 3;
		}
	}
</style>
