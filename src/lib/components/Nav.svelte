<script>
	import { routes } from '$lib/stores';
	import PlayIcon from '$lib/icons/PlayIcon.svelte';
	import NextIcon from '$lib/icons/NextIcon.svelte';
</script>

<nav class="col fcenter">
	<ul class="row jbetween wfull">
		{#each $routes as { title, href, active }}
			<li class="row">
				<a class:active {href}>{title}</a>
			</li>
		{/each}
	</ul>

	<progress class="wfull" value="10" max="100" />

	<div class="row wfull">
		<div class="icon play">
			<PlayIcon width="20" height="20" fill="#fff" />
		</div>
		<div class="icon play">
			<NextIcon width="20" height="20" fill="#fff" />
		</div>
	</div>
</nav>

<style lang="postcss">
	nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 90%;
		margin: 0 auto;
		padding: 2em;
		z-index: 98;
		opacity: 0;
	}

	ul {
		padding: 1em;
	}

	a {
		color: var(--c-neutral-900);
		font-weight: bold;
		text-transform: uppercase;
		border-radius: 0.5em;
		padding: 0.5em 1em;
		transition: 200ms;

		&:hover {
			background-color: var(--c-neutral-200);
		}
	}

	.icon {
		padding: 1em;
	}

	.active {
		position: relative;
		background-color: var(--c-neutral-100);
		color: var(--c-accent);

		&::before {
			content: '';
			position: absolute;
			bottom: -4px;
			left: 50%;
			transform: translateX(-50%) rotate(45deg);
			display: flex;
			width: 8px;
			height: 8px;
			background-color: var(--c-neutral-100);
		}
	}
</style>
