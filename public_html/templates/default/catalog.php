<?php if (!empty($data)) :  ?>

	<article style="padding-top: 7.7rem;  padding-bottom: 5rem;" class="about">
		<div class="about__container">

			<figure data-fls-dynamic=".about__header, 768, 1" class="about__picture">
				<picture>

					<img class="about__image" alt="Image" src="<?= PATH . TEMPLATE ?>/assets/img/top-section/Бел-мин (6).svg">
				</picture>
			</figure>
			<div class="about__body">
				<div class="about__header">
					<div data-fls-blockhead="" class="about__blockhead blockhead blockhead--left">
						<h1 class="blockhead__title">
							<?= $data['name'] ?>
							<span></span>
						</h1>
						<div class="blockhead__text">
							<p>
								<?= $data['content'] ?>
							</p>
						</div>
					</div>
					<a href="#" style="font-weight: 700; font-size: 1.1rem; padding-right: 0.7rem" data-fls-scrollto=".content-about" data-fls-scrollto-top="150" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d">Прайс-лист</a>
					<a href="tel:<?= preg_replace('/[^+\d]/', '', $this->set['phone']) ?>" style="font-weight: 700; font-size: 1.1rem" data-fls-scrollto=".content-about" data-fls-scrollto-top="150" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d"><?= $this->set['phone'] ?></a>
				</div>
				<?php if (empty($goods)) : ?>

					<h2>Актуальные цены на услуги указаны в прайс-листе</h2>

				<?php else : ?>
					<div class="about__main">

						<section style="border-radius: 0.8rem;" data-fls-border="" class="about__awards awards-about">
							<p class="awards-about__title">Цена, руб.</p>
							<table class="awards-about__table">
								<?php foreach ($goods as $item) : ?>
									<tr class="awards-about__line">
										<td class="awards-about__label"><?= $item['name'] ?></td>
										<td style=" vertical-align:middle" class="awards-about__value"><?= $item['ot'] ? 'от ' : '' ?><span style="color:red; font-size: 1.5rem;"><?= $item['price'] ?></span> </td>
										<td><a href="<?= $this->alias(['product' => $item['alias']]) ?>" data-fls-scrollto=".content-about" data-fls-scrollto-top="150" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d"></a></td>
									</tr>
								<?php endforeach; ?>
								<!-- <tr class="awards-about__line">
									<td class="awards-about__label">Стрижка волос (стрижка+ укладка)</td>
									<td class="awards-about__value">от <span style="color:red; font-size: 1.5rem;">2500</span> руб.</td>
									<td><a href="#" data-fls-scrollto=".content-about" data-fls-scrollto-top="150" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d"></a></td>
								</tr>
								<tr class="awards-about__line">
									<td class="awards-about__label">Стрижка волос (стрижка+ укладка)</td>
									<td class="awards-about__value">от <span style="color:red; font-size: 1.5rem;">2500</span> руб.</td>
									<td><a href="#" data-fls-scrollto=".content-about" data-fls-scrollto-top="150" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d"></a></td>
								</tr>
								<tr class="awards-about__line">
									<td class="awards-about__label">Стрижка без препаратов (окрашивание/уход)</td>
									<td class="awards-about__value">от <span style="color:red; font-size: 1.5rem;">2500</span></td>
									<td><a href="#" data-fls-scrollto=".content-about" data-fls-scrollto-top="150" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d"></a></td>
								</tr>
								<tr class="awards-about__line">
									<td class="awards-about__label">Укладка повседневная (сталинг включен)</td>
									<td class="awards-about__value">от <span style="color:red; font-size: 1.5rem;">2500</span></td>
									<td><a href="#" data-fls-scrollto=".content-about" data-fls-scrollto-top="150" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d"></a></td>
								</tr>
								<tr class="awards-about__line">
									<td class="awards-about__label">Выпрямление волос щипцами/накрутка на щипцы (без мытья головы)</td>
									<td class="awards-about__value">от <span style="color:red; font-size: 1.3rem;">15000 / 2000</span> руб.</td>
									<td><a href="#" data-fls-scrollto=".content-about" data-fls-scrollto-top="150" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d"></a></td>
								</tr>
								<tr class="awards-about__line">
									<td class="awards-about__label">Стрижка без препаратов (окрашивание/уход)</td>
									<td class="awards-about__value">от <span style="color:red; font-size: 1.5rem;">2500</span></td>
									<td><a href="#" data-fls-scrollto=".content-about" data-fls-scrollto-top="150" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d"></a></td>
								</tr> -->
							</table>
						</section>
					</div>
				<?php endif; ?>
			</div>


		</div>
	</article>

<?php endif; ?>