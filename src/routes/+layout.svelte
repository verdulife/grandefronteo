<script>
	import '$lib/startcss/startcss.css';
	import FollowView from '$lib/components/FollowView.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<FollowView>
	<slot />
</FollowView>
