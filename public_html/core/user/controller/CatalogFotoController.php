<?php

namespace core\user\controller;

use core\base\exceptions\RouteException;

use core\admin\model\Model;
use core\base\controller\BaseController;


class CatalogFotoController extends BaseUser
{

	protected function inputData()
	{
		// Выпуск №120
		parent::inputData();

		$data = [];

		if (!empty($this->parameters['alias'])) {

			$data = $this->model->get('foto_categories', [
				'where' => ['alias' => $this->parameters['alias'], 'visible' => 1],
				'limit' => 1
			]);

			if (!$data) {
				throw new RouteException('Не найдены записи в таблице catalog по ссылке ' . $this->parameters['alias']);
			}


			$data = $data[0];
		}

		/* $where = ['visible' => 1];
		$where['parent_id'] = $data['id']; */

		$fotos = $this->model->get('fotos', [
			/* 'where' => $where, */
			'where' => ['visible' => 1, 'parent_id' => $data['id']],
			'order' => ['menu_position'],
			'pagination' => [
				'qty' => QTY_foto,
				'page' => $this->clearNum($_GET['page'] ?? 1) ?: 1
			]
		]);

		$pages = $this->model->getPagination();

		return compact('data', 'fotos', 'pages');
	}
}
