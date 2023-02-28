<script>
	const grande = ['✌', '👌', '💸', '🦄', '🐥', '👊', '⭐', '☘️', '⏱️', '📸', '🎖️', '🎃'];
	const fronteo = ['🤑', '😱', '🙃', '🤣', '😎', '🤬', '🤮', '🥳', '💩', '👻', '☠️', '🙊', '🐽'];

	$: ind = 0;

	setInterval(() => {
		if (ind >= grande.length - 1) ind = 0;
		else ind++;
	}, 500);
</script>

<span class="col">
	<div><b>#</b>GR{grande[ind]}NDE</div>
	<div>FR{fronteo[ind]}NTEO</div>
</span>

<style lang="postcss">
	span {
		font-family: var(--font-title);
		font-size: 8vw;
		line-height: 1;

		& div:first-of-type {
			letter-spacing: 2px;
		}

		& b {
			color: var(--accent);
		}
	}
</style>
