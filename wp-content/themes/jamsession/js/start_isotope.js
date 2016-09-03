jQuery(document).ready( function($) {
	'use strict';
		
	jQuery(window).load( function() {
		jQuery('#post_content_container').imagesLoaded( function() {
			do_isotope();
			setTimeout(function() {
				do_isotope();
			}, 500);
			setTimeout(function() {
				do_isotope();
			}, 200);			
		});
	});

	$(window).on("debouncedresize", function( event ) {
		jQuery('#post_content_container').imagesLoaded( function() {
			do_isotope();
			do_isotope();
		});
	});	
	
})


function do_isotope()
{
	'use strict';
	var 	$container = jQuery('#post_content_container');
	var		$loader =  jQuery('#content_loader');
	var 	itemSelector;	
	var 	GUTTER_W = 3;	
	var contW = $container.width(), colNumber, colW;

	
	if (contW <= 480){
		colNumber = 1;
	} else if (contW <= 768) {
		colNumber = 2;
	} else if (contW <= 1199) {
		colNumber = 4;
	} else
	{
		colNumber = 5;
	}
	colW = Math.floor((contW - (colNumber - 1)*GUTTER_W)/colNumber ) ;

	
	if ( jQuery(".post_item").length > 0){
			jQuery('.post_item').css('width', colW);
	}
	
	if ( jQuery(".post_item_gallery").length > 0){
			jQuery('.post_item_gallery').css('width', colW);
	}

	
	if ( jQuery(".post_item").length > 0){
		jQuery('.post_item').show();
		itemSelector = '.post_item';
	}
	
	if ( jQuery(".post_item_gallery").length > 0){
		jQuery('.post_item_gallery').show();
		itemSelector = '.post_item_gallery';
	}

	$loader.hide();
	$container.css("min-height", "0");	
	
	$container.isotope({
		itemSelector: itemSelector,
		layoutMode : 'masonry',
		resizesContainer : false,
		isInitLayout: false,
		isResizeBound: false,
		animationEngine: 'best-available',
		animationOptions: {
			duration: 300,
			easing: 'linear',
			queue: false
		},		
		sortBy : 'original-order',
		masonry: {
			columnWidth: colW,
			gutter: GUTTER_W
		}
	});
}