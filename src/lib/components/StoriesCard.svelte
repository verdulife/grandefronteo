<script>
	import Image from '$lib/components/Image.svelte';

	export let story;
	const { background, text, position } = story;
</script>

<article class="col" style="background-image: url({background})">
	<header class="row wfull">
		<h3>🤑 grandefronteo</h3>
	</header>

	<main class="col wfull">
		<p>{text}</p>
	</main>

	<footer class="row acenter wfull">
		<small>Enviar mensaje</small>
		<Image />
		<Image />
	</footer>
</article>

<style lang="postcss">
	article {
		width: 500px;
		max-width: 80%;
		aspect-ratio: 9/16;
		background-color: var(--accent);
		border-radius: 1em;
		overflow: hidden;
	}
</style>
