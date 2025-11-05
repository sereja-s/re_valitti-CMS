"use strict";

if (document.querySelector('.swiper')) {
	new Swiper('.swiper', {
		slidesPerView: 1,		
		grabCursor: true,
		loop: true,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		speed: 5000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		
	});
}

/* myLib start - набор повторяющихся элементов для повторного использования */
; (function () {

	// создаём глобальную переменную (пустой объект)
	window.myLib = {};


	// допишем в него повторяющиеся элементы и функции:

	window.myLib.body = document.querySelector('body');


	window.myLib.closestAttr = function (item, attr) {
		var node = item;

		while (node) {
			var attrValue = node.getAttribute(attr);
			if (attrValue) {
				return attrValue;
			}

			node = node.parentElement;
		}

		return null;
	};


	/**
	 * функция находит ближайший элемент у которого класс соответствует параметру переданному на вход 2-ым: className
	 * @param {*} item 
	 * @param {*} className 
	 * @returns 
	 */
	window.myLib.closestItemByClass = function (item, className) {
		var node = item;

		while (node) {
			if (node.classList.contains(className)) {
				return node;
			}

			node = node.parentElement;
		}

		return null;
	};

		
})();
/* myLib end */

/* map start - подключение карты с реализацией её загрузки только когда доскроллили до секции: section-contacts */

// Для взамодействия с картой кликните по ней Чтобы карту отключить, кликните в другом месте экрана
const mapWrapperElement = document.querySelector('.map-wrapper');

if (mapWrapperElement) {

	document.addEventListener('click', (e) => { mapWrapperElement.classList.toggle('is-active', e.target === mapWrapperElement) });

	(function () {
	var sectionContacts = document.querySelector('.section-contacts');

	var ymapInit = function () {
		if (typeof ymaps === 'undefined') {
			return;
		}

		ymaps.ready(function () {

			var ymap = document.querySelector('.contacts__map');
			var coordinates = ymap.getAttribute('data-coordinates');
			var address = ymap.getAttribute('data-address');

			var myMap = new ymaps.Map('ymap', {
				center: coordinates.split(','),
				zoom: 18
			}, {
				searchControlProvider: 'yandex#search'
			}),

				myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					balloonContent: address
				}, {
					iconLayout: 'default#image',
					iconImageHref: ForJS.imgMap,
					iconImageSize: [169, 78],
					/* iconImageOffset: [25, -95] */
				});

			myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable('scrollZoom');
		});
	};


	var ymapLoad = function () {
		var script = document.createElement('script');
		script.src = 'https://api-maps.yandex.ru/2.1/?lang=RU';
		myLib.body.appendChild(script);
		script.addEventListener('load', ymapInit);
	};


	var checkYmapInit = function () {
		var sectionContactsTop = sectionContacts.getBoundingClientRect().top;
		var scrollTop = window.pageYOffset;
		var sectionContactsOffsetTop = scrollTop + sectionContactsTop;

		if (scrollTop + window.innerHeight > sectionContactsOffsetTop) {
			ymapLoad();
			window.removeEventListener('scroll', checkYmapInit);
		}
	};

	window.addEventListener('scroll', checkYmapInit);
	checkYmapInit();

	})();
	
}

/* map end */

console.log('script');