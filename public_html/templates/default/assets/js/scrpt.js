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

console.log('script');