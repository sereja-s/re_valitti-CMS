<div style="text-align: center; padding-block: 1.7rem;">
	<a href="<?= $this->set['telegram_alias_price'] ?>" style="font-weight: 700; font-size: 1.1rem; padding-right: 0.7rem; padding-bottom: 0.7rem" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d">Прайс-лист</a>
	<a href="tel:<?= preg_replace('/[^+\d]/', '', $this->set['phone']) ?>" style="font-weight: 700; font-size: 1.1rem" data-fls-button="" class="about__button button button--text button--text-big button--icon-arrow button--arrow-d"><?= $this->set['phone'] ?></a>
</div>