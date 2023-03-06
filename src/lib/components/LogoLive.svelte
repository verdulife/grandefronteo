<script>
	import { onMount } from 'svelte';

	export let size = 8;

	const grande = ['✌', '👌', '💸', '🦄', '🐥', '👊', '⭐', '☘️', '⏱️', '📸', '🎖️', '🎃'];
	const fronteo = ['🤑', '😱', '🙃', '🤣', '😎', '🤬', '🤮', '🥳', '💩', '👻', '☠️', '🙊', '🐽'];

	$: grandeInd = 0;
	$: fronteoInd = 0;

	setInterval(() => {
		if (grandeInd >= grande.length - 1) grandeInd = 0;
		else grandeInd++;

		setTimeout(() => {
			if (fronteoInd >= fronteo.length - 1) fronteoInd = 0;
			else fronteoInd++;
		}, 250);
	}, 500);

	onMount(() => {
		document.querySelector('span').style.setProperty('--size', size + 'vw');
	});
</script>

<span class="col">
	<div class="row">
		<b class="start">#</b>
		<b>G</b>
		<b>R</b>
		<strong>{grande[grandeInd]}</strong>
		<b class="inverted">N</b>
		<b>D</b>
		<b>E</b>
	</div>
	<div class="row">
		<b>F</b>
		<b>R</b>
		<strong>{fronteo[fronteoInd]}</strong>
		<b class="inverted">N</b>
		<b>T</b>
		<b>E</b>
		<b>O</b>
	</div>
</span>

<style lang="postcss">
	span {
		--size: 8vw;

		color: var(--base);
		font-family: var(--font-title);
		font-size: var(--size);

		& div:last-of-type {
			margin-top: calc(var(--size) / 1.6 - ((var(--size) / 1.6) * 2));
			letter-spacing: calc(var(--size) / 2 / 10);
		}

		& b,
		& strong {
			display: inline-flex;
			justify-content: center;
			z-index: 1;
		}

		& strong {
			width: 1.3ch;
			z-index: 0;
		}

		& .start {
			color: var(--accent);
		}

		& .inverted {
			transform: rotateY(180deg);
		}
	}
</style>
