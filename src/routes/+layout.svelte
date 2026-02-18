<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { bio } from '$lib/content';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header name={bio.name} socialLinks={bio.socialLinks} />

<div class="container">
	{@render children()}
</div>