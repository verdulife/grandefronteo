<script>
	import { scale } from 'svelte/transition';
	import StoriesCard from '$lib/components/StoriesCard.svelte';

	$: stories = [
		{
			background: 'mads.mp4',
			text: 'Los protagonistas no encuentran al dueño de la wallet. Por lo que deciden que sea él quien los encuentre a ellos.',
			pending: false
		},
		{
			background: 'well.mp4',
			text: 'Para ello, tratarán de hacerse virales en redes sociales para llamar su atención.',
			pending: true
		},
		{
			background: 'paquita.mp4',
			text: 'Durante el transcurso de su aventura, se irán topando con diferentes influencers, streamers y demás personas conocidas por el público, e intentarán hacer colaboraciones con ellos (cameos a lo Paquita Salas).',
			pending: true
		},
		{
			background: 'mind.mp4',
			text: 'Esas colaboraciones serán subidas en los canales reales de youtube, twitch, instagram, etc. Fusionando el mundo real con el ficticio de #grandefronteo',
			pending: true
		}
	];

	let slider;

	function prev() {
		const current = stories.find((s) => s.pending === false);
		const currIndex = stories.indexOf(current);

		if (stories[currIndex - 1]) {
			stories[currIndex].pending = true;
			stories[currIndex - 1].pending = false;
			slider.scrollBy({
				left: -100,
				behavior: 'smooth'
			});
		}
	}

	function next() {
		const current = stories.find((s) => s.pending === false);
		const currIndex = stories.indexOf(current);

		if (stories[currIndex + 1] !== undefined) {
			stories[currIndex].pending = true;

			stories[currIndex + 1].pending = false;
			slider.scrollBy({
				left: 100,
				behavior: 'smooth'
			});
		}
	}
</script>

<h2><b>RESUMIENDO</b></h2>

<ul bind:this={slider} class="scrollbar snap" horizontal>
	{#each stories as story}
		<li class="col" class:pending={story.pending}>
			<StoriesCard bind:story {next} {prev} />
		</li>
	{/each}
</ul>

<style lang="postcss">
	h2 {
		color: var(--base);
		font-size: 20vh;
		margin-bottom: -0.75em;
	}

	ul {
		min-height: 100vh;
		padding: 4em;

		& li {
			width: 400px;
			max-width: 100%;
			aspect-ratio: 9/16;
			margin: 0 2em 4em 2em;
			scroll-snap-align: center !important;
			transition: 250ms;

			&:first-of-type {
				margin-left: 50%;
			}

			&:last-of-type {
				margin-right: 50%;
			}

			&.pending {
				width: 200px;
				max-width: 65%;
				transform: translateY(150px);
			}
		}
	}
</style>
