<!--
	Header Component
	Displays the user's name, bio, and social links
-->
<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	interface SocialLink {
		name: string;
		url: string;
	}

	interface Props {
		name: string;
		socialLinks: SocialLink[];
	}

	let { name, socialLinks }: Props = $props();
	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<header class="header">
	<div class="container">
		{#if mounted}
			<nav 
				class="social-links" 
				aria-label="Social media links"
				in:fade={{ duration: 600, delay: 0 }}
			>
				{#each socialLinks as link}
					{#if ['Work', 'About', 'Contact'].includes(link.name)}
						{#if link.url.startsWith('/')}
							<a href={link.url} class="social-link">
								{link.name}
							</a>
						{:else}
							<a href={link.url} target="_blank" rel="noopener noreferrer" class="social-link">
								{link.name}
							</a>
						{/if}
					{/if}
				{/each}
			</nav>

			<h1 
				class="name"
				in:fade={{ duration: 600, delay: 100, easing: cubicOut }}
			>
				{name}
			</h1>
		{/if}
	</div>
</header>




<style>
	.header {
		padding: var(--spacing-xl) 0 var(--spacing-lg);
	}

	.name {
		margin-bottom: var(--spacing-md);
		font-family: var(--font-header);
		text-transform: uppercase;
	}

	nav {
		margin-bottom: var(--spacing-lg);
	}

	.social-links {
		display: flex;
		gap: var(--spacing-xl);
		flex-wrap: wrap;
	}

	.social-link {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.social-link:hover {
		color: var(--color-text-tertiary);
	}

	@media (max-width: 768px) {
		.header {
			padding: var(--spacing-lg) 0 var(--spacing-lg);
		}

		.social-links {
			gap: var(--spacing-sm);
		}
	}
</style>
