<script>
	let credit = 35;

	function addCredit(n) {
		credit += n;
		credit = credit >= 95 ? 95 : credit;
	}

	function subCredit(n) {
		credit -= n;
		credit = credit <= 0 ? 0 : credit;
	}

	function openMerch() {
		if (credit < 5) {
			alert('No tienes suficientes creditos. Añade más saldo');
			return;
		}

		const link = document.createElement('a');
		link.href = '/grande-fronteo_merch.pdf';
		link.target = '_blank';

		link.click();
		subCredit(5);
	}

	function openTeaser() {
		if (credit < 10) {
			alert('No tienes suficientes creditos. Añade más saldo');
			return;
		}

		const link = document.createElement('a');
		link.href = '/grande-fronteo_teaser.mp4';
		link.target = '_blank';

		link.click();
		subCredit(10);
	}

	function openPilot() {
		if (credit < 20) {
			alert('No tienes suficientes creditos. Añade más saldo');
			return;
		}

		const link = document.createElement('a');
		link.href = '/grande-fronteo_piloto.pdf';
		link.target = '_blank';

		link.click();
		subCredit(20);
	}
</script>

<section id="guion" class="col fcenter wfull">
	<article class="col wfull">
		<header class="row jbetween acenter wfull">
			<aside class="row acenter">
				<h2>Tu saldo</h2>
				<span class="row fcenter">
					<img width="20px" src="/coin.svg" alt="Saldo" />
					{credit}
				</span>
			</aside>

			<button class="unset" on:click={() => addCredit(5)}>+ saldo</button>
		</header>

		<ul class="row jcenter wfull">
			<li class="col wfull">
				<button class="unset col fcenter" on:click={openMerch}>
					<h3 class="col fcenter wfull">
						<img width="60px" height="60px" src="/merch.svg" alt="Descargar merch" />
						<span class="row fcenter">
							<img width="20px" src="/coin.svg" alt="Saldo" />
							5
						</span>
					</h3>
					<p>Desbloquear el merchandising</p>
				</button>
			</li>

			<li class="col wfull">
				<button class="unset col fcenter" on:click={openTeaser}>
					<h3 class="col fcenter wfull">
						<img width="60px" height="60px" src="/teaser.svg" alt="Descargar teaser" />
						<span class="row fcenter">
							<img width="20px" src="/coin.svg" alt="Saldo" />
							10
						</span>
					</h3>
					<p>Desbloquea el video teaser</p>
				</button>
			</li>

			<li class="col wfull">
				<button class="unset col fcenter" on:click={openPilot}>
					<h3 class="col fcenter wfull">
						<img width="60px" height="60px" src="/piloto.svg" alt="Descargar piloto" />
						<span class="row fcenter">
							<img width="20px" src="/coin.svg" alt="Saldo" />
							20
						</span>
					</h3>
					<p>Desbloquea el guión del piloto</p>
				</button>
			</li>
		</ul>
	</article>
</section>

<style lang="postcss">
	section {
		background-color: var(--base-100);
		padding: 4em 2em;
	}

	article {
		max-width: 600px;
		background-color: var(--base);
		border-radius: 1em;
	}

	header {
		border-bottom: 1px solid var(--base-200);
		padding: 2em;

		& aside {
			gap: 1em;
		}

		& span {
			cursor: pointer;
			gap: 0.25em;
			background-color: var(--base-200);
			border-radius: 0.5em;
			padding: 0.5em 1em;
		}
	}

	ul {
		gap: 1em;
		text-align: center;
		padding: 2em;

		& li {
			& button {
				gap: 0.5em;
			}

			& h3 {
				aspect-ratio: 1;
				gap: 0.25em;
				background-color: #00e5cb;
				color: var(--base);
				border-radius: 0.5em;

				& img {
					object-fit: contain;
				}

				& span {
					gap: 0.25em;
					color: var(--base);
					background-color: hsl(var(--base-600-hsl), 0.5);
					border-radius: 0.5em;
					padding: 2px 10px;
				}
			}

			&:first-of-type h3 {
				background-color: #8205b4;
			}

			&:last-of-type h3 {
				background-color: #ff6905;
			}

			& p {
				font-family: var(--font-base);
			}
		}
	}
</style>
