<script>
	import { routes } from '$lib/stores';
	import Logo from '$lib/icons/Logo.svelte';
</script>

<nav class="row jbetween acenter wfull">
	<a href="/">
		<picture class="row fcenter">
			<Logo width="100%" />
		</picture>
	</a>

	<ul class="row">
		{#each $routes as { title, href, active }}
			<li class="row">
				<a class="row fcenter" class:active {href}>{title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	nav {
		position: fixed;
		top: 5%;
		left: 0;
		right: 0;
		max-width: var(--media-xl);
		margin: 0 auto;
		padding: 2em;
		z-index: 98;

		& picture {
			width: 150px;

			@media (--sm) {
				width: 100px;
			}
		}
	}

	ul {
		gap: 1em;

		@media (--sm) {
			display: none;
		}

		& a {
			position: relative;
			font-family: var(--font-title);
			border-radius: 0.5em;
			padding: 0.5em 1em;
			transition: 200ms;

			&:before {
				content: '';
				position: absolute;
				top: 0;
				right: -50%;
				display: flex;
				width: 100%;
				height: 100%;
				background-color: var(--accent);
				opacity: 0;
				z-index: -1;
				transition: 150ms;
			}

			&:hover:before,
			&.active:before {
				right: 0;
				opacity: 1;
				transform: rotate(-1deg);
			}
		}
	}
</style>
