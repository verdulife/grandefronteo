<script>
	import Image from '$lib/components/Image.svelte';
	import PlayIcon from '$lib/icons/PlayIcon.svelte';

	export let story, prev, next;
	const { background, text } = story;
	$: pending = story.pending;
	let videoEl;

	$: if (!pending) videoEl?.play();
	else videoEl?.pause();
</script>

<article class="col full">
	<picture class="full">
		<video bind:this={videoEl} class="full" src={background} playsinline loop muted />
	</picture>

	<header class="row wfull">
		<h5>🤑 grandefronteo</h5>
	</header>

	{#if !pending}
		<main class="col jend full">
			<p>{text}</p>
		</main>

		<footer class="row acenter wfull">
			<small class="wfull">Enviar mensaje</small>
			<Image />
			<Image />
		</footer>

		<button class="prev unset row fcenter" on:click={prev}>
			<PlayIcon width="15px" height="15px" />
		</button>

		<button class="next unset row fcenter" on:click={next}>
			<PlayIcon width="15px" height="15px" />
		</button>
	{/if}
</article>

<style lang="postcss">
	article {
		position: relative;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		border-radius: 1em;

		& * {
			z-index: 1;
		}
	}

	picture {
		position: absolute;
		z-index: 0;
	}

	header {
		background: linear-gradient(to bottom, hsl(var(--base-900-hsl), 0.4), transparent);
		padding: 1em;

		& h5 {
			color: var(--base);
		}
	}

	main {
		padding: 4em 2em;

		& p {
			text-align: center;
			color: white;
			text-shadow: 0px 10px 0.02px var(--accent), 9.8px 2.1px 0.02px var(--accent),
				4.2px -9.1px 0.02px var(--accent), -8px -6px 0.02px var(--accent),
				-7.6px 6.5px 0.02px var(--accent), 4.8px 8.8px 0.02px var(--accent),
				9.6px -2.8px 0.02px var(--accent), -0.7px -10px 0.02px var(--accent),
				-9.9px -1.5px 0.02px var(--accent), -3.5px 9.4px 0.02px var(--accent),
				8.4px 5.4px 0.02px var(--accent), 7.1px -7px 0.02px var(--accent),
				-5.4px -8.4px 0.02px var(--accent), -9.4px 3.5px 0.02px var(--accent),
				1.4px 9.9px 0.02px var(--accent), 10px 0.8px 0.02px var(--accent),
				2.9px -9.6px 0.02px var(--accent), -8.7px -4.8px 0.02px var(--accent),
				-6.6px 7.5px 0.02px var(--accent), 5.9px 8px 0.02px var(--accent),
				9.1px -4.1px 0.02px var(--accent), -2.1px -9.8px 0.02px var(--accent),
				-10px -0.1px 0.02px var(--accent), -2.2px 9.8px 0.02px var(--accent),
				9.1px 4.2px 0.02px var(--accent), 6.1px -8px 0.02px var(--accent),
				-6.5px -7.6px 0.02px var(--accent), -8.8px 4.7px 0.02px var(--accent),
				2.7px 9.6px 0.02px var(--accent), 10px -0.6px 0.02px var(--accent),
				1.5px -9.9px 0.02px var(--accent), -9.3px -3.6px 0.02px var(--accent),
				-5.5px 8.4px 0.02px var(--accent), 7px 7.2px 0.02px var(--accent),
				8.5px -5.3px 0.02px var(--accent), -3.4px -9.4px 0.02px var(--accent),
				-9.9px 1.3px 0.02px var(--accent), -0.8px 10px 0.02px var(--accent),
				9.6px 2.9px 0.02px var(--accent), 4.9px -8.7px 0.02px var(--accent),
				-7.5px -6.7px 0.02px var(--accent), -8.1px 5.9px 0.02px var(--accent),
				4px 9.2px 0.02px var(--accent), 9.8px -2px 0.02px var(--accent),
				0.2px -10px 0.02px var(--accent), -9.7px -2.3px 0.02px var(--accent),
				-4.3px 9px 0.02px var(--accent), 7.9px 6.1px 0.02px var(--accent);
		}
	}

	footer {
		background: linear-gradient(to top, hsl(var(--base-900-hsl), 0.4), transparent);
		padding: 1em;

		& small {
			color: var(--base);
			border: 1px solid var(--base);
			border-radius: 4em;
			padding: 1em;
		}
	}

	button.unset {
		position: absolute;
		top: 50%;
		width: 30px;
		height: 30px;
		background-color: var(--base-400);
		border-radius: 50%;

		&.prev {
			left: -40px;
			transform: translateY(-50%) rotate(180deg);
		}

		&.next {
			right: -40px;
			transform: translateY(-50%);
		}
	}
</style>
