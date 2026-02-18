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
	<div class="header-inner container">
		<nav class="nav-section" aria-label="Primary navigation">
			<ul class="nav-list mono-text">
				{#each socialLinks as link}
					{#if ['Work', 'About', 'Contact'].includes(link.name)}
						<li>
							<a href={link.url} class="nav-link">
								{link.name}
							</a>
						</li>
					{/if}
				{/each}
			</ul>
		</nav>

		<div class="name-section">
			<h1 class="name">{name}</h1>
		</div>
	</div>
</header>

<style>
	.header {
		margin-top: var(--spacing-xl);
		margin-bottom: var(--spacing-2xl);
	}

	.header-inner {
		display: grid;
		grid-template-columns: var(--col-width-label) 1fr;
		gap: var(--spacing-lg);
		align-items: start;
		padding: var(--spacing-xl) var(--spacing-lg);
	}

	.nav-list {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xxs);
		margin-top: var(--spacing-xs); /* Aligns with the massive header text's cap height roughly */
	}

	.mono-text {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		text-transform: uppercase;
		letter-spacing: var(--ls-wider);
	}

	.nav-link {
		color: var(--color-text-tertiary);
		transition: color var(--transition-fast);
	}

	.nav-link:hover {
		color: var(--color-text-primary);
	}

	.name {
		font-size: var(--text-2xl);
		font-weight: var(--weight-heavy);
		margin: 0;
		line-height: 0.85;
		color: var(--color-text-primary);
		letter-spacing: var(--ls-tighter);
		text-transform: uppercase;
	}

	@media (max-width: 768px) {
		.header-inner {
			grid-template-columns: 1fr;
			gap: var(--spacing-md);
			padding: var(--spacing-lg) var(--spacing-md);
		}

		.nav-list {
			flex-direction: row;
			gap: var(--spacing-md);
			margin-top: 0;
		}

		.name {
			font-size: var(--text-xl);
		}
	}
</style>

