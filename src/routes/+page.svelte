<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut, cubicOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';
	import Header from '$lib/components/Header.svelte';
	import TagFilter from '$lib/components/TagFilter.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import {  getCategories, filterProjectsByCategories } from '$lib/data/projects';
	import {bio} from '$lib/content'
	import { type ProjectCategory } from '$lib/types';


	// Get all available categories
	const categories = getCategories();

	// State for selected category filter
	let selectedCategories = $state<ProjectCategory[]>([]);

	// Filtered projects based on selected category
	let filteredProjects = $derived(filterProjectsByCategories(selectedCategories));
	
	// Infinite scroll state
	let visibleCount = $state(5);
	let visibleProjects = $derived(filteredProjects.slice(0, visibleCount));

	/**
	 * Handle category selection (Toggle logic)
	 */
	function handleCategorySelect(category: string | null) {
		visibleCount = 5; // Reset count on filter change
		if (category === null) {
			selectedCategories = [];
		} else {
			if (selectedCategories.includes(category as ProjectCategory)) {
				selectedCategories = selectedCategories.filter((c) => c !== category);
			} else {
				selectedCategories = [...selectedCategories, category as ProjectCategory];
			}
		}
	}

	let mounted = $state(false);
	let isInitialLoad = $state(true);
	let scrollWatcher = $state<HTMLElement | null>(null);

	onMount(() => {
		mounted = true;
		setTimeout(() => {
			isInitialLoad = false;
		}, 1200);
	});

	$effect(() => {
		if (scrollWatcher && visibleCount < filteredProjects.length) {
			const observer = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					visibleCount += 5;
				}
			}, { threshold: 0.1 });

			observer.observe(scrollWatcher);
			return () => observer.disconnect();
		}
	});


</script>

<svelte:head>
	<title>{bio.name}</title>
	<meta
		name="description"
		content="Portfolio of {bio.name}"
	/>
</svelte:head>

<div class="page">
	{#if mounted}
		<div in:fade={{ duration: 300, easing: cubicInOut }}>
			<Header
				name={bio.name}
				bio={bio.bio}
				socialLinks={bio.socialLinks}
			/>
		</div>

		<main class="main">
			<div class="container">
				<section class="work-section">
					<TagFilter
						{categories}
						{selectedCategories}
						onToggleCategory={handleCategorySelect}
					/>

					<div class="projects-list">
						{#each visibleProjects as project, i (project.id)}
							<div
								class="project-wrapper"
								in:fly|global={{ 
									y: 40, 
									duration: 800, 
									delay: isInitialLoad ? 300 + (i * 100) : i * 50, 
									easing: cubicOut 
								}}
								out:fly={{ y: 20, duration: 300, delay: i * 100, easing: cubicInOut }}
								animate:flip={{ duration: 300 }}
							>
								<ProjectCard {project} />
							</div>
						{:else}
							<p class="no-projects">No projects found for the selected categories.</p>
						{/each}
					</div>

					<!-- Infinite scroll scrollWatcher -->
					{#if visibleCount < filteredProjects.length}
						<div bind:this={scrollWatcher} class="scroll-watcher">
							<div class="loader"></div>
						</div>
					{/if}
				</section>
			</div>
		</main>
	{/if}
</div>



<style>
	.page {
		min-height: 100vh;
	}

	.main {
		padding: var(--spacing-2xl) 0;
	}

	.work-section {
		margin-bottom: var(--spacing-3xl);
	}

	.projects-list {
		display: grid;
		grid-template-columns: 100%;
		overflow: hidden;
		position: relative;
	}

	.project-wrapper {
		grid-column: 1;
		width: 100%;
	}

	.no-projects {
		color: var(--color-text-tertiary);
		text-align: center;
		padding: var(--spacing-xl) 0;
	}

	@media (max-width: 768px) {
		.main {
			padding: var(--spacing-xl) 0;
		}

	}

	.scroll-watcher {
		display: flex;
		justify-content: center;
		padding: var(--spacing-2xl) 0;
		height: 100px;
	}

	.loader {
		width: 24px;
		height: 24px;
		border: 2px solid var(--color-border);
		border-top-color: var(--color-text-primary);
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}
</style>

