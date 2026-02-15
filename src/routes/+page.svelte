<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import TagFilter from '$lib/components/TagFilter.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import {  getCategories, filterProjectsByCategory } from '$lib/data/projects';
	import {bio} from '$lib/content'


	// Get all available categories
	const categories = getCategories();

	// State for selected category filter
	let selectedCategory = $state<string | null>(null);

	// Filtered projects based on selected category
	let filteredProjects = $derived(filterProjectsByCategory(selectedCategory));

	/**
	 * Handle category selection
	 */
	function handleCategorySelect(category: string | null) {
		selectedCategory = category;
	}
</script>

<svelte:head>
	<title>{bio.name} - Portfolio</title>
	<meta
		name="description"
		content="Portfolio of {bio.name} - {bio.bio.substring(0, 150)}"
	/>
</svelte:head>

<div class="page">
	<Header
		name={bio.name}
		bio={bio.bio}
		socialLinks={bio.socialLinks}
	/>

	<main class="main">
		<div class="container">
			<section class="work-section">
				<h2 class="section-title">Selected Work</h2>

				<TagFilter
					{categories}
					{selectedCategory}
					onSelectCategory={handleCategorySelect}
				/>

				<div class="projects-list">
					{#each filteredProjects as project (project.id)}
						<ProjectCard {project} />
					{:else}
						<p class="no-projects">No projects found in this category.</p>
					{/each}
				</div>
			</section>
		</div>
	</main>
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

	.section-title {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: var(--spacing-xl);
		color: var(--color-text-primary);
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

		.section-title {
			font-size: 1.125rem;
			margin-bottom: var(--spacing-lg);
		}
	}
</style>
