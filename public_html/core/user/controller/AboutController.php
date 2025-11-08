<?php

namespace core\user\controller;

use core\admin\model\Model;
use core\base\controller\BaseController;


class AboutController extends BaseUser
{

	protected function inputData()
	{
		// Выпуск №120
		parent::inputData();

		$about = $this->model->get('about', [
			'order' => ['id'],
			'limit' => 1
		]);

		// укажежем, что если что то пришло в свойство: $about, то сохраним в нём только нулевой элемент массива, который пришёл (первый по очереди)
		$about && $about = $about[0];

		return compact('about');
	}
}
