<!-- карточка товара -->

<?php if (!empty($data)) : ?>

	<article class="products__item item-product">

		<div class="item-product__labels">

			<?php if (!empty($data['new'])) : ?>

				<div class="item-product__label item-product__label_new">New</div>

			<?php endif; ?>

			<?php if (!empty($data['discount'])) : ?>

				<div class="item-product__label item-product__label_sale">-<?= $data['discount'] ?>%</div>

			<?php endif; ?>

		</div>

		<div class="item-product__labels--prem">

			<?php if (!empty($data['hit'])) : ?>

				<div class="item-product__label--prem">Хит продаж</div>

			<?php endif; ?>

		</div>

		<a href="<?= $this->alias(['product' => $data['alias']]) ?>" class="item-product__image _ibg">
			<img src="<?= $this->img($data['img']) ?>" alt="<?= $data['name'] ?>">
		</a>
		<div class="item-product__body">
			<div class="item-product__content">
				<h3 class="item-product__title"><?= $data['name'] ?></h3>
				<div class="item-product__text"><?= $data['short_content'] ?></div>

				<div class="item-product__text">Цена:</div>

				<div class="item-product__prices">
					<div class="item-product__price"><?= $data['price'] ?> руб.</div>
					<div class="item-product__price item-product__price_old">розница</div>
				</div>
				<div class="item-product__prices">
					<div class="item-product__price"><?= $data['price_m_opt'] ?> руб.</div>
					<div class="item-product__price item-product__price_old">мелкий опт</div>
				</div>

			</div>
	</article>

<?php endif; ?>