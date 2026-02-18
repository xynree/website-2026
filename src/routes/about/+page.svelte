<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { bio } from '$lib/content';

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>About - {bio.name}</title>
	<meta name="description" content="About {bio.name}" />
</svelte:head>

<div class="page">
	{#if mounted}
		<div class="about-grid container" in:fade={{ duration: 600, delay: 200, easing: cubicOut }}>
			<div class="label-col">
				<span class="mono-label">About</span>
			</div>
			<div class="content-col">
				<p class="bio-text">{bio.bio}</p>
			</div>
		</div>
	{/if}
</div>

<style>
	.page {
		padding-top: var(--spacing-lg);
	}

	.about-grid {
		display: grid;
		grid-template-columns: var(--col-width-label) 1fr;
		gap: var(--spacing-lg);
	}

	.mono-label {
		font-family: var(--font-mono);
		font-size: var(--mono-size);
		font-weight: var(--mono-weight);
		text-transform: var(--mono-text-transform);
		color: var(--color-text-tertiary);
		letter-spacing: var(--mono-ls);
	}

	.bio-text {
		max-width: 650px;
		font-size: var(--text-md);
		line-height: 1.6;
		color: var(--color-text-primary);
	}

	@media (max-width: 768px) {
		.about-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-sm);
		}
	}
</style>
