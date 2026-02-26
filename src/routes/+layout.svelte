<script lang="ts">
	import { bio, headerLinks } from '$lib/content';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

<Header name={bio.name} socialLinks={headerLinks} />

<main class="site-main">
	{@render children()}
</main>
