/* Walker Scripts File
 * This file will also prepend style.js when minified by Codekit
 */

// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// responsive navigation
var navigation = responsiveNav("#main-nav");

jQuery(document).ready(function($) {

	// initialize RoyalSlider
	$('.royalSlider').css('display', 'block');
	$('.slider').royalSlider({
		arrowsNavHideOnTouch: true,
		autoScaleSlider: true,
		autoScaleSliderWidth: 1024,
		autoScaleSliderHeight: 576,
		loop: true,
		slidesSpacing: 0,
		autoPlay: {
			delay: 4000,
    		enabled: true,
    		pauseOnHover: true,
			stopAtAction: false
    	},
		block: {
			moveEffect: 'bottom',
			moveOffset: 24,
			speed: 300
		}
	});

	$(".seller-carousel").royalSlider({
		arrowsNav: true,
		arrowsNavAutoHide: false,
		slidesSpacing: 16,
    	loop: true,
        visibleNearby: {
            enabled: true,
			breakpoint: 560,
			breakpointCenterArea: 1,
			center: true,
            centerArea: 0.333333333
        }
    });

	// selecter
	$('.selecter').selecter({
		cover: true
	});

	// wookmark
	// $('.blog-section').imagesLoaded(function(){
	// 	var $window = $(window);
	// 	var viewportWidth = $window.width();
	// 	var wookmarked = $('.blog-section .post');
	// 	var options = {
	// 	    autoResize: true,
	// 	    container: $('.blog-section > .inner'),
	// 		flexibleWidth: '100%',
	// 	    offset: 0
	// 	};
	//
	// 	if(viewportWidth >= 480) {
	// 		options.flexibleWidth = '50%';
	// 	}
	//
	// 	wookmarked.wookmark(options);
	//
    //     $window.resize(function() {
	// 		var viewportWidth = $window.width();
	//
	// 		if(viewportWidth >= 480) {
	// 			options.flexibleWidth = '50%';
	// 		}
	// 		else {
	// 			options.flexibleWidth = '100%';
	// 		}
	//
	// 		wookmarked.wookmark(options);
	// 	});
	//
	// });

	// magnific: gallery
	$('.gallery-link').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: 'title'
		}
	});

	// magnific: login
	$('.modal-link').magnificPopup({
		type: 'inline',
		closeBtnInside: true,
		fixedBgPos: true,
		mainClass: 'mfp-zoom',
		preloader: false,
		removalDelay: 300
	});

	// magnific: autopop
	// $(window).on('load', function() {
	// 	$.magnificPopup.open({
	// 		items: {
	// 			src: '#popup-wtf'
	// 		},
	// 		type: 'inline',
	// 		mainClass: 'mfp-zoom',
	// 		removalDelay: 300
	// 	});
	// });

});
