jQuery(document).ready( function($) {
			'use strict';
			
			var slideShow = $.parseJSON(jamsession_slideshow_images.images);
			
			$.supersized({
				// Functionality
				slide_interval          :   10000,		// Length between transitions
				transition              :   6, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
				transition_speed		:	300,		// Speed of transition
				image_protect			:   0,
				// Components	
				progress_bar			:	0,				// Timer for each slide											
				slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')	
				slides 					:  	slideShow	// Slideshow Images
			});
});