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
				Услуги салона красоты
				<span><?= $this->set['name'] ?></span>
			</h3>
			<!-- <a href="#" data-fls-button="" class="selected-work__button button button--text button--icon-arrow button--arrow-ru">See All</a> -->
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
			<a href="#" data-fls-button="" class="blockhead__button button button--icon button--lite button--icon-arrow button--arrow-ru">Прайс-лист</a>
		</div>

		<h3 class="selected-work__title selected-work__header">Мы в социальных сетях</h3>

		<div style="margin-top: 1.3rem;" class="page__skills skills">
			<div class="skills__container">
				<article data-fls-skill="" class="skill">
					<h4 class="skill__title">
						<a href="#" class="skill__link-title">Добро пожаловать в Re Valitti </a>
					</h4>
					<p class="skill__text">
						Мы создаём не просто образы — мы подчеркиваем индивидуальность, работаем с текстурой, чувствуем характер.
					</p>
					<a href="#" data-fls-button="" class="button button--text button--icon-arrow button--arrow-ru">Подробнее</a>
				</article>
				<article data-fls-skill="" class="skill">
					<h4 class="skill__title">
						<a href="#" class="skill__link-title">Первое впечатление — самое важное</a>
					</h4>
					<div class="skill__text">
						<p>В Re Valitti мы делаем так, чтобы с первой минуты вы чувствовали себя желанными и особенными. </p>
						<p>Доверьте свою красоту профессионалам! </p>
					</div>
					<a href="#" data-fls-button="" class="button button--text button--icon-arrow button--arrow-ru">Подробнее в Telegram</a>
				</article>
				<article data-fls-skill="" class="skill">
					<h4 class="skill__title">
						<a href="#" class="skill__link-title">Маникюр в Re Valitti</a>
					</h4>
					<p class="skill__text">
						200+ оттенков — от нюда до насыщенной классики от премиального бренда Luxio. Идеальная текстура, гипоаллергенный состав и блеск, который не тускнеет.
					</p>
					<a href="#" data-fls-button="" class="button button--text button--icon-arrow button--arrow-ru">Подробнее в ВК</a>
				</article>
			</div>
		</div>
	</div>
</section>