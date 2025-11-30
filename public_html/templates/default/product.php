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
				<div class="content-about__text"><?= $data['description'] ?></div>

				<div style="text-align: center;">
					<div style="font-size: 1.25rem;">Подробнее о предоставляемых услугах и цены в разделе</div><br>
					<a href="<?= $this->alias(['catalog' => $data['catalog']['catalog_alias']]) ?>" style="font-weight: 700; font-size: 1.1rem; line-height: 1.3;" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d"><?= $data['catalog']['catalog_name'] ?></a>
				</div>

				<div style="font-size: 1.375rem;" class="content-about__text"><span style="color: darkorange;"><?= $data['name'] ?> в <?= $this->set['name'] ?>.</span> Каждое прикосновение — с вниманием к деталям и уважением к вашей индивидуальности.</div>

				<div style="font-size: 1.375rem;" class="content-about__text">Ждём вас по адресу <?= $this->set['address'] ?></div>

				<?= $this->telegramTelefon ?>

			</article>

		</div>
	</section>

<?php endif; ?>