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
			<h1 class="name">
				<a href="/">{name}</a>
			</h1>
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
		gap: 8px;
		margin-top: 1px;
	}

	.mono-text {
		font-family: var(--font-mono);
		font-size: var(--mono-size);
		font-weight: var(--mono-weight);
		text-transform: var(--mono-text-transform);
		letter-spacing: var(--mono-ls);
	}

	.nav-link {
		color: var(--color-text-tertiary);
		transition: color var(--transition-fast);
	}

	.name {
		font-size: var(--text-3xl);
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
			font-size: var(--text-2xl);
		}
	}
</style>

