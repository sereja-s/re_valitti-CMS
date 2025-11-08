<?php

namespace core\user\controller;

use core\admin\model\Model;
use core\base\controller\BaseController;


class InformationController extends BaseUser
{

	protected function inputData()
	{
		// Выпуск №120
		parent::inputData();

		$data = [];

		if (!empty($this->menu['information'])) {

			foreach ($this->menu['information'] as $item) {

				if ($item['alias'] === ($this->parameters['alias'])) {

					$data['name'] = $item['name'];
					$data['img'] = $item['img'];
					$data['description'] = $item['description'];
					$data['content'] = $item['content'];
				}
			}
		}

		return compact('data');
	}
}
