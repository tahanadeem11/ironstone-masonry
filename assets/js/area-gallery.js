// Area pages: project gallery carousel
$(function () {
	var gallery = $('.area-gallery');
	if (!gallery.length) return;
	gallery.owlCarousel({
		loop: true,
		margin: 20,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		smartSpeed: 600,
		navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
		responsive: {
			0: { items: 1 },
			576: { items: 2 },
			992: { items: 3 }
		}
	});
});
