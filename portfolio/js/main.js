$(function () {

	$('.logo, .menu__link, .header__link').on('click', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body, html').animate({ scrollTop: top + -50 }, 1000);
	});

	$(document).ready(function () {
		if ($(document).scrollTop() >= 10) {
			$('.menu').addClass('menu--fixed');
		} else {
			$('.menu').removeClass('menu--fixed');
		}
	});

	$(window).scroll(function () {
		if ($(document).scrollTop() >= 10) {
			$('.menu').addClass('menu--fixed');
		} else {
			$('.menu').removeClass('menu--fixed');
		}
	});

	var mixer = mixitup('.portfolio__content', {
		animation: {
			duration: 500
		}
	});

	$('.menu__button').on('click', function () {
		$('.menu__list').toggleClass('menu__list--open');
		$(this).toggleClass('menu__button--active');
		$('body').toggleClass('remove-scroll');
	});

	$('.menu__link').on('click', function () {
		$('.menu__list').removeClass('menu__list--open');
		$('.menu__button').removeClass('menu__button--active');
		$('body').removeClass('remove-scroll');
	});

	function menuClose() {
		if ($(window).width() > 1200) {
			$('.menu__list').removeClass('menu__list--open');
			$('.menu__button').removeClass('menu__button--active');
		}
	}
	$(window).resize(function () {
		menuClose();
	});
});