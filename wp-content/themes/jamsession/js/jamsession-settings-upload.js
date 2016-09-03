jQuery(document).ready(function($) {
	'use strict';
	var value = "";
	var caller = "";
	
	value = $( "#logo_select option:selected" ).val();
	if ( value == "blog_title"){
		$('#logo_upload_value').attr('disabled','disabled');
		$('#upload_logo_button').attr('disabled','disabled');
	}
	else{
		$('#logo_upload_value').removeAttr('disabled');
		$('#upload_logo_button').removeAttr('disabled');
	}
	
	$('#logo_select').change(function(){
		value = "";
		
		$( "#logo_select option:selected" ).each(function() {
			value = $( this ).val();
		});
		
		if ( value == "blog_title"){
			$('#logo_upload_value').attr('disabled','disabled');
			$('#upload_logo_button').attr('disabled','disabled');
		}
		else{
			$('#logo_upload_value').removeAttr('disabled');
			$('#upload_logo_button').removeAttr('disabled');
		}
	})

    $('#upload_logo_button').click(function() {  
		caller	= "logo";
        tb_show('Upload a logo', 'media-upload.php?referer=jamsession_menu_page_logo&type=image&TB_iframe=true&post_id=0', false); 
        return false;  
    });	

    $('#upload_favicon_button').click(function() {  
		caller	= "favicon";
        tb_show('Upload a favicon', 'media-upload.php?referer=jamsession_menu_page_favicon&type=image&TB_iframe=true&post_id=0', false);  
        return false;  
    });
	
    $('#upload_bgimage_button').click(function() {  
		caller	= "bgimage";
        tb_show('Upload a image for background', 'media-upload.php?referer=jamsession_menu_page_bgimage&type=image&TB_iframe=true&post_id=0', false);  
        return false;  
    });	
	
	window.send_to_editor = function(html) {
		var image_url = $('img',html).attr('src'); 
		if (caller == "logo") {
			$('#logo_upload_value').val(image_url); 
			tb_remove(); 
			$('#logo_upload_preview img').attr('src',image_url);
		}
		else { 
			if (caller == "favicon") {
				$('#favicon_upload_value').val(image_url);
				tb_remove();
				$('#favicon_upload_preview img').attr('src',image_url);
			}
			else {
				if (caller == 'bgimage') {
					$('#bgimage_upload_value').val(image_url);
					tb_remove();
					$('#bgimage_upload_preview img').attr('src',image_url);
				}
			}
		}
		
		 
	}  	
});  