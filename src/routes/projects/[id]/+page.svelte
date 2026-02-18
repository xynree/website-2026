<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut, cubicOut } from 'svelte/easing';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let project = $derived(data.project);

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>{project.title} - Portfolio</title>
	<meta name="description" content={project.shortDescription} />
</svelte:head>

<div class="page">
	{#if mounted}
		<article class="project-detail">
			<header class="project-header" in:fade={{ duration: 600, delay: 100, easing: cubicOut }}>
				<div class="header-grid container">
					<div class="label-col">
						<a href="/" class="back-link" aria-label="Back to work">
							<span aria-hidden="true">← Index</span>
						</a>
					</div>
					<div class="title-col">
						<h1 class="project-title">{project.title}</h1>
					</div>
				</div>
			</header>

			<div class="detail-grid container" in:fade={{ duration: 600, delay: 200, easing: cubicOut }}>
				<div class="meta-col">
					<div class="meta-item">
						<span class="mono-value">{project.year ?? 'Ongoing'}</span>
					</div>
					<div class="meta-item">
						<div class="mono-list">
							{#each project.categories as cat}
								<span class="mono-value">{cat}</span>
							{/each}
						</div>
					</div>
					<div class="meta-item">
						<div class="mono-list">
							{#each project.technologies as tech}
								<span class="mono-value">{tech}</span>
							{/each}
						</div>
					</div>
				</div>

				<div class="content-col">
					<p class="full-description">{project.fullDescription}</p>

					<div class="gallery-wrapper">
						<ImageGallery images={project.images} projectTitle={project.title} baseDelay={400} />
					</div>
				</div>
			</div>
		</article>
	{/if}
</div>

<style>
	.page {
		padding-bottom: var(--spacing-3xl);
	}

	.project-header {
		margin-bottom: var(--spacing-xl);
		padding-bottom: var(--spacing-sm);
	}

	.header-grid {
		display: grid;
		grid-template-columns: var(--col-width-label) 1fr;
		gap: var(--spacing-lg);
		align-items: end;
	}

	.back-link {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		text-transform: uppercase;
		color: var(--color-text-tertiary);
		text-decoration: none;
		letter-spacing: var(--ls-wide);
		display: block;
		margin-bottom: var(--spacing-xxs); /* Align baseline with H1 roughly */
	}

	.project-title {
		font-size: var(--text-xl);
		margin: 0;
		line-height: 1;
		color: var(--color-text-primary);
		letter-spacing: var(--ls-tighter);
	}

	.detail-grid {
		display: grid;
		grid-template-columns: var(--col-width-label) 1fr;
		gap: var(--spacing-lg);
	}

	.meta-col {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	.meta-item {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xxs);
	}

	.mono-label {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		text-transform: uppercase;
		color: var(--color-text-tertiary);
		letter-spacing: var(--ls-wide);
	}

	.mono-value {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.mono-list {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.full-description {
		max-width: 650px;
		font-size: var(--text-md);
		line-height: 1.6;
		margin-bottom: var(--spacing-2xl);
		color: var(--color-text-primary);
	}

	.gallery-wrapper {
		margin-top: var(--spacing-2xl);
	}

	@media (max-width: 768px) {
		.detail-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-xl);
		}

		.project-title {
			font-size: 1.5rem;
		}

		.meta-col {
			flex-direction: row;
			flex-wrap: wrap;
			gap: var(--spacing-md);
		}
	}
</style>

