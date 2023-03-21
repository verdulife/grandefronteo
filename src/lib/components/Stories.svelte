<script>
	import StoriesCard from '$lib/components/StoriesCard.svelte';

	const stories = [
		{
			background: 'mads.gif',
			text: 'Los protagonistas no encuentran al dueño de la wallet. Por lo que deciden que sea él quien los encuentre a ellos.'
		},
		{
			background: 'glasses.gif',
			text: 'Los protagonistas no encuentran al dueño de la wallet. Por lo que deciden que sea él quien los encuentre a ellos.'
		},
		{
			background: 'hello.gif',
			text: 'Los protagonistas no encuentran al dueño de la wallet. Por lo que deciden que sea él quien los encuentre a ellos.'
		},
		{
			background: 'mind.gif',
			text: 'Los protagonistas no encuentran al dueño de la wallet. Por lo que deciden que sea él quien los encuentre a ellos.'
		}
	];
</script>

<h2><b>RESUMINEDO</b></h2>

<ul class="scrollbar" horizontal>
	{#each stories as story}
		<li>
			<StoriesCard {story} />
		</li>
	{/each}
</ul>

<style>
	h2 {
		color: var(--base);
		font-size: 20vh;
		margin-bottom: -0.75em;
	}

	ul {
		padding: 4em;
	}
</style>
