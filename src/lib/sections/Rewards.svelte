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
</script>

<section id="guion" class="col fcenter wfull">
	<article class="col wfull">
		<header class="row jbetween acenter wfull">
			<aside class="row acenter">
				<h2>Tu saldo</h2>
				<span>{credit}</span>
			</aside>

			<button class="unset" on:click={() => addCredit(5)}>Añadir saldo</button>
		</header>

		<ul class="row jcenter wfull">
			<li class="col wfull">
				<button class="unset col fcenter" on:click={() => subCredit(5)}>
					<h3 class="row fcenter wfull">5</h3>
					<p>Desbloquea la gráfica merch</p>
				</button>
			</li>

			<li class="col wfull">
				<button class="unset col fcenter" on:click={() => subCredit(10)}>
					<h3 class="row fcenter wfull">10</h3>
					<p>Desbloquea el video teaser</p>
				</button>
			</li>

			<li class="col wfull">
				<button class="unset col fcenter" on:click={() => subCredit(20)}>
					<h3 class="row fcenter wfull">20</h3>
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
				background-color: #00e5cb;
				color: var(--base);
				border-radius: 0.5em;
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
