<script lang="ts">
	import '$lib/styles.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>xinrui chen</title>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<meta name="theme-color" content="#f3f3f2" />
	<meta name="description" content="xinrui chen -- art , comics, web dev, etc. in seattle, wa" />
</svelte:head>
{@render children()}
