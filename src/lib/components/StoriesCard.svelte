<script>
	import Image from '$lib/components/Image.svelte';

	export let story;
	const { background, text, top } = story;
</script>

<article class="col" style="background-image: url({background})">
	<header class="row wfull">
		<h5>🤑 grandefronteo</h5>
	</header>

	<main class="col jend full">
		<p>{text}</p>
	</main>

	<footer class="row acenter wfull">
		<small class="wfull">Enviar mensaje</small>
		<Image />
		<Image />
	</footer>
</article>

<style lang="postcss">
	article {
		width: 500px;
		max-width: 80%;
		aspect-ratio: 9/16;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		border-radius: 1em;
		overflow: hidden;
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
</style>
