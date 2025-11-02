<?php if (!empty($data)) :  ?>

	<section class="page__hero-services hero-services">
		<div class="hero-services__container">
			<div data-fls-blockhead="" class="hero-services__blockhead blockhead">
				<h1 class="selected-work__title">
					<?= $data['name'] ?>
				</h1>
				<div class="blockhead__text blockhead__text--size-24">
					<p>
						<?= $data['short_content'] ?>
					</p>
				</div>
			</div>

		</div>
	</section>
	<!-- <div class="page__stats stats">
		<div class="stats__container">
			<article data-fls-watcher="" class="stats__item item-stats">
				<h5 class="item-stats__title">Clients</h5>
				<div class="item-stats__value">
					<span data-fls-digcounter="">150</span>
					+
				</div>
			</article>
			<article data-fls-watcher="" class="stats__item item-stats">
				<h5 class="item-stats__title">Clients</h5>
				<div class="item-stats__value">
					<span data-fls-digcounter="">300</span>
					+
				</div>
			</article>
			<article data-fls-watcher="" class="stats__item item-stats">
				<h5 class="item-stats__title">Clients</h5>
				<div class="item-stats__value">
					<span data-fls-digcounter="">100</span>
					%
				</div>
			</article>
			<article data-fls-watcher="" class="stats__item item-stats">
				<h5 class="item-stats__title">Clients</h5>
				<div class="item-stats__value">
					<span data-fls-digcounter="">100</span>
					K
				</div>
			</article>
		</div>
	</div> -->
	<section class="page__services services">
		<div class="services__container">
			<article data-fls-border="" class="services__item item-service">

				<!-- <h2 class="item-service__title">
					<span class="item-service__link-title">заголовок</span>
				</h2> -->

				<!-- <div class="item-service__label">Цена, руб.</div> -->

				<div href="#" class="item-service__link-image">
					<picture>
						<img class="item-service__image" alt="<?= $data['name'] ?>" src="<?= $this->img($data['img']) ?>">
					</picture>
				</div>
				<div class="item-service__label"><?= ($data['price'] || $data['content']) ? 'Цена, руб.' : '' ?></div>
				<div class="item-service__price"><?= $data['ot'] ? $data['content'] : $data['price'] ?></div>
				<div class="item-service__description"><?= $data['description'] ?></div>




			</article>

		</div>
	</section>

<?php endif; ?>