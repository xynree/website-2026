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
		<h1 class="name">{name}</h1>
		<p class="bio">{bio}</p>

		<nav class="social-links" aria-label="Social media links">
			{#each socialLinks as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer" class="social-link">
					{link.name}
				</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.header {
		padding: var(--spacing-xl) 0 var(--spacing-lg);
		border-bottom: 1px solid var(--color-border);
	}

	.name {
		margin-bottom: var(--spacing-md);
	}

	.bio {
		max-width: 650px;
		margin-bottom: var(--spacing-lg);
	}

	.social-links {
		display: flex;
		gap: var(--spacing-md);
		flex-wrap: wrap;
	}

	.social-link {
		font-size: 0.875rem;
		text-decoration: underline;
		transition: color var(--transition-fast);
	}

	.social-link:hover {
		color: var(--color-text-secondary);
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
