<script>
	import FollowView from '$lib/components/FollowView.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<main class="scroll">
	<FollowView>
		<Nav />
		<slot />
	</FollowView>
</main>

<style global lang="postcss">
	@import '../layout-classes/fonts/title.css';
	@import '../layout-classes/fonts/text.css';
	@import '../layout-classes/reset.css';
	@import '../layout-classes/all.css';

	main {
		background-color: #000;
	}
</style>
