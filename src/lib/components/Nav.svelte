<script>
	import { routes } from '$lib/stores';
	import Logo from '$lib/icons/Logo.svelte';
	import { onMount } from 'svelte';

	let scrolled = false;

	onMount(() => {
		const scroll = document.querySelector('.scrollbar');

		scroll.addEventListener('scroll', (e) => {
			const { scrollTop } = e.target;

			if (scrollTop > 100) scrolled = true;
			else scrolled = false;
		});
	});
</script>

<nav class="row fcenter wfull" class:scrolled>
	<main class="row jbetween acenter wfull">
		<a href="/">
			<picture class="row fcenter">
				<Logo width="100%" />
			</picture>
		</a>

		<ul class="row acenter">
			{#each $routes as { title, href, active }}
				<li class="row fcenter">
					<a class="row fcenter" {href}>{title}</a>
				</li>
			{/each}
		</ul>
	</main>
</nav>

<style lang="postcss">
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		padding: 2em;
		z-index: 98;
		transition: 150ms;

		& main {
			max-width: var(--media-xl);
		}

		& picture {
			width: 150px;

			@media (--sm) {
				width: 100px;
			}
		}
	}

	.scrolled {
		background-color: hsl(var(--base-900-hsl), 0.6);
		backdrop-filter: blur(10px);
		padding: 1em 2em;
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

			&:hover:before {
				right: 0;
				opacity: 1;
				transform: rotate(-1deg);
			}
		}
	}
</style>
