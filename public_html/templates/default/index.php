<?php if (!empty($sales)) : ?>
	<section class="page__hero hero">
		<div class="hero__container">
			<div style="min-width: 0;" class="my-swiper">
				<!-- Slider main container -->
				<div class="swiper">
					<!-- Additional required wrapper -->
					<div class="swiper-wrapper">
						<!-- Slides -->
						<?php foreach ($sales as $item) : ?>
							<div class="swiper-slide">
								<div class="hero__picture">
									<picture><img class="hero__image" alt="<?= $item['name'] ?>" src="<?= $this->img($item['img']) ?>"></picture>
								</div>
								<div class="hero__blockhead blockhead">
									<h2 class="blockhead__title blockhead__title--size-160">
										<?= $item['name'] ?>
									</h2>
									<div class="blockhead__text blockhead__text--size-24">
										<?= $item['short_content'] ?>
									</div>
								</div>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
			</div>
		</div>
	</section>
<?php endif; ?>

<?php if (!empty($advantages)) : ?>

	<div class="page__clients clients">
		<ul class="clients__container">
			<?php foreach ($advantages as $item) : ?>
				<li class="clients__item">
					<img src="<?= $this->img($item['img']) ?>" alt="<?= $item['name'] ?>">
				</li>
			<?php endforeach; ?>
		</ul>
	</div>

<?php endif; ?>

<section class="page__selected-work selected-work">
	<div class="selected-work__container">
		<div class="selected-work__header">
			<h3 class="selected-work__title">
				Услуги центра красоты
				<span><?= $this->set['name'] ?></span>
			</h3>
		</div>
		<?php if (!empty($this->menu['catalog'])) : ?>
			<div class="selected-work__items works">
				<?php foreach ($this->menu['catalog'] as $item) : ?>
					<article data-fls-work="" class="item-work">
						<a href="<?= $this->alias(['catalog' => $item['alias']]) ?>" class="item-work__picture">
							<picture>
								<img class="item-work__image" alt="<?= $item['name'] ?>" src="<?= $this->img($item['img']) ?>">
							</picture>
						</a>
						<div class="item-work__body">
							<h5 class="item-work__name">
								<a href="<?= $this->alias(['catalog' => $item['alias']]) ?>" class="item-work__link-name"><?= $item['name'] ?></a>
							</h5>
							<!-- <a class="item-work__category" href="NaN"></a> -->
						</div>
					</article>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>
	</div>
</section>

<section class="social-blog">

	<div class="selected-work__container">
		<div data-fls-blockhead="" class="process__blockhead blockhead">
			<span class="blockhead__label"><?= $this->set['short_content'] ?></span>
			<h1 class="blockhead__title">
				Центр красоты в Донецке
				<span><?= $this->set['name'] ?></span>
			</h1>
			<div class="blockhead__text">
				<?= $this->set['description'] ?>
			</div>
			<a href="<?= $this->set['telegram_alias_price'] ?>" data-fls-button="" class="blockhead__button button button--icon button--lite button--icon-arrow button--arrow-ru">Прайс-лист</a>
		</div>

		<?php if (!empty($news)) : ?>

			<h3 class="selected-work__title selected-work__header">Мы в социальных сетях</h3>
			<div style="margin-top: 1.3rem;" class="page__skills skills">
				<div class="skills__container">
					<?php foreach ($news as $item) : ?>
						<article data-fls-skill="" class="skill">
							<h4 class="skill__title">
								<?= $item['name'] ?>
							</h4>
							<p class="skill__text">
								<?= $item['short_content'] ?>
							</p>
							<a href="<?= $item['external_alias'] ?>" data-fls-button="" class="button button--text button--icon-arrow button--arrow-ru">Подробнее<?= $item['social_alias'] ? ' в ' . $item['social_alias'] : ''  ?></a>
						</article>
					<?php endforeach; ?>
				</div>
			</div>

		<?php endif; ?>

	</div>
</section>