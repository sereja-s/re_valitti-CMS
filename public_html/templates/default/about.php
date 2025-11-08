	<article style="padding-top: 7.7rem; padding-bottom: 5rem;" class="about">
		<div class="about__container">
			<figure data-fls-dynamic=".about__header, 768, 1" class="about__picture">
				<picture>
					<img class="about__image" alt="<?= $about['name'] ?>" src="<?= $this->img($about['img']) ?>">
				</picture>
			</figure>
			<div class="about__body">
				<div class="about__header">
					<div data-fls-blockhead="" class="about__blockhead blockhead blockhead--left">
						<h1 class="blockhead__title">
							<?= $about['name'] ?>
						</h1>
						<div class="blockhead__text">
							<?= $about['short_content'] ?>
						</div>
					</div>

					<?= $this->telegramTelefon ?>

				</div>
				<div class="about__main">
					<section data-fls-border="" class="about__content content-about">
						<div class="content-about__label"><?= $about['sub_title'] ?>
						</div>
						<h2 class="content-about__title"><?= $about['title'] ?></h2>
						<div class="content-about__text">
							<?= $about['content'] ?>
						</div>
					</section>

					<div class="item-review__author author-review">
						<picture>
							<img alt="<?= $about['title'] ?>" class="author-review__avatar"
								src="<?= $this->img($about['foto_author_img']) ?>">
						</picture>
						<div class="author-review__body">
							<div class="author-review__name"><?= $about['author_name'] ?></div>
							<div class="author-review__company"><?= $about['about_author'] ?></div>
						</div>
					</div>

					<?php if (!empty($this->socials)) : ?>

						<ul data-fls-socialblocks="" class="about__social social-blocks">

							<?php foreach ($this->socials as $item) : ?>

								<li class="social-blocks__item">
									<a href="<?= $this->alias($item['external_alias']) ?>" data-fls-border="" class="social-blocks__link"><img style="max-width: 2rem;" src="<?= $this->img($item['img']) ?>" alt="<?= $this->set['name'] ?>"><?= $item['name'] ?></a>
								</li>

							<?php endforeach; ?>

						</ul>

					<?php endif; ?>

				</div>
			</div>
		</div>
	</article>
	<!-- section-contacts -->
	<section class="section-contacts">
		<div class="container section-contacts__container">

			<div class="contacts">
				<div class="contacts__start map-wrapper">

					<div class="contacts__map" id="ymap" data-coordinates="<?= $about['data_coordinates'] ?>"
						data-address="пр. Ильмча"></div>
					<p class="page-title sectoin-contacts__title">Для взамодействия с картой, кликните по ней<br>Снова сделать карту неподвижной - кликните в другом месте экрана</p>
				</div>
				<style>
					.map-wrapper:not(.is-active) * {
						pointer-events: none;
					}
				</style>
				<div class="contacts__end">
					<div class="contacts__item">
						<h3 class="content-about__title" style="padding-bottom: 0.7rem;">Адрес</h3>
						<div class="content-about__text"><?= $this->set['address'] ?></div>
					</div>
					<div class="contacts__item">
						<h3 class="content-about__title" style="padding-bottom: 0.7rem;">График работы</h3>
						<div class=content-about__text><?= $this->set['work_time'] ?></div>
					</div>
					<div class="contacts__item">
						<h3 class="content-about__title" style="padding-bottom: 0.7rem;">Телефон</h3>
						<div class="content-about__text">
							<a class="contacts__phone" href="tel:<?= preg_replace('/[^+\d]/', '', $this->set['phone']) ?>"><?= $this->set['phone'] ?></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- /.section-contacts -->