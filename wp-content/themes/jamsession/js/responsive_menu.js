jQuery(document).ready( function($) {
	'use strict';

	if ( $("#mobile_menu").css("display") != "none")
	{
		$("#main_menu").hide();
	}
	
	/* toggle nav */
	$(".icon-menu").on("click", function(){
		$("#main_menu").slideToggle();
	});
	
	/*set mobile icon  line height*/
	var logoHeight = $("#logo").css("line-height");
	$("#mobile_menu").css("line-height", logoHeight);	
	
	$(window).resize(function(){
		var winWidth = $(window).width();

		if ((winWidth > 767) && ($("#main_menu").css("display") == "none")) {
			$("#main_menu").removeAttr('style');
		}
		
		if ((winWidth <= 979) && ($("#main_menu").css("display") == "table"))
		{
			$("#main_menu").css("display", "none");
		}
		
		var logoHeight = $("#logo").css("line-height");
		$("#mobile_menu").css("line-height", logoHeight);			
	});
	
});