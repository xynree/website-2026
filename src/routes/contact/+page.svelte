<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { bio } from '$lib/content';

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});

	// Filter for the actual social links only
	const contactLinks = bio.socialLinks.filter(link => 
		!['Work', 'About', 'Contact'].includes(link.name)
	);
</script>

<svelte:head>
	<title>Contact - {bio.name}</title>
	<meta name="description" content="Contact {bio.name}" />
</svelte:head>

<div class="page">
	{#if mounted}
		<div class="contact-methods" in:fade={{ duration: 600, delay: 200, easing: cubicOut }}>
			<ul class="contact-list">
				{#each contactLinks as link}
					<li>
						<span class="label">{link.name}</span>
						<a href={link.url} target="_blank" rel="noopener noreferrer" class="link">
							{link.url.replace('mailto:', '').replace('https://', '')}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	.page {
		padding-top: var(--spacing-lg);
	}

	.contact-methods {
		max-width: 600px;
	}

	.contact-list {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	.contact-list li {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.label {
		font-family: var(--font-header);
		text-transform: uppercase;
		font-size: 11px;
		letter-spacing: 0.05em;
		color: var(--color-text-tertiary);
	}

	.link {
		font-size: 1.125rem;
		color: var(--color-text-primary);
		text-decoration: none;
		transition: color var(--transition-fast);
		word-break: break-all;
	}

	.link:hover {
		color: var(--color-text-secondary);
	}
</style>
