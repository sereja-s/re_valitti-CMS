	<article style="padding-top: 7.7rem; padding-bottom: 5rem;" class="about">
		<div class="about__container">
			<figure data-fls-dynamic=".about__header, 768, 1" class="about__picture">
				<picture>
					<img class="about__image" alt="Image" src="<?= PATH . TEMPLATE ?>/assets/img/about/о_нас-мин.jpg">
				</picture>
			</figure>
			<div class="about__body">
				<div class="about__header">
					<div data-fls-blockhead="" class="about__blockhead blockhead blockhead--left">
						<h1 class="blockhead__title">
							Центр красоты
							<span>Ре Валитти</span>
						</h1>
						<div class="blockhead__text">
							<p>
								В центре красоты Ре Валитти мы верим, что красота начинается изнутри, и наша команда профессионалов помогает вам раскрыть вашу естественную привлекательность и уверенность в себе.
							</p>
						</div>
					</div>
					<a href="#" style="font-weight: 700; font-size: 1.1rem" data-fls-scrollto=".content-about" data-fls-scrollto-top="150" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d">Прайс-лист</a>
					<a href="#" style="font-weight: 700; font-size: 1.1rem" data-fls-scrollto=".content-about" data-fls-scrollto-top="150" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d">+7(949)757-87-27</a>
				</div>
				<div class="about__main">
					<section data-fls-border="" class="about__content content-about">
						<div class="content-about__label">Доверьте красоту профессионалам
						</div>
						<h2 class="content-about__title">Салон красоты в Донецке на проспекте Ильича, 21 А</h2>
						<div class="content-about__text">
							<p>
								ReValitti — салон красоты в Донецке, где можно отдохнуть, преобразиться и почувствовать себя особенным.

								Мы предлагаем эффективные, безопасные и комфортные процедуры, которые возвращают сияние молодости и сохраняют красоту.
							</p>
							<p>
								Услуги, которые мы предоставляем:
							</p>
							<p>
								- косметология: плазмолифтинг, инъекционные процедуры, микротоковая терапия, карбокситерапия, биотоковая терапия, уход за лицом, аппаратная косметология лица, увеличение губ, фотоомоложение, мезотерапия, ювидерм, ботокс, лазерное омоложение, удаление сосудистой сетки, скрабирование, эпиляция, биоревитализация;<br>
								- эпиляция/депиляция: фотоэпиляция, лазерная эпиляция;<br>
								- парикмахерские услуги: лечение волос, вечерняя/свадебная укладка, окрашивание, укладка, уходовые процедуры для волос, локоны/керли, стрижка, тонирование, прикорневой объём, для детей, омбре.
							</p>
							<p>
								В салоне создан уютный интерьер, играет приятная музыка, а доброжелательные мастера помогают расслабиться и получить удовольствие от процедур.
							</p>
						</div>
					</section>

					<div class="item-review__author author-review">
						<picture>
							<img alt="Директор" class="author-review__avatar" src="<?= PATH . TEMPLATE ?>assets/img/about/Юлия Панченко-мин.jpg">
						</picture>
						<div class="author-review__body">
							<div class="author-review__name">Юлия Панченко</div>
							<div class="author-review__company">директор</div>
						</div>
					</div>

					<ul data-fls-socialblocks="" class="about__social social-blocks">
						<li class="social-blocks__item">
							<a href="#" target="_blank" data-fls-border="" class="social-blocks__link social-blocks__link--icon-s-inst">Instagram</a>
						</li>
						<li class="social-blocks__item">
							<a href="#" target="_blank" data-fls-border="" class="social-blocks__link social-blocks__link--icon-s-twit">Twitter</a>
						</li>
						<li class="social-blocks__item">
							<a data-fls-border="" href="#" target="_blank" class="social-blocks__link social-blocks__link--icon-s-fb">Facebook</a>
						</li>
						<li class="social-blocks__item">
							<a href="#" target="_blank" data-fls-border="" class="social-blocks__link social-blocks__link--icon-s-beh">Behance</a>
						</li>
						<li class="social-blocks__item">
							<a href="#" target="_blank" data-fls-border="" class="social-blocks__link social-blocks__link--icon-s-drb">Dribble</a>
						</li>
						<li class="social-blocks__item">
							<a href="#" target="_blank" data-fls-border="" class="social-blocks__link social-blocks__link--icon-s-pint">Pinterest</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</article>
	<!-- section-contacts -->
	<section class="section-contacts">
		<div class="container section-contacts__container">

			<div class="contacts">
				<div class="contacts__start map-wrapper">

					<div class="contacts__map" id="ymap" data-coordinates="48.000795, 37.827293"
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
						<p class="content-about__text"><?= $this->set['address'] ?></p>
					</div>
					<div class="contacts__item">
						<h3 class="content-about__title" style="padding-bottom: 0.7rem;">График работы</h3>
						<p class=content-about__text>Понедельник, среда, пятница, суббота<br> c 9:00 до 19:00</p>
					</div>
					<div class="contacts__item">
						<h3 class="content-about__title" style="padding-bottom: 0.7rem;">Телефон</h3>
						<p class="content-about__text">
							<a class="contacts__phone" href="tel:<?= preg_replace('/[^+\d]/', '', $this->set['phone']) ?>"><?= $this->set['phone'] ?></a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- /.section-contacts -->