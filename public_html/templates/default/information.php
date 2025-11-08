<?php if (!empty($data)) : ?>
	<article style="padding-top: 7.7rem; padding-bottom: 5rem;" class="about">
		<div class="about__container">
			<figure data-fls-dynamic=".about__header, 768, 1" class="about__picture">
				<picture>
					<img class="about__image" alt="<?= $data['img'] ?>" src="<?= $this->img($data['img']) ?>">
				</picture>
			</figure>
			<div class="about__body">
				<div class="about__header">
					<div data-fls-blockhead="" class="about__blockhead blockhead blockhead--left">
						<h1 class="blockhead__title">
							<?= $data['name'] ?>
						</h1>
						<div class="blockhead__text">
							<?= $data['description'] ?>
						</div>
					</div>
					<a href="#" style="font-weight: 700; font-size: 1.1rem" data-fls-scrollto=".content-about" data-fls-scrollto-top="150" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d">Прайс-лист</a>
					<a href="#" style="font-weight: 700; font-size: 1.1rem" data-fls-scrollto=".content-about" data-fls-scrollto-top="150" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d">+7(949)757-87-27</a>
				</div>
				<?php if (!empty($data['content'])) : ?>
					<div class="about__main">
						<section data-fls-border="" class="about__content content-about">
							<div class="content-about__text">
								<?= $data['content'] ?>
							</div>
						</section>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</article>
<?php endif; ?>