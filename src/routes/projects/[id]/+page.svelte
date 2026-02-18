<!--
	Project Detail Page
	Displays full project information including:
	- Back navigation
	- Project title, year, and category
	- Full description
	- Technologies used
	- Image gallery
-->
<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} - Portfolio</title>
	<meta name="description" content={project.shortDescription} />
</svelte:head>

<div class="page">
	<div class="container" in:fade={{ duration: 300, easing: cubicInOut }}>
		<!-- Back navigation -->
		<nav class="back-nav">
			<a href="/" class="back-link">
				<span aria-hidden="true">←</span> Back to projects
			</a>
		</nav>

		<article class="project-detail">
			<!-- Project header -->
			<header class="project-header">
				<h1 class="project-title">{project.title}</h1>
				<div class="project-meta">
					<span class="project-year">{project.year}</span>
					<span class="project-category">{project.categories.join(' - ')}</span>
				</div>
			</header>

			<!-- Full description -->
			<div class="project-content">
				<p class="project-description">{project.fullDescription}</p>

				<!-- Technologies -->
				<div class="technologies-section">
					<p class="technologies-list">{project.technologies.join(', ')}</p>
				</div>
			</div>

			<!-- Image gallery -->
			<ImageGallery images={project.images} projectTitle={project.title} />
		</article>
	</div>
</div>

<style>
	.page {
		min-height: 100vh;
		padding: var(--spacing-3xl) 0;
	}

	.back-nav {
		margin-bottom: var(--spacing-2xl);
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.back-link:hover {
		color: var(--color-text-primary);
	}

	.project-detail {
		max-width: 750px;
	}

	.project-header {
		margin-bottom: var(--spacing-xl);
		padding-bottom: var(--spacing-lg);
		border-bottom: 1px solid var(--color-border);
	}

	.project-title {
		font-size: 1.75rem;
		font-weight: 600;
		margin-bottom: var(--spacing-sm);
		color: var(--color-text-primary);
	}

	.project-meta {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		font-size: 0.9375rem;
		color: var(--color-text-tertiary);
	}

	.project-content {
		margin-bottom: var(--spacing-xl);
	}

	.project-description {
		font-size: 0.9375rem;
		line-height: 1.8;
		color: var(--color-text-secondary);
		margin-bottom: var(--spacing-xl);
	}

	.technologies-list {
		font-size: 0.9375rem;
		color: var(--color-text-tertiary);
		margin: 0;
	}

	@media (max-width: 768px) {
		.page {
			padding: var(--spacing-2xl) 0;
		}

		.back-nav {
			margin-bottom: var(--spacing-xl);
		}

		.project-title {
			font-size: 1.5rem;
		}

		.project-meta {
			font-size: 0.875rem;
		}

		.project-description {
			font-size: 0.875rem;
		}
	}
</style>
