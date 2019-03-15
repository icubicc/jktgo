/* Walker Style File
 * This scripts cover CSS limitation
 */

jQuery(document).ready(function($) {

	// hover for touchscreen
	$('.hover').bind('touchstart', function() {
		$(this).toggleClass('hovering');
	});

	$('.switch-current').click(function() {
		$(this).unbind('mouseenter mouseleave');
	})

	// search toggle
	$('#search-toggle-all').change(function(){
		$('.search-filters').removeClass('has-filters');
		$('.search-filter').velocity('slideUp', 200);
	});

	$('#search-toggle-villas').change(function(){
		$('.search-filters').addClass('has-filters');
		$('.search-filter').velocity('slideUp', 100);
		$('.villas-filter').velocity('slideDown', 100);
	});

	$('#search-toggle-fd').change(function(){
		$('.search-filters').addClass('has-filters');
		$('.search-filter').velocity('slideUp', 100);
		$('.fd-filter').velocity('slideDown', 100);
	});

	$('#search-toggle-activities').change(function(){
		$('.search-filters').addClass('has-filters');
		$('.search-filter').velocity('slideUp', 100);
		$('.activities-filter').velocity('slideDown', 100);
	});

	$('#search-toggle-events').change(function(){
		$('.search-filters').addClass('has-filters');
		$('.search-filter').velocity('slideUp', 100);
		$('.events-filter').velocity('slideDown', 100);
	});

	$('#search-toggle-market').change(function(){
		$('.search-filters').addClass('has-filters');
		$('.search-filter').velocity('slideUp', 100);
		$('.market-filter').velocity('slideDown', 100);
	});

	// featured section hover
	$('#featured-section').find('li').mouseenter(function() {
		$('#featured-section').find('li').removeClass('current');
		$(this).addClass('current');
	});

	// close floating ad
	$('#ad-floating-close').on('click', function(){
		$('#ad-floating').addClass('hidden');
		return false;
	});

	// tabbing
    $('ul.tab-links').find('a').on('click', function(e) {
        var linkID = $(this).attr('href').replace('#', '');

        $('ul.tab-links').find('li').removeClass('current');
        $('.tab-content.current').removeClass('current');

        $(this).parent('li').addClass('current');
        $('#' + linkID).addClass('current');

        e.preventDefault();
    });

	// #BEN 08.18
	// search toggle
	$('.search-box').on('click', function() {
		$(this).addClass('is-toggled');
	});

	// equalling heights
	var equalheight = function(container){
		var currentTallest = 0,
		currentRowStart = 0,
		currentDiv,
		rowDivs = [],
		$el,
		topPosition = 0;
		$(container).each(function() {

			$el = $(this);
			$($el).css('min-height', '0');
			topPosition = $el.position().top;

			if (currentRowStart !== topPosition) {
				for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					rowDivs[currentDiv].css('min-height', currentTallest);
				}
				rowDivs.length = 0;
				currentRowStart = topPosition;
				currentTallest = $el.outerHeight();
				rowDivs.push($el);
			} else {
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.outerHeight()) ? ($el.outerHeight()) : (currentTallest);
			}

			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].css('min-height', currentTallest);
			}
		});
	};

	$('.post-card').imagesLoaded(function() {
		equalheight('.post-card > .inner');
	});

	var postCategoryNav = function() {
		var $el = $('.js-post-category').find('.post-category-list'),
			$items = $el.find('.items'),
			elHeight = $el.outerHeight(),
			itemsHeight = $items.outerHeight();

		function addClass() {
			if (elHeight < itemsHeight) {
				$el.addClass('is-toggleable');
			} else {
				$el.removeClass('is-toggleable');
			}
		}

		addClass();

		$(window).on('resize', function() {
			itemsHeight = $items.outerHeight();
			addClass();
		});
	}

	postCategoryNav();

	$(window).on('resize', function() {
		equalheight('.post-card > .inner');
	});

});
