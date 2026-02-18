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

<div class="tag-filter-wrapper">
	<div class="tag-filter-container container">
		<div class="label-col">
			<span class="mono-label">Filter</span>
		</div>
		<div class="tags-col">
			<div class="tag-filter">
				<button
					class="tag"
					class:active={selectedCategories.length === 0}
					onclick={() => handleTagClick(null)}
					aria-pressed={selectedCategories.length === 0}
				>
					All
				</button>

				{#each categories as category (category)}
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
		</div>
	</div>
</div>

<style>
	.tag-filter-wrapper {
		padding-bottom: var(--spacing-lg);
	}

	.tag-filter-container {
		display: grid;
		grid-template-columns: var(--col-width-label) 1fr;
		gap: var(--spacing-lg);
		padding-top: var(--spacing-md);
		align-items: center;
	}

	.mono-label {
		font-family: var(--font-mono);
		font-size: var(--mono-size);
		font-weight: var(--mono-weight);
		text-transform: var(--mono-text-transform);
		color: var(--color-text-tertiary);
		letter-spacing: var(--mono-ls);
	}

	.tag-filter {
		display: flex;
		gap: var(--spacing-md);
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.tag {
		background: none;
		border: none;
		padding: 0;
		font-family: var(--font-mono);
		font-size: var(--mono-size);
		font-weight: var(--mono-weight);
		text-transform: var(--mono-text-transform);
		color: var(--color-text-tertiary);
		cursor: pointer;
		transition: color var(--transition-fast);
		letter-spacing: var(--mono-ls);
	}

	.tag:hover {
		color: var(--color-text-primary);
	}

	.tag.active {
		color: var(--color-text-primary);
		text-decoration: underline;
		text-underline-offset: var(--spacing-xxs);
	}

	@media (max-width: 768px) {
		.tag-filter {
			justify-content: flex-start;
		}

		.tag-filter-container {
			grid-template-columns: 1fr;
			gap: var(--spacing-xs);
		}

		.label-col {
			display: none;
		}

		.tag {
			font-size: var(--mono-size);
		}
	}
</style>
