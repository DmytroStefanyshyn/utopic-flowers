$(document).ready(function(){
	$('.slider').slick({
		appendArrows: $('.slider__arrows'),
		prevArrow: '<div class="slider__arrow slider__arrow_prev"></div>',
		nextArrow: '<div class="slider__arrow slider__arrow_next"></div>',
		dots: true
	})
})