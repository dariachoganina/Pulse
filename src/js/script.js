// $(document).ready(function () {
// 	$('.carousel__inner').slick({
// 		speed: 1200,
// 		adaptiveHeight: true,
// 		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
// 		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
// 		responsive: [
// 			{
// 				breakpoint: 992,
// 				settings: {
// 					dots: true,
// 					arrows: false
// 				}
// 			}
// 		]
// 	});
// });

const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: false,
	autoHeight: true,
	responsive: {
		640: {
			edgePadding: 20,
			gutter: 20,
			items: 1
		},
	}
});
document.querySelector('.prev').onclick = function () {
	slider.goTo('prev');
};
document.querySelector('.next').onclick = function () {
	slider.goTo('next');
};
