function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}

});
const accordion = document.getElementsByClassName('accordion__item');
for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function () {
		this.classList.toggle('active')
	});
};

new Swiper('.reviews-slider-container', {
	slidesPerView: 3,
	slidesPerGrup: 1,
	// centeredSlides: true,
	speed: 1000,
	// autoplay: {
	// 	delay: 5000,
	// 	stopOnLastSlide: true,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		// dynamicBullets: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		991: {
			spaceBetween: 25,
			loop: true,
			loopedSlides: 0,
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 0,
			centeredSlides: false,
			loop: true,
			loopedSlides: 0,
		},
		300: {
			slidesPerView: 1,
			centeredSlides: true,
			loop: true,
			loopedSlides: 0,
			spaceBetween: 0,
		}
	},

});