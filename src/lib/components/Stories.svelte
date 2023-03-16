<script>
	import StoriesCard from '$lib/components/StoriesCard.svelte';

	const stories = [
		{
			background: 'instagram.jpg',
			text: 'Los protagonistas no encuentran al dueño de la wallet. Por lo que deciden que sea él quien los encuentre a ellos.',
			position: 'top'
		},
		{
			background: 'instagram.jpg',
			text: 'Los protagonistas no encuentran al dueño de la wallet. Por lo que deciden que sea él quien los encuentre a ellos.',
			position: 'top'
		},
		{
			background: 'instagram.jpg',
			text: 'Los protagonistas no encuentran al dueño de la wallet. Por lo que deciden que sea él quien los encuentre a ellos.',
			position: 'bottom'
		},
		{
			background: 'instagram.jpg',
			text: 'Los protagonistas no encuentran al dueño de la wallet. Por lo que deciden que sea él quien los encuentre a ellos.',
			position: 'bottom'
		}
	];
</script>

<ul class="scrollbar" horizontal>
	{#each stories as story}
		<li>
			<StoriesCard {story} />
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 4em;
	}
</style>
