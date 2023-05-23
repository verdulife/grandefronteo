<script>
	import Image from '$lib/components/Image.svelte';
	import PlayIcon from '$lib/icons/PlayIcon.svelte';

	export let story, prev, next;
	const { background, text } = story;
	$: pending = story.pending;
	let videoEl;

	const lineLength = Math.round(text.length / 4);

	function customSplit(str, maxLength) {
		if (str.length <= maxLength) return str;

		const words = str.split(' ');
		let lines = [];
		let line = '';
		let lineIndex = 0;

		words.forEach((w) => {
			if (line.length <= maxLength) {
				line += `${w} `;
				lines[lineIndex] = line;
			} else {
				lineIndex++;
				line = '';
			}
		});

		return lines;
	}

	const lines = customSplit(text, lineLength);

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
		<main class="col jend acenter full">
			{#each lines as line}
				<p>{line}</p>
			{/each}
		</main>

		<!-- <footer class="row acenter wfull">
			<small class="wfull">Enviar mensaje</small>
			<Image />
			<Image />
		</footer> -->

		<button class="prev unset row fcenter" on:click={prev}>
			<PlayIcon width="10px" height="10px" />
		</button>

		<button class="next unset row fcenter" on:click={next}>
			<PlayIcon width="10px" height="10px" />
		</button>
	{/if}
</article>

<style lang="postcss">
	article {
		position: relative;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;

		& * {
			z-index: 1;
		}
	}

	picture {
		position: absolute;
		border-radius: 1em;
		z-index: 0;
	}

	header {
		background: linear-gradient(to bottom, hsl(var(--base-900-hsl), 0.4), transparent);
		border-radius: 1em;
		padding: 1em;

		& h5 {
			color: var(--base);
		}
	}

	main {
		padding: 4em 3em;

		& p {
			background-color: var(--accent);
			text-align: center;
			color: white;
			padding: 0 0.25em;
		}
	}

	footer {
		background: linear-gradient(to top, hsl(var(--base-900-hsl), 0.4), transparent);
		border-radius: 1em;
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
			padding-left: 2px;
		}

		&.next {
			right: -40px;
			transform: translateY(-50%);
			padding-left: 2px;
		}
	}
</style>
