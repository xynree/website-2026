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
	const contactLinks = bio.socialLinks.filter(
		(link) => !['Work', 'About', 'Contact'].includes(link.name)
	);
</script>

<div class="page">
	{#if mounted}
		<div class="contact-grid container" in:fade={{ duration: 600, delay: 200, easing: cubicOut }}>
			<div class="label-col">
				<span class="mono-label">Contact</span>
			</div>
			<div class="content-col">
				<div class="contact-methods">
					<ul class="contact-list">
						{#each contactLinks as link}
							<li>
								<span class="small-mono">{link.name}</span>
								<a href={link.url} target="_blank" rel="noopener noreferrer" class="link">
									{link.url.replace('mailto:', '').replace('https://', '')}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.page {
		padding-top: var(--spacing-lg);
	}

	.contact-grid {
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
		gap: var(--spacing-xxs);
	}

	.small-mono {
		font-family: var(--font-mono);
		font-size: var(--mono-size);
		font-weight: var(--mono-weight);
		text-transform: var(--mono-text-transform);
		letter-spacing: var(--mono-ls);
		color: var(--color-text-tertiary);
	}


	.link {
		font-size: var(--text-md);
		color: var(--color-text-primary);
		text-decoration: none;
		word-break: break-all;
	}

	@media (max-width: 768px) {
		.contact-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-sm);
		}
	}
</style>

