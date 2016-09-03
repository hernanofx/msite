jQuery(document).ready( function($) {
	'use strict'; 

	if ( $("#menu_navigation").length <= 0){
		return;
	}
	
	 // initial top offset of the navigation 
    var sticky_navigation_offset_top = $('#menu_navigation').offset().top; //+ $('#menu_navigation').height();
    var firstTime = 1;
	
	var JAMSESSION_SWP_sticky_menu_cleanup_style = function(){
		$('#menu_navigation').removeAttr('style');
		$('#logo').removeAttr('style');
		
		$('#main_menu').find('ul').find('li').find('a').removeAttr('style');
		$('#main_menu').find('ul').find('ul').find('li').find('a').removeAttr('style');
		$('.search_blog').removeAttr('style');
		$('.menu').find('ul').find('li').find('a').removeAttr('style');
		$('.menu').find('ul').find('ul').find('li').find('a').removeAttr('style');
		$('#search_blog').find('span').removeAttr('style');
	};	
	
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function(){
		
		//do nothing on mobile menu
		if ( $('#mobile_menu').css("visibility") == "visible") {
		    JAMSESSION_SWP_sticky_menu_cleanup_style();
			firstTime = 1;
			
			return;
		}
	
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top
         
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top) {
			/* STICKY MENU */
			if (firstTime == 1) {
				$('#menu_navigation').hide();
				if ( $('#logo').css("display") != "table") {
					$('#logo').hide();
					
					
					if ( $('#logo').css('line-height').replace('px', '') > 75)
					{
					
						$('#logo').css({ 'line-height': '75px'});
						$('#main_menu').find('ul').find('li').find('a').css({ 'line-height': '75px'});
						$('.menu').find('ul').find('li').find('a').css({ 'line-height': '75px'});
						
						$('#search_blog').css({ 'height': '75px'});
						$('#search_blog').find('span').css({ 'margin-top': '22px'});
						
						$('#main_menu').find('ul').find('ul').find('li').find('a').removeAttr('style');
						$('#main_menu').find('ul').find('ul').find('li').find('a').css({ 'line-height': '40px'});
						
						$('.menu').find('ul').find('ul').find('li').find('a').removeAttr('style');
						$('.menu').find('ul').find('ul').find('li').find('a').css({ 'line-height': '40px'});

					} 
				}
			}
			
            $('#menu_navigation').css({ 'position': 'fixed', 'top':0});

			$('#menu_navigation').css('background-color' , $('.menu').find('ul').find('ul').css('background-color'));
			
			if ( $('#logo').css("display") != "table") {
				$('#logo').css({ 'position': 'fixed', 'top':0}); 
			}
			
			if (firstTime == 1) {
				$('#menu_navigation').fadeIn(1100);
				$('#logo').fadeIn(1100);
				
				firstTime = 0;
			}
        } else {
			/* DISABLE STICKY MENU */
            JAMSESSION_SWP_sticky_menu_cleanup_style();
			
			firstTime = 1;
        }   
    };
     
    // run our function on load
    sticky_navigation();
     
    // and run it again every time you scroll
    $(window).scroll(function() {
         sticky_navigation();
    });
	
	

});	

