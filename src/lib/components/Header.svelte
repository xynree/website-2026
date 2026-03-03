<script lang="ts">
	import { page } from '$app/stores';
	import { bio } from '$lib/content';
	import type { SocialLink } from '$lib/types';

	let {
		name,
		socialLinks
	}: {
		name: string;
		socialLinks: SocialLink[];
	} = $props();
</script>

<header class="header">
	<div class="header-inner container">
		<nav class="nav-section" aria-label="Primary navigation">
			<ul class="nav-list mono-text">
				{#each socialLinks as link (link.name)}
					<li>
						<a
							href={link.url}
							class="nav-link"
							class:active={$page.url.pathname === link.url ||
								(link.url === '/' && $page.url.pathname.startsWith('/projects/'))}
						>
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="name-section">
			<h1 class="name">
				<a href="/">{name}</a>
			</h1>
			<div class="about-section">
				{bio.bio}
			</div>
		</div>
	</div>
</header>

<style>
	.header {
		margin-top: var(--spacing-lg);
		margin-bottom: var(--spacing-md);
	}

	.header-inner {
		display: grid;
		grid-template-columns: var(--col-width-label) 1fr;
		gap: var(--spacing-sm);
		align-items: start;
		padding: var(--spacing-xl) 0;
	}

	.nav-list {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
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

	.nav-link:hover,
	.nav-link.active {
		color: var(--color-text-primary);
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

	.about-section {
		max-width: 600px;
		margin-top: var(--spacing-lg);
		font-size: var(--text-base);
		color: var(--color-text-secondary);
		line-height: 1.5;
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
