<!--
	Header Component
	Displays the user's name, bio, and social links
-->
<script lang="ts">
	interface SocialLink {
		name: string;
		url: string;
	}

	interface Props {
		name: string;
		bio: string;
		socialLinks: SocialLink[];
	}

	let { name, bio, socialLinks }: Props = $props();
</script>

<header class="header">
	<div class="container">
		<nav class="social-links" aria-label="Social media links">
			{#each socialLinks as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer" class="social-link">
					{link.name}
				</a>
			{/each}
		</nav>

		<h1 class="name">{name}</h1>
		<p class="bio">{bio}</p>
	</div>
</header>

<style>
	.header {
		padding: var(--spacing-xl) 0 var(--spacing-lg);
	}

	.name {
		margin-bottom: var(--spacing-md);
		font-family: var(--font-header);
	}

	.bio {
		max-width: 650px;
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
