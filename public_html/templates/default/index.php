<section class="page__hero hero">
	<div class="hero__container">
		<div style="min-width: 0;" class="my-swiper">
			<!-- Slider main container -->
			<div class="swiper">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					<!-- Slides -->
					<div class="swiper-slide">
						<div class="hero__picture">
							<picture><img class="hero__image" alt="Hero Image" src="<?= PATH . TEMPLATE ?>/assets/img/top-section/Бел-мин (2).svg"></picture>
						</div>
						<div class="hero__blockhead blockhead">
							<h2 class="blockhead__title blockhead__title--size-160">
								Салон красоты в Донецке
							</h2>
							<div class="blockhead__text blockhead__text--size-24">
								<p>
									Красота начинается здесь.<br>В Re Valitti мы подчёркиваем индивидуальность, чтобы с первой минуты вы чувствовали себя желанными и особенными. Доверьте свою красоту профессионалам!
								</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="hero__picture">
							<picture><img class="hero__image" alt="Hero Image" src="<?= PATH . TEMPLATE ?>/assets/img/top-section/Бел-мин (3).svg"></picture>
						</div>
						<div class="hero__blockhead blockhead">
							<h2 class="blockhead__title blockhead__title--size-160">
								Центр красоты
							</h2>
							<div class="blockhead__text blockhead__text--size-24">
								<p>
									Красота начинается здесь.<br>В Re Valitti мы подчёркиваем индивидуальность, чтобы с первой минуты вы чувствовали себя желанными и особенными. Доверьте свою красоту профессионалам!
								</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="hero__picture">
							<picture><img class="hero__image" alt="Hero Image" src="<?= PATH . TEMPLATE ?>/assets/img/top-section/корчневый-мин (4).svg"></picture>
						</div>
						<div class="hero__blockhead blockhead">
							<h2 class="blockhead__title blockhead__title--size-160">
								Центр красоты 2
							</h2>
							<div class="blockhead__text blockhead__text--size-24">
								<p>
									Красота начинается здесь.<br>В Re Valitti мы подчёркиваем индивидуальность, чтобы с первой минуты вы чувствовали себя желанными и особенными. Доверьте свою красоту профессионалам!
								</p>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
	</div>
</section>

<div class="page__clients clients">
	<ul class="clients__container">
		<li class="clients__item">
			<img src="<?= PATH . TEMPLATE ?>/assets/img/clients/tokio inkarami-мин.jpg" alt="Image">
		</li>
		<li class="clients__item">
			<img src="<?= PATH . TEMPLATE ?>/assets/img/clients/olaplex-мин.jpg" alt="Image">
		</li>
		<li class="clients__item">
			<img src="<?= PATH . TEMPLATE ?>/assets/img/clients/luxio-мин.jpg" alt="Image">
		</li>
		<li class="clients__item">
			<img src="<?= PATH . TEMPLATE ?>/assets/img/clients/peach peel-мин.jpg" alt="Image">
		</li>
		<li class="clients__item">
			<img src="<?= PATH . TEMPLATE ?>/assets/img/clients/kydra-мин.jpg" alt="Image">
		</li>
		<li class="clients__item">
			<img src="<?= PATH . TEMPLATE ?>/assets/img/clients/hidropeptide-мин.jpg" alt="Image">
		</li>
		<li class="clients__item">
			<img src="<?= PATH . TEMPLATE ?>/assets/img/clients/cdn-мин.jpg" alt="Image">
		</li>
		<li class="clients__item">
			<img src="<?= PATH . TEMPLATE ?>/assets/img/clients/янеа-мин.jpg" alt="Image">
		</li>
		<li class="clients__item">
			<img src="<?= PATH . TEMPLATE ?>/assets/img/clients/suda-мин.jpg" alt="Image">
		</li>
		<li class="clients__item">
			<img src="<?= PATH . TEMPLATE ?>/assets/img/clients/loreal-мин.jpg" alt="Image">
		</li>
	</ul>
</div>

<section class="page__selected-work selected-work">
	<div class="selected-work__container">
		<div class="selected-work__header">
			<h3 class="selected-work__title">
				Услуги салона красоты
				<span>Ре Валитти</span>
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
			<span class="blockhead__label">Доверьте свою красоту профессионалам</span>
			<h1 class="blockhead__title">
				Салон красоты в Донецке
				<span>Ре Валитти</span>
			</h1>
			<div class="blockhead__text">
				<p>
					Мы обновили наш прайс-лист, чтобы вам было удобно и легко планировать свой визит в центр красоты ReValitti🐾

					Здесь вы найдете цены на основные услуги.

					Мы всегда используем только профессиональные материалы (Luxio, CND, Kydra, L’Oréal) и конечно стерильный инструмент.

					Ваша красота и здоровье — наш приоритет
				</p>
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