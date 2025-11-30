</main>

<footer data-fls-footer="" class="footer">
	<div class="footer__container">
		<div class="footer__body body-footer">
			<div class="body-footer__content content-footer">

				<a href="<?= $this->alias() ?>">
					<img src="<?= $this->img($this->set['img']) ?>" alt="<?= $this->set['name'] ?>" class="content-footer__logo">
				</a>

				<?php if (!empty($this->socials)) : ?>

					<ul data-fls-social="" class="content-footer__social social social--text">

						<?php foreach ($this->socials as $item) : ?>

							<li class="social__item">
								<div class="my-social">
									<a href="<?= $this->alias($item['external_alias']) ?>" class="social__link"><img style="max-width: 3rem;" src="<?= $this->img($item['img']) ?>" alt="<?= $this->set['name'] ?>"><?= $item['name'] ?></a>
								</div>

							</li>

						<?php endforeach; ?>

					</ul>

				<?php endif; ?>

			</div>
			<div data-fls-spollers="500" class="body-footer__menus">
				<div class="body-footer__menu">

					<?php if (!empty($this->menu['catalog'])) : ?>

						<h5 class="body-footer__title">УСЛУГИ</h5>
						<ul class="body-footer__list">

							<?php foreach ($this->menu['catalog'] as $item) : ?>

								<li class="body-footer__item">
									<a href="<?= $this->alias(['catalog' => $item['alias']]) ?>" class="body-footer__link"><?= $item['name'] ?></a>
								</li>

							<?php endforeach; ?>

						</ul>

					<?php endif; ?>

				</div>
				<div class="body-footer__menu">
					<h5 class="body-footer__title">Контакты</h5>
					<ul class="body-footer__list">
						<li class="body-footer__item">
							<a href="tel:<?= preg_replace('/[^+\d]/', '', $this->set['phone']) ?>" class="body-footer__link"><?= $this->set['phone'] ?></a>
						</li>
						<li class="body-footer__item">
							<a href="mailto:<?= $this->set['email'] ?>" class="body-footer__link"><?= $this->set['email'] ?></a>
						</li>
						<li class="body-footer__item" style="padding: 1rem 0;">
							<a href="<?= $this->set['telegram_alias'] ?>" data-fls-button="" class="body-footer__button button button--icon button--lite button--icon-arrow button--arrow-ru">Связаться через Телеграм</a>
						</li>
					</ul>
				</div>
				<div class="body-footer__menu">
					<h5 class="body-footer__title">Адрес</h5>
					<ul class="body-footer__list">
						<li class="body-footer__item">
							<p class="body-footer__link"><?= $this->set['address'] ?></p>
						</li>
					</ul>
				</div>
				<div class="body-footer__menu">
					<h5 class="body-footer__title">График работы</h5>
					<ul class="body-footer__list">
						<li class="body-footer__item">
							<div class="body-footer__link"><?= $this->set['work_time'] ?></div>
						</li>
					</ul>
				</div>
				<div class="body-footer__menu">

					<?php if (!empty($this->menu['information'])) : ?>

						<h5 class="body-footer__title">Информация</h5>
						<ul class="body-footer__list">
							<?php foreach ($this->menu['information'] as $item) : ?>
								<li class="body-footer__item">
									<a class="body-footer__link" href="<?= $this->alias(['information' => $item['alias']]) ?>">
										<?= $item['name'] ?>
									</a>
								</li>
							<?php endforeach; ?>
						</ul>

					<?php endif; ?>

				</div>

			</div>
		</div>
		<div class=" footer__bottom bottom-footer">
			<div class="bottom-footer__copy">Данный сайт носит исключительно информационный характер и ни при каких обстоятельствах не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ.</div>
			<div class="bottom-footer__copy">© <?= date('Y') ?></div>
			<!-- <a href="#" data-fls-scrollto="main" data-fls-button="" class="bottom-footer__button button button--text button--text-big button--text-rev button--icon-arrow"></a> -->
			<a href="<?= $this->set['external_alias'] ?>" class="bottom-footer__button button"> Сделано в САЙТ ПОСТРОЕН</a>
		</div>
	</div>
</footer>
</div>

<script>
	var ForJS = {};
	/* укажем для описания полного пути к маркеру(картинки-лого) на карте */
	/* Остальное описано в main.js  */

	ForJS.imgMap = '<?= $this->img($this->set['map_img']) ?>';
</script>

<?php $this->getScripts() ?>

</body>

</html>