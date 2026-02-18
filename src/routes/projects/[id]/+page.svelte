<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
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
			<div class="header-wrapper">
				<header class="project-header container">
					<div class="header-grid">
						<div class="label-col">
							<a href="/" class="back-link" aria-label="Back">
								<span aria-hidden="true">← Index</span>
							</a>
						</div>

						<div class="title-col">
							<h3 class="project-title">{project.title}</h3>
						</div>
					</div>
				</header>
			</div>

			<div class="detail-wrapper">
				<div
					class="detail-grid container"
					in:fade={{ duration: 600, delay: 150, easing: cubicOut }}
				>
					<div class="meta-col">
						<div class="meta-item">
							<span class="mono-value">{project.year ?? 'Ongoing'}</span>
						</div>
						<div class="meta-item">
							<div class="mono-list">
								{#each project.categories as cat (cat)}
									<span class="mono-value">{cat}</span>
								{/each}
							</div>
						</div>
						<div class="meta-item">
							<div class="mono-list">
								{#each project.technologies as tech (tech)}
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
			</div>
		</article>
	{/if}
</div>

<style>
	.header-wrapper {
		border-bottom: 1px solid var(--color-border);

		margin: var(--spacing-xl) 0 var(--spacing-lg) 0;
	}

	.project-header {
		padding: var(--spacing-sm) 0 var(--spacing-lg) var(--spacing-lg);
	}

	.header-grid {
		display: grid;
		grid-template-columns: var(--col-width-label) 1fr;
		gap: var(--spacing-lg);
		align-items: center;
	}

	.back-link {
		font-family: var(--font-mono);
		font-size: var(--mono-size);
		font-weight: var(--mono-weight);
		text-transform: var(--mono-text-transform);
		color: var(--color-text-tertiary);
		text-decoration: none;
		letter-spacing: var(--mono-ls);
		display: block;
	}

	.project-title {
		font-size: var(--text-xl);
		margin: 0;
		line-height: 1;
		color: var(--color-text-primary);
		letter-spacing: var(--ls-tight);
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

	.mono-value {
		font-family: var(--font-mono);
		font-size: var(--mono-size);
		font-weight: var(--mono-weight);
		text-transform: var(--mono-text-transform);
		color: var(--color-text-tertiary);
		letter-spacing: var(--mono-ls);
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
		color: var(--color-text-secondary);
	}

	.gallery-wrapper {
		margin-top: var(--spacing-2xl);
	}

	@media (max-width: 768px) {
		.header-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-sm);
			align-items: start;
		}

		.project-header {
			padding: var(--spacing-sm) 0 var(--spacing-md) var(--spacing-md);
		}

		.back-link {
			margin-bottom: var(--spacing-xxs);
		}

		.detail-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-xl);
		}

		.project-title {
			font-size: var(--text-xl);
		}

		.meta-col {
			flex-direction: column;
			gap: var(--spacing-md);
			align-items: flex-start;
		}
	}
</style>
