<script>
	import Welcome from '$lib/sections/Welcome.svelte';
	import Transmedia from '$lib/sections/Transmedia.svelte';
	import Resumiendo from '$lib/sections/Resumiendo.svelte';
	import Rewards from '$lib/sections/Rewards.svelte';
	import Tweet from '$lib/sections/Tweet.svelte';
	import { metadata } from '$lib/metadata';
	import Meta from '$lib/components/Meta.svelte';

	export let data;
	const { origin } = data;
</script>

<Meta {metadata} {origin} />

<Welcome />
<Transmedia />
<Resumiendo />
<Rewards />
<Tweet />
