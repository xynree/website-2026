<script lang="ts">
	interface Props {
		categories: string[];
		selectedCategories: string[];
		onToggleCategory: (category: string | null) => void;
	}

	let { categories, selectedCategories, onToggleCategory }: Props = $props();

	/**
	 * Handle tag click
	 */
	function handleTagClick(category: string | null) {
		onToggleCategory(category);
	}

</script>

<div class="tag-filter">
	<button
		class="tag"
		class:active={selectedCategories.length === 0}
		onclick={() => handleTagClick(null)}
		aria-pressed={selectedCategories.length === 0}
	>
		All
	</button>

	{#each categories as category}
		<button
			class="tag"
			class:active={selectedCategories.includes(category)}
			onclick={() => handleTagClick(category)}
			aria-pressed={selectedCategories.includes(category)}
		>
			{category}
		</button>
	{/each}
</div>


<style>
	.tag-filter {
		display: flex;
		gap: var(--spacing-sm);
		flex-wrap: wrap;
		margin-bottom: var(--spacing-xl);
	}

	.tag {
		padding: var(--spacing-xs) var(--spacing-md);
		background: var(--color-background);
		border: 1px solid var(--color-border);
		color: var(--color-text-secondary);
		font-size: var(--text-xs);
		cursor: pointer;
		transition: all var(--transition-fast);
		font-family: var(--font-sans);
		border-radius: var(--border-radius);
	}

	.tag:hover {
		background: var(--color-hover);
		color: var(--color-text-primary);
	}

	.tag.active {
		background: var(--color-text-secondary);
		color: var(--color-background);
		border-color: var(--color-text-primary);
	}

	.tag:focus-visible {
		outline: 2px solid var(--color-text-primary);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		.tag {
			font-size: 0.8125rem;
			padding: 0.375rem var(--spacing-sm);
		}
	}
</style>
