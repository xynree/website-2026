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


	// Get all available categories
	const categories = getCategories();

	// State for selected category filter
	let selectedCategories = $state<string[]>([]);

	// Filtered projects based on selected category
	let filteredProjects = $derived(filterProjectsByCategories(selectedCategories));

	/**
	 * Handle category selection (Toggle logic)
	 */
	function handleCategorySelect(category: string | null) {
		if (category === null) {
			selectedCategories = [];
		} else {
			if (selectedCategories.includes(category)) {
				selectedCategories = selectedCategories.filter((c) => c !== category);
			} else {
				selectedCategories = [...selectedCategories, category];
			}
		}
	}

	let mounted = $state(false);
	let isInitialLoad = $state(true);

	onMount(() => {
		mounted = true;
		setTimeout(() => {
			isInitialLoad = false;
		}, 1200); // Wait for initial sequence to finish
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
						{#each filteredProjects as project, i (project.id)}
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
</style>
