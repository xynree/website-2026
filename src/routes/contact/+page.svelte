<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { bio } from '$lib/content';

	let mounted = $state(false);
	onMount(() => (mounted = true));
</script>

<div class="page">
	{#if mounted}
		<div class="contact-grid container" in:fade={{ duration: 600, delay: 200, easing: cubicOut }}>
			<div class="label-col">
				<span class="mono-label">Say Hi ☺︎</span>
			</div>
			<div class="content-col">
				<div class="contact-methods">
					<ul class="contact-list">
						{#each bio.socialLinks as link (link.name)}
							<li>
								<span class="small-mono">{link.name}</span>
								<a href={link.url} target="_blank" rel="noopener noreferrer external" class="link">
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
		gap: var(--spacing-xl) var(--spacing-lg);
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
