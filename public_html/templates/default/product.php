<?php if (!empty($data)) :  ?>

	<section class="page__hero-services hero-services">
		<div class="hero__container">
			<div data-fls-blockhead="" class="hero-services__blockhead blockhead">
				<h1 class="selected-work__title">
					<?= $data['name'] ?>
				</h1>
				<div style="text-align:start; text-wrap:wrap;" class="blockhead__text blockhead__text--size-24">
					<p>
						<?= $data['short_content'] ?>
					</p>
				</div>
			</div>

		</div>
	</section>

	<section class="page__services services">
		<div class="services__container">
			<article data-fls-border="" class="services__item item-service">

				<!-- <h2 class="item-service__title">
					<span class="item-service__link-title">заголовок</span>
				</h2> -->

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