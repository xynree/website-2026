<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { ProjectImage } from '$lib/types';

	interface Props {
		images: ProjectImage[];
		projectTitle: string;
	}

	let { images, projectTitle }: Props = $props();
	let currentIndex = $state(0);
	let direction = $state(0); // 1 for right, -1 for left

	function next() {
		direction = 1;
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prev() {
		direction = -1;
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

</script>

<div class="slider-container">
	<div class="slider-content">
		{#if images.length > 1}
			<button class="nav-btn prev" onclick={prev} aria-label="Previous image">
				<span class="arrow">←</span>
			</button>
		{/if}

		<div class="slider-main">
			{#key currentIndex}
				<div 
					class="slide"
					in:fly={{ x: direction * 50, duration: 400, easing: cubicOut, opacity: 0 }}
					out:fade={{ duration: 200 }}
				>
					<div class="image-wrapper">
						<img 
							src={images[currentIndex].url} 
							alt={images[currentIndex].caption || `${projectTitle} - image ${currentIndex + 1}`} 
							class="slider-image"
						/>
					</div>
					{#if images[currentIndex].caption}
						<p class="caption">{images[currentIndex].caption}</p>
					{/if}
				</div>
			{/key}
		</div>

		{#if images.length > 1}
			<button class="nav-btn next" onclick={next} aria-label="Next image">
				<span class="arrow">→</span>
			</button>
		{/if}
	</div>

	{#if images.length > 1}
		<div class="slider-controls">
			<div class="counter">
				{currentIndex + 1} / {images.length}
			</div>
		</div>
	{/if}
</div>

<style>
	.slider-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		margin: var(--spacing-xl) 0;
	}

	.slider-content {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		width: 100%;
		position: relative;
	}

	.slider-main {
		position: relative;
		flex: 1;
		aspect-ratio: 1/1;
		background: var(--color-surface-1);
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.image-wrapper {
		flex: 1;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}

	.slider-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.caption {
		position: absolute;
		bottom: var(--spacing-sm);
		left: var(--spacing-xl);
		right: var(--spacing-xl);
		text-align: center;
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
		margin: 0;
		background: rgba(var(--color-background-rgb), 0.8);
		backdrop-filter: blur(4px);
		padding: var(--spacing-xxs) var(--spacing-sm);
	}

	.nav-btn {
		background: none;
		border: 1px solid var(--color-border);
		color: var(--color-text-tertiary);
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all var(--transition-fast);
		z-index: 10;
		font-size: 18px;
		flex-shrink: 0;
	}

	.nav-btn:hover {
		border-color: var(--color-text-primary);
		color: var(--color-text-primary);
	}

	.prev { position: static; transform: none; }
	.next { position: static; transform: none; }

	.slider-controls {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 var(--spacing-xs);
	}


	.counter {
		font-family: var(--font-mono);
		font-size: var(--mono-size);
		color: var(--color-text-tertiary);
	}

	@media (max-width: 768px) {
		.slider-main {
			aspect-ratio: 4 / 3;
		}
		
		.image-wrapper {
			padding: var(--spacing-md);
		}

		.nav-btn {
			width: 36px;
			height: 36px;
		}
	}
</style>
