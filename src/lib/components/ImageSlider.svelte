<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { ProjectImage } from '$lib/types';
	import { getOptimizedUrl } from '$lib/helpers';

	interface Props {
		images: ProjectImage[];
		projectTitle: string;
	}

	let { images, projectTitle }: Props = $props();
	let currentIndex = $state(0);
	let direction = $state(0); // 1 for right, -1 for left
	let isModalOpen = $state(false);

	function next() {
		direction = 1;
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prev() {
		direction = -1;
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function openModal() {
		isModalOpen = true;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		isModalOpen = false;
		document.body.style.overflow = '';
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!isModalOpen) return;
		if (e.key === 'Escape') closeModal();
		if (e.key === 'ArrowRight') next();
		if (e.key === 'ArrowLeft') prev();
	}
</script>

<svelte:window onkeydown={handleKeydown} />
<svelte:head>
	{#if images.length > 1}
		<link
			rel="prefetch"
			href={getOptimizedUrl(images[(currentIndex + 1) % images.length].url, 800)}
		/>
		<link
			rel="prefetch"
			href={getOptimizedUrl(images[(currentIndex - 1 + images.length) % images.length].url, 800)}
		/>
	{/if}
	<link rel="prefetch" href={getOptimizedUrl(images[currentIndex].url, 1600)} />
</svelte:head>

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
					<button class="image-wrapper" onclick={openModal} aria-label="View large image">
						<img
							src={getOptimizedUrl(images[currentIndex].url,800)}
							alt={images[currentIndex].caption || `${projectTitle} - image ${currentIndex + 1}`}
							class="slider-image"
							fetchpriority="high"
						/>
					</button>
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

{#if isModalOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="modal-overlay" onclick={closeModal} transition:fade={{ duration: 250 }}>
		<button class="modal-close" onclick={closeModal} aria-label="Close modal">×</button>

		<div class="modal-content" onclick={(e) => e.stopPropagation()}>
			{#if images.length > 1}
				<button class="modal-nav prev" onclick={prev} aria-label="Previous image">←</button>
				<button class="modal-nav next" onclick={next} aria-label="Next image">→</button>
			{/if}

			{#key currentIndex}
				<div
					class="modal-image-container"
					in:fly={{ x: direction * 20, duration: 300, easing: cubicOut }}
				>
					<img
						src={images[currentIndex].url}
						alt={images[currentIndex].caption || projectTitle}
						class="modal-image"
					/>
				</div>
			{/key}
		</div>
	</div>
{/if}

<style>
	.slider-container {
		width: calc(100% + (112px));
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		margin: 0 -56px;
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
		background: none;
		border: none;
		cursor: zoom-in;
	}

	.slider-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
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

	.prev {
		position: static;
		transform: none;
	}
	.next {
		position: static;
		transform: none;
	}

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

	/* Modal Styles */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.95);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2000;
		backdrop-filter: blur(8px);
	}

	.modal-content {
		position: relative;
		width: 90vw;
		height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal-image-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.modal-image {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
	}

	.modal-caption {
		position: absolute;
		bottom: -40px;
		color: white;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		text-align: center;
	}

	.modal-close {
		position: absolute;
		top: 20px;
		right: 20px;
		background: none;
		border: none;
		color: white;
		font-size: 40px;
		cursor: pointer;
		z-index: 2001;
		line-height: 1;
		padding: 10px;
	}

	.modal-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: white;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		font-size: 24px;
		transition: all 0.2s ease;
		z-index: 2002;
	}

	.modal-nav:hover {
		background: white;
		color: black;
	}

	.modal-nav.prev {
		left: -80px;
	}
	.modal-nav.next {
		right: -80px;
	}

	@media (max-width: 768px) {
		.slider-main {
			aspect-ratio: 1/1;
		}

		.modal-content {
			width: 100vw;
			height: 80vh;
		}

		.modal-nav {
			width: 44px;
			height: 44px;
			bottom: -60px;
			top: auto;
			transform: none;
		}

		.modal-nav.prev {
			left: 20%;
		}
		.modal-nav.next {
			right: 20%;
		}

		.modal-image {
			max-width: 95%;
		}
	}
</style>
