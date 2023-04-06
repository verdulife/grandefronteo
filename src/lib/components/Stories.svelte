<script>
	import StoriesCard from '$lib/components/StoriesCard.svelte';

	$: stories = [
		{
			background: 'mads.mp4',
			text: 'Los protagonistas no encuentran al dueño de la wallet. Por lo que deciden que sea él quien los encuentre a ellos.',
			pending: false
		},
		{
			background: 'well.mp4',
			text: 'Los protagonistas no encuentran al dueño de la wallet. Por lo que deciden que sea él quien los encuentre a ellos.',
			pending: true
		},
		{
			background: 'paquita.mp4',
			text: 'Los protagonistas no encuentran al dueño de la wallet. Por lo que deciden que sea él quien los encuentre a ellos.',
			pending: true
		},
		{
			background: 'mind.mp4',
			text: 'Los protagonistas no encuentran al dueño de la wallet. Por lo que deciden que sea él quien los encuentre a ellos.',
			pending: true
		}
	];
	let slider;

	function prev() {
		const current = stories.find((s) => s.pending === false);
		const currIndex = stories.indexOf(current);

		stories[currIndex].pending = true;

		if (stories[currIndex - 1]) {
			stories[currIndex - 1].pending = false;
			slider.scrollBy({
				left: -1,
				behavior: 'smooth'
			});
		}
	}

	function next() {
		const current = stories.find((s) => s.pending === false);
		const currIndex = stories.indexOf(current);

		stories[currIndex].pending = true;

		if (stories[currIndex + 1]) {
			stories[currIndex + 1].pending = false;
			slider.scrollBy({
				left: 1,
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
		padding: 4em;

		& li {
			width: 350px;
			max-width: 80%;
			aspect-ratio: 9/16;
			margin: 0 2em;
			scroll-snap-align: center !important;

			&:first-of-type {
				margin-left: 38%;
			}

			&.pending {
				width: 200px;
				max-width: 65%;
				transform: translateY(150px);
			}
		}
	}
</style>
