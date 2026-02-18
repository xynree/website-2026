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
		<div in:fade={{ duration: 600, delay: 200, easing: cubicOut }}>
			<p class="bio-text">{bio.bio}</p>
		</div>
	{/if}
</div>

<style>
	.page {
		padding-top: var(--spacing-lg);
	}

	.bio-text {
		max-width: 650px;
		font-size: 1.125rem;
		line-height: 1.6;
		color: var(--color-text-primary);
	}

	@media (max-width: 768px) {
		.bio-text {
			font-size: 1rem;
		}
	}
</style>
