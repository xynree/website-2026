<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import TagFilter from '$lib/components/TagFilter.svelte';
	import { artProjects, bio, } from '$lib/content';
	import { artCategories, type ArtCategory } from '$lib/types';

	// State for selected category filter
	let selectedCategories = $state<ArtCategory[]>([]);

	// Filtered projects based on selected category
	let filteredProjects = $derived(
		(selectedCategories.length > 0
			? artProjects.filter((p) => p.categories.some((c) => selectedCategories.includes(c as ArtCategory)))
			: artProjects
		).sort((a, b) => {
			if (!a?.year) return -1;
			if (!b?.year) return 1;
			return b.year - a.year;
		})
	);

	const BATCH_SIZE = 6;
	let visibleCount = $state(BATCH_SIZE);
	let visibleProjects = $derived(filteredProjects.slice(0, visibleCount));

	/**
	 * Handle category selection (Toggle logic)
	 */
	function handleCategorySelect(category: string | null) {
		visibleCount = BATCH_SIZE;
		if (category === null) {
			selectedCategories = [];
		} else {
			if (selectedCategories.includes(category as ArtCategory)) {
				selectedCategories = selectedCategories.filter((c) => c !== category);
			} else {
				selectedCategories = [...selectedCategories, category as ArtCategory];
			}
		}
	}

	let mounted = $state(false);
	let isInitialLoad = $state(true);
	let scrollWatcher = $state<HTMLElement | null>(null);
	let showScrollTop = $state(false);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		mounted = true;
		setTimeout(() => {
			isInitialLoad = false;
		}, 1200);

		const handleScroll = () => {
			showScrollTop = window.scrollY > 400;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	$effect(() => {
		if (scrollWatcher && visibleCount < filteredProjects.length) {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						visibleCount += BATCH_SIZE;
					}
				},
				{ threshold: 0.1 }
			);

			observer.observe(scrollWatcher);
			return () => observer.disconnect();
		}
	});
</script>

<svelte:head>
	<title>xinrui chen » art</title>
	<meta name="description" content="{bio.name} - art" />
</svelte:head>

{#if mounted}
	<div class="page">
		<main class="main">
			<section class="art-section">
				<!-- <TagFilter
					categories={artCategories as unknown as ArtCategory[]}
					{selectedCategories}
					onToggleCategory={handleCategorySelect}
				/> -->

				<div class="art-grid">
					{#each visibleProjects as project, i (project.id)}
						<div
							class="art-wrapper"
							in:fly|global={{
								y: 5,
								duration: 800,
								delay: isInitialLoad ? 200 + i * 150 : (i % BATCH_SIZE) * 150,
								easing: cubicOut
							}}
							animate:flip={{ duration: 300 }}
						>
							<ProjectCard {project} showCategories={true} basePath="art" />
						</div>
					{:else}
						<p class="no-projects">No art projects found.</p>
					{/each}
				</div>

				{#if visibleCount < filteredProjects.length}
					<div bind:this={scrollWatcher} class="scroll-watcher">
						<div class="loader"></div>
					</div>
				{/if}
			</section>
		</main>
	</div>
{/if}

{#if showScrollTop}
	<button
		class="scroll-top-btn"
		onclick={scrollToTop}
		transition:fade={{ duration: 200 }}
		aria-label="Scroll to top"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg
		>
	</button>
{/if}

<style>
	.page {
		min-height: 100vh;
	}

	.main {
		padding: 0 0 var(--spacing-2xl);
	}

	.art-section {
		margin-bottom: var(--spacing-3xl);
	}

	.art-grid {
		display: grid;
		grid-template-columns: 100%;
		border-bottom: 1px solid var(--color-border);
	}

	.no-projects {
		color: var(--color-text-tertiary);
		text-align: center;
		padding: var(--spacing-xl) 0;
	}

	.scroll-watcher {
		display: flex;
		justify-content: center;
		padding: var(--spacing-2xl) 0;
		height: var(--spacing-3xl);
	}

	.loader {
		width: var(--spacing-md);
		height: var(--spacing-md);
		border: 1px solid var(--color-border);
		border-top-color: var(--color-text-tertiary);
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.scroll-top-btn {
		position: fixed;
		bottom: var(--spacing-xl);
		right: var(--spacing-xl);
		width: var(--spacing-xl);
		height: var(--spacing-xl);
		border-radius: 50%;
		background: var(--color-background);
		border: 1px solid var(--color-border);
		color: var(--color-text-primary);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		transition: all var(--transition-fast);
		z-index: 100;
	}

	.scroll-top-btn:hover {
		transform: translateY(-4px);
		background: var(--color-hover);
		border-color: var(--color-text-tertiary);
	}

	@media (max-width: 768px) {
		.scroll-top-btn {
			bottom: var(--spacing-lg);
			right: var(--spacing-lg);
			width: 40px;
			height: 40px;
		}
	}
</style>
