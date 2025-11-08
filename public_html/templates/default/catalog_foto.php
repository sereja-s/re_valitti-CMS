<?php if (!empty($data)) :  ?>

	<section class="page__hero-services hero-services">

		<div class="hero-services__container">

			<div class="page__header-work header-work">
				<div data-fls-blockhead="" class="header-work__blockhead blockhead">
					<h2 class="selected-work__title"><?= $data['name'] ?></h2>
					<div class="blockhead__text">
						<?= $data['description'] ?>
					</div>
				</div>
			</div>

		</div>

		<div class="page__body-work body-work">
			<div class="body-work__container">

				<?php if (!empty($fotos)) : ?>

					<div class="body-work__works works">

						<?php foreach ($fotos as $item) : ?>

							<article data-fls-work="" class="item-work">
								<div class="item-work__picture">
									<picture>
										<img class="item-work__image" alt="<?= $item['name'] ?>" src="<?= $this->img($item['img']) ?>">
									</picture>
								</div>
								<div class="item-work__body">
									<h5 class="item-work__name">
										<div class="item-work__link-name"></div>
									</h5>
									<div class="item-work__category"><?= $item['name'] ?></div>
								</div>
							</article>

						<?php endforeach; ?>

					</div>

					<style>
						.pagination {
							-webkit-box-align: center;
							-ms-flex-align: center;
							align-items: center;
							display: -webkit-box;
							display: -ms-flexbox;
							display: flex;
							-webkit-box-pack: center;
							-ms-flex-pack: center;
							justify-content: center;
						}

						.pagination__wrapper {
							position: relative;
						}

						.pagination__btn {
							width: 40px;
							height: 40px;
							-webkit-box-align: center;
							-ms-flex-align: center;
							align-items: center;
							display: -webkit-box;
							display: -ms-flexbox;
							display: flex;
							-webkit-box-pack: center;
							-ms-flex-pack: center;
							justify-content: center;
						}

						.pagination__btn--prev {
							-webkit-transform: rotate(180deg);
							-ms-transform: rotate(180deg);
							transform: rotate(180deg);
						}

						.pagination__icon {
							width: 18px;
							height: 18px;
							fill: #ff6d00;
						}

						.pagination__list {
							-webkit-box-align: center;
							-ms-flex-align: center;
							align-items: center;
							display: -webkit-box;
							display: -ms-flexbox;
							display: flex;
						}

						.pagination__item {
							border: 1px solid #dddddd;
							border-right: 0;
						}

						.pagination__item:last-child {
							border-right: 1px solid #dddddd;
						}

						.pagination__item--active .pagination__link {
							background-color: #dddddd;
						}

						.pagination__link {
							width: 40px;
							height: 40px;
							-webkit-box-align: center;
							-ms-flex-align: center;
							align-items: center;
							display: -webkit-box;
							display: -ms-flexbox;
							display: flex;
							-webkit-box-pack: center;
							-ms-flex-pack: center;
							justify-content: center;
							color: #4b4b4b;
							font-size: 14px;
						}

						.pagination__link:hover {
							color: #ff6d00;
							text-decoration: underline;
						}

						.pagination__count>* {
							margin-right: 10px;
						}

						.pagination__count>*:last-child {
							margin-right: 0;
						}
					</style>

				<?php endif; ?>

			</div>
		</div>



		<?php if (!empty($pages)) : ?>

			<div class="pagination" style="padding-top: 35px;">

				<?php $this->pagination($pages) ?>

				<!-- <a class="pagination__btn pagination__btn--prev" href="#">
							<svg class="svg-sprite-icon icon-arrow pagination__icon">
								<use xlink:href="<?= PATH . TEMPLATE ?>assets/img/svg/symbol/sprite.svg#arrow"></use>
							</svg>
						</a>
						<ul class="pagination__list">
							<li class="pagination__item pagination__item--active"><a class="pagination__link" href="#">1</a></li>
							<li class="pagination__item"><a class="pagination__link" href="#">2</a></li>
							<li class="pagination__item"><a class="pagination__link" href="#">3</a></li>
							<li class="pagination__item"><a class="pagination__link" href="#">4</a></li>
							<li class="pagination__item"><a class="pagination__link" href="#">5</a></li>
						</ul>
						<a class="pagination__btn" href="#">
							<svg class="svg-sprite-icon icon-arrow pagination__icon">
								<use xlink:href="<?= PATH . TEMPLATE ?>assets/img/svg/symbol/sprite.svg#arrow"></use>
							</svg>
						</a> -->

			</div>

		<?php endif; ?>



	</section>

<?php endif; ?>