<!doctype html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">


	<title>Cалон красоты в Донецке Ре Валитти</title>


	<?php $this->getStyles() ?>
</head>

<body>
	<div class="wrapper">
		<!-- @format -->
		<header data-fls-header="" class="header">
			<div class="header__container">
				<div class="header__body">
					<!-- <img style="max-width: 5rem;" src="<?= PATH . TEMPLATE ?>/assets/img/top-section/Бел-мин (6).svg" alt="Image" class="header__logo"> -->
					<a href="/" class="header__logo" style="color:rgb(150, 43, 5); font-size: 1.5em; font-weight: 700;">Ре Валитти</a>
					<div class="header__menu menu">
						<nav class="menu__body">
							<ul class="menu__list">

								<li class="menu__item">
									<a href="#" class="menu__link">Услуги</a>
									<span class="menu__arrow arrow"></span>
									<ul class="sub-menu__list">
										<li>
											<a href="" class="sub-menu__link">Парикмахер-стилист для леди</a>
										</li>
										<li>
											<a href="" class="sub-menu__link">Парикмахер-стилист для джентельмена</a>
										</li>
										<li>
											<a href="" class="sub-menu__link">Парикмахер-стилист для детей</a>
										</li>
										<li>
											<a href="" class="sub-menu__link">Ногтевой сервис</a>
										</li>
										<li>
											<a href="" class="sub-menu__link">Услуги бровиста</a>
										</li>
									</ul>
								</li>
								<li class="menu__item">
									<a href="work.html" class="menu__link">О нас</a>
								</li>
								<li class="menu__item">
									<a href="services.html" class="menu__link">Контакты</a>
								</li>
								<li class="menu__item">
									<a href="#" class="menu__link">Фотогалерея</a>
									<span class="menu__arrow arrow"></span>
									<ul class="sub-menu__list">
										<li>
											<a href="" class="sub-menu__link">Женские причёски</a>
										</li>
										<li>
											<a href="" class="sub-menu__link">Мужские стрижки</a>
										</li>
										<li>
											<a href="" class="sub-menu__link">Детские стрижки</a>
										</li>
										<li>
											<a href="" class="sub-menu__link">Ноготочки</a>
										</li>
										<li>
											<a href="" class="sub-menu__link">Бровки</a>
										</li>
									</ul>
								</li>

							</ul>
						</nav>
					</div>


					<style>
						.menu__body a.parent {
							margin: 0 30px 0 0;
						}

						.menu__body li {
							position: relative;
						}

						.sub-menu__list a:hover {
							text-decoration: underline;
						}

						.sub-menu__list {
							display: none;
							min-width: 220px;
							position: absolute;
							left: 0;
							top: 20px;
							box-shadow: 0 8px 6px -6px #999;
							/* background-color: rgba(218, 197, 167, 0.05);
								backdrop-filter: blur(1.875rem); */
							padding: 20px 0 0 0;
						}

						.sub-menu__list>li {
							background-color: rgba(255, 135, 70);
							backdrop-filter: blur(1.875rem);

						}

						.sub-menu__link {
							display: inline-block;
							color: white;
							font-size: 1.2rem;
							font-weight: 500;
							padding: 5px 10px;
						}

						.arrow {
							display: none;
							position: absolute;
							right: 0;
							top: 12px;
							width: 0;
							height: 0;
							border-top: 10px solid rgba(255, 135, 70);
							border-right: 10px solid transparent;
							border-left: 10px solid transparent;
						}

						.arrow.active {
							transform: rotate(180deg);
						}

						body.mouse .menu__list>li:hover .sub-menu__list {
							display: block;
						}

						body.touch .sub-menu__list.open {
							display: block;
						}

						body.touch .arrow {
							display: block;
						}

						@media (max-width: 767px) {
							.sub-menu__list {
								position: relative;
								left: 0;
								top: 0;
							}
						}
					</style>



					<a href="contacts" data-fls-button="" class="header__button button button--lite">Позвонить</a>
					<button type="button" data-fls-menu="" class="icon-menu">
						<span></span>
					</button>
				</div>
			</div>
		</header>
		<main class="page page--home">