<?php

function JAMSESSION_SWP_setup_admin_menus()
{  

	add_theme_page(
        'Jam Session Theme Settings', /* page title*/
		'Jam Session Settings',  /* menu title */
		'administrator',    /*capability*/
        'jamsession_menu_page',  /*menu_slug*/
		'JAMSESSION_SWP_option_page_settings'  /*function */
		);		
}
// This tells WordPress to call the function named "setup_theme_admin_menus"  when it's time to create the menu pages.  
add_action("admin_menu", "JAMSESSION_SWP_setup_admin_menus");

function JAMSESSION_SWP_option_page_settings()
{
?>  
    <!-- Create a header in the default WordPress 'wrap' container -->  
    <div class="wrap">  
  
        <!-- Add the icon to the page -->  
        <div id="icon-themes" class="icon32"></div>  
        <h2>Jam Session Theme Settings</h2>  
  
        <!-- Make a call to the WordPress function for rendering errors when settings are saved. -->  
        <?php settings_errors(); ?> 
		
		<?php  
		if( isset( $_GET[ 'tab' ] ) ) 
		{
			$active_tab = $_GET[ 'tab' ];  
		}
		else
		{
		    $active_tab = 'general_options';
		}
		// end if  
		?>  		
		
		<h2 class="nav-tab-wrapper"> 
			<a href="?page=jamsession_menu_page&tab=general_options" class="nav-tab <?php echo $active_tab == 'general_options' ? 'nav-tab-active' : ''; ?>">General Options</a>  		
			<a href="?page=jamsession_menu_page&tab=social_options" class="nav-tab <?php echo $active_tab == 'social_options' ? 'nav-tab-active' : ''; ?>">Social Options</a>  
			<a href="?page=jamsession_menu_page&tab=footer_options" class="nav-tab <?php echo $active_tab == 'footer_options' ? 'nav-tab-active' : ''; ?>">Footer Options</a>  
		</h2> 		
  
        <!-- Create the form that will be used to render our options -->  
        <form method="post" action="options.php"> 
			<?php
				if ( $active_tab == 'general_options')
				{
					settings_fields( 'jamsession_theme_general_options' ); 
					do_settings_sections( 'jamsession_theme_general_options' );
				}
				elseif( $active_tab == 'social_options' ) 
				{
					settings_fields( 'jamsession_theme_social_options' ); 
					do_settings_sections( 'jamsession_theme_social_options' );
				}
				elseif ( $active_tab == 'footer_options')
				{
					settings_fields( 'jamsession_theme_footer_options' ); 
					do_settings_sections( 'jamsession_theme_footer_options' );
				}
				submit_button(); 
			?>  
        </form>  
  
    </div><!-- /.wrap -->  
<?php  
}

add_action('admin_init', 'JAMSESSION_SWP_initialize_theme_options');
/** 
 * Initializes the theme's social options by registering the Sections, 
 * Fields, and Settings. 
 * 
 * This function is registered with the 'admin_init' hook. 
 */ 
function JAMSESSION_SWP_initialize_theme_options()
{ 
	// If the social options don't exist, create them. 
	if( false == get_option( 'jamsession_theme_general_options' ) ) 
	{    
		add_option( 'jamsession_theme_general_options' );  
	}
	
	if( false == get_option( 'jamsession_theme_social_options' ) ) 
	{    
		add_option( 'jamsession_theme_social_options' );  
	}

	// If the social options don't exist, create them.  
	if( false == get_option( 'jamsession_theme_footer_options' ) ) 
	{    
		add_option( 'jamsession_theme_footer_options' );  
	} 
	add_settings_section(  
		'jamsession_general_settings_section',          // ID used to identify this section and with which to register options  
		'General Settings',                   // Title to be displayed on the administration page  
		'JAMSESSION_SWP_general_options_callback',  // Callback used to render the description of the section
		'jamsession_theme_general_options'      // Page on which to add this section of options  
	);	
	
	add_settings_section(  
		'jamsession_social_settings_section',          // ID used to identify this section and with which to register options  
		'Social Media Settings',                   // Title to be displayed on the administration page  
		'JAMSESSION_SWP_social_options_callback',  // Callback used to render the description of the section
		'jamsession_theme_social_options'      // Page on which to add this section of options  
	);
	
	add_settings_section(  
		'jamsession_footer_settings_section',          // ID used to identify this section and with which to register options  
		'Footer Settings',                   // Title to be displayed on the administration page  
		'JAMSESSION_SWP_footer_options_callback',  // Callback used to render the description of the section
		'jamsession_theme_footer_options'      // Page on which to add this section of options  
	);	
	
	/*=========== ADD SETTINGS  ========================*/
	/* GENERAL OPTIONS */
    add_settings_field(   
        'logo_select',          					// ID used to identify the field throughout the theme                
        'Logo Type',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_logo_select_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_general_options',   	// The page on which this option will be displayed  
        'jamsession_general_settings_section'    // The name of the section to which this field belongs  
    ); 
    add_settings_field(   
        'logo_upload_value',          					// ID used to identify the field throughout the theme                
        'Select Logo',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_logo_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_general_options',   	// The page on which this option will be displayed  
        'jamsession_general_settings_section'    // The name of the section to which this field belongs  
    ); 
    add_settings_field(   
        'logo_upload_preview',          					// ID used to identify the field throughout the theme                
        'Preview Logo',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_logo_preview_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_general_options',   	// The page on which this option will be displayed  
        'jamsession_general_settings_section'    // The name of the section to which this field belongs  
    ); 	
    add_settings_field(   
        'favicon_upload_value',          					// ID used to identify the field throughout the theme                
        'Select Favicon',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_favicon_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_general_options',   	// The page on which this option will be displayed  
        'jamsession_general_settings_section'    // The name of the section to which this field belongs  
    );
    add_settings_field(   
        'favicon_upload_preview',          					// ID used to identify the field throughout the theme                
        'Preview Favicon',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_favicon_preview_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_general_options',   	// The page on which this option will be displayed  
        'jamsession_general_settings_section'    // The name of the section to which this field belongs  
    );	

    add_settings_field(   
        'contact_form_email',          					// ID used to identify the field throughout the theme                
        'Contact Form Email',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_contact_form_email', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_general_options',   	// The page on which this option will be displayed  
        'jamsession_general_settings_section'    // The name of the section to which this field belongs  
    );		
	
    add_settings_field(   
        'bgimage_upload_value',          					// ID used to identify the field throughout the theme                
        'Select Background Image',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_bgimage_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_general_options',   	// The page on which this option will be displayed  
        'jamsession_general_settings_section'    // The name of the section to which this field belongs  
    ); 
    add_settings_field(   
        'bgimage_upload_preview',          					// ID used to identify the field throughout the theme                
        'Preview Background Image',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_bgimage_preview_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_general_options',   	// The page on which this option will be displayed  
        'jamsession_general_settings_section'    // The name of the section to which this field belongs  
    );
	
    add_settings_field(   
        'recaptcha_public_key',          					// ID used to identify the field throughout the theme                
        'Recaptcha Public Key',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_recaptcha_public_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_general_options',   	// The page on which this option will be displayed  
        'jamsession_general_settings_section'    // The name of the section to which this field belongs  
    ); 	

    add_settings_field(   
        'recaptcha_private_key',          					// ID used to identify the field throughout the theme                
        'Recaptcha Private Key',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_recaptcha_private_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_general_options',   	// The page on which this option will be displayed  
        'jamsession_general_settings_section'    // The name of the section to which this field belongs  
    ); 		
	
	/* SOCIAL OPTIONS */
    add_settings_field(   
        'twitter',          					// ID used to identify the field throughout the theme                
        'Twitter URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_twitter_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    ); 
    add_settings_field(   
        'facebook',          					// ID used to identify the field throughout the theme                
        'Facebook URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_facebook_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    );
    add_settings_field(   
        'google_plus',          					// ID used to identify the field throughout the theme                
        'Google+ URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_google_plus_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    ); 
    add_settings_field(   
        'youtube',          					// ID used to identify the field throughout the theme                
        'YouTube URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_youtube_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    );
    add_settings_field(   
        'vimeo',          					// ID used to identify the field throughout the theme                
        'Vimeo URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_vimeo_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    );   	
    add_settings_field(   
        'soundcloud',          					// ID used to identify the field throughout the theme                
        'SoundCloud URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_soundcloud_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    );   	
    add_settings_field(   
        'myspace',          					// ID used to identify the field throughout the theme                
        'Myspace URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_myspace_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    );
   	add_settings_field(   
        'flickr',          					// ID used to identify the field throughout the theme                
        'Flickr URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_flickr_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    );
	
   	add_settings_field(   
        'pinterest',          					// ID used to identify the field throughout the theme                
        'Pinterest URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_pinterest_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    );   	
   	add_settings_field(   
        'instagram',          					// ID used to identify the field throughout the theme                
        'Instagram URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_instagram_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    );

   	add_settings_field(   
        'itunes',          					// ID used to identify the field throughout the theme                
        'iTunes URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_itunes_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    );

   	add_settings_field(   
        'spotify',          					// ID used to identify the field throughout the theme                
        'Spotify URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_spotify_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    );

   	add_settings_field(   
        'tumblr',          					// ID used to identify the field throughout the theme                
        'Tumblr URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_tumblr_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    );	
	
   	add_settings_field(   
        'rnation',          					// ID used to identify the field throughout the theme                
        'ReverbNation URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_rnation_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_social_options',   	// The page on which this option will be displayed  
        'jamsession_social_settings_section'    // The name of the section to which this field belongs  
    );	
	
	/* -------------------- footer options -------------------- */
    add_settings_field(   
        'footer_text',          					// ID used to identify the field throughout the theme                
        'Footer Text',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_footer_text_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_footer_options',   	// The page on which this option will be displayed  
        'jamsession_footer_settings_section'    // The name of the section to which this field belongs  
    );

    add_settings_field(   
        'footer_text_url',          					// ID used to identify the field throughout the theme                
        'Footer Text URL',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_footer_text_url_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_footer_options',   	// The page on which this option will be displayed  
        'jamsession_footer_settings_section'    // The name of the section to which this field belongs  
    );	
	
    add_settings_field(   
        'analytics_code',          					// ID used to identify the field throughout the theme                
        'Analytics Code',                				// The label to the left of the option interface element            
        'JAMSESSION_SWP_analytics_code_callback', 			// The name of the function responsible for rendering the option interface
        'jamsession_theme_footer_options',   	// The page on which this option will be displayed  
        'jamsession_footer_settings_section'    // The name of the section to which this field belongs  
    );	
	/*=========== REGISTER SETTINGS  ========================*/
	register_setting(  
		'jamsession_theme_general_options',  	//option group - A settings group name. Must exist prior to the register_setting call. This must match the group name in settings_fields()
		'jamsession_theme_general_options',  		// option_name -  The name of an option to sanitize and save. 
		'JAMSESSION_SWP_sanitize_general_options'  	//  $sanitize_callback (callback) (optional) A callback function that sanitizes the option's value
	);		
    register_setting(  
		'jamsession_theme_social_options',  	//option group - A settings group name. Must exist prior to the register_setting call. This must match the group name in settings_fields()
		'jamsession_theme_social_options',  		// option_name -  The name of an option to sanitize and save. 
		'JAMSESSION_SWP_sanitize_social_options'  	//  $sanitize_callback (callback) (optional) A callback function that sanitizes the option's value
	);
    register_setting(  
		'jamsession_theme_footer_options',  	//option group - A settings group name. Must exist prior to the register_setting call. This must match the group name in settings_fields()
		'jamsession_theme_footer_options',  		// option_name -  The name of an option to sanitize and save. 
		'JAMSESSION_SWP_sanitize_footer_options'  	//  $sanitize_callback (callback) (optional) A callback function that sanitizes the option's value
	);	

} // end  jamsession_initialize_social_options
 

function JAMSESSION_SWP_general_options_callback()
{
	echo '<p>Setup custom logo and favicon.</p>';
}
 
function JAMSESSION_SWP_social_options_callback()
{
	echo '<p>Provide the URL to the social networks you\'d like to display.</p>';
	
} // end JAMSESSION_SWP_social_options_callback

function JAMSESSION_SWP_footer_options_callback()
{
	 echo '<p>Setup footer text, footer text URL and analytics code.</p>';
}

/*================== ADD SETTING CALLBACKS BEGIN =====================*/
/*==================================================================*/
function JAMSESSION_SWP_logo_select_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_general_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $logo = ''; 
    if( isset( $options['logo_select'] ) ) 
	{ 
        $logo = $options['logo_select']; 
    } // end if 

    // Render the output 
	echo '<select id="logo_select" name="jamsession_theme_general_options[logo_select]">';
	if ( ( $logo == "")||($logo == "blog_title")) 
	{
		echo '<option value="blog_title" selected="selected">Blog Title</option>';
		echo '<option value="custom_image">Custom Logo Image</option>';
	}
	else
	{
		echo '<option value="blog_title" >Blog Title</option>';
		echo '<option value="custom_image" selected="selected">Custom Logo Image</option>';
	}
	echo '</select>';
	
	echo '<p class="description">Use the blog title as text based logo, or add your custom logo image.</p>';
	
}

function JAMSESSION_SWP_logo_callback()
{
   // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_general_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $logo = ''; 
    if( isset( $options['logo_upload_value'] ) ) 
	{ 
        $logo = $options['logo_upload_value']; 
    } // end if 
     
    // Render the output
	echo '<input id="logo_upload_value" type="text" name="jamsession_theme_general_options[logo_upload_value]" size="150" value="'.esc_url($logo).'"/>';  
    echo '<input id="upload_logo_button" type="button" class="button" value="Upload Logo" />';  
    echo '<p class="description">Upload an image for logo. Recommended image width: 200px.</p>';  	
}

function JAMSESSION_SWP_logo_preview_callback()
{
// First, we read the social options collection  
    $options = get_option( 'jamsession_theme_general_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $logo = ''; 
    if( isset( $options['logo_upload_value'] ) ) 
	{ 
        $logo = $options['logo_upload_value']; 
    } // end if 
     
    // Render the output
?>
	<div id="logo_upload_preview" style="min-height: 100px;">  
        <img style="max-width:100%;" src="<?php echo esc_url($logo); ?>" />  
    </div> 
<?php	
}

function JAMSESSION_SWP_favicon_callback()
{
   // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_general_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $favicon = ''; 
    if( isset( $options['favicon_upload_value'] ) ) 
	{ 
        $favicon = $options['favicon_upload_value']; 
    } // end if 
     
    // Render the output
	echo '<input id="favicon_upload_value" type="text" name="jamsession_theme_general_options[favicon_upload_value]"  value="'.esc_url( $favicon).'" size="150"/>';
    echo '<input id="upload_favicon_button" type="button" class="button" value="Upload Favicon" />';  
    echo '<p class="description">Upload an image for favicon.</p>';  	
}

function JAMSESSION_SWP_favicon_preview_callback()
{
// First, we read the social options collection  
    $options = get_option( 'jamsession_theme_general_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $favicon = ''; 
    if( isset( $options['favicon_upload_value'] ) ) 
	{ 
        $favicon = $options['favicon_upload_value']; 
    } // end if 
     
    // Render the output
?>
	<div id="favicon_upload_preview" style="min-height: 100px;">  
        <img style="max-width:100%;" src="<?php echo esc_url($favicon); ?>" />  
    </div> 
<?php	
}

function JAMSESSION_SWP_bgimage_callback()
{
   // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_general_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $bgimage = ''; 
    if( isset( $options['bgimage_upload_value'] ) ) 
	{ 
        $bgimage = $options['bgimage_upload_value']; 
    } // end if 
     
    // Render the output
	echo '<input id="bgimage_upload_value" type="text" name="jamsession_theme_general_options[bgimage_upload_value]"  value="'.esc_url( $bgimage).'" size="150"/>';
    echo '<input id="upload_bgimage_button" type="button" class="button" value="Upload Background Image" />';  
    echo '<p class="description">Upload an image for background.</p>';  	
}

function JAMSESSION_SWP_bgimage_preview_callback()
{
// First, we read the social options collection  
    $options = get_option( 'jamsession_theme_general_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $bgimage = ''; 
    if( isset( $options['bgimage_upload_value'] ) ) 
	{ 
        $bgimage = $options['bgimage_upload_value']; 
    } // end if 
     
    // Render the output
?>
	<div id="bgimage_upload_preview" style="min-height: 100px;">  
        <img style="max-width:200px; height: auto;" src="<?php echo esc_url($bgimage); ?>" />  
    </div> 
<?php	
}

function JAMSESSION_SWP_recaptcha_public_callback()
{
// First, we read the social options collection  
    $options = get_option( 'jamsession_theme_general_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $pKey = ''; 
    if( isset( $options['recaptcha_public_key'] ) ) 
	{ 
        $pKey = $options['recaptcha_public_key']; 
    } // end if 
     
    // Render the output

	echo '<input id="recaptcha_public_key" type="text" name="jamsession_theme_general_options[recaptcha_public_key]"  value="'.esc_html( $pKey).'" size="150"/>'; 
	echo '<p class="description">Insert recaptcha public key - live it empty if you do not want recapthca validation on contact form.</p>';  	
}

function JAMSESSION_SWP_recaptcha_private_callback()
{
// First, we read the social options collection  
    $options = get_option( 'jamsession_theme_general_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $pKey = ''; 
    if( isset( $options['recaptcha_private_key'] ) ) 
	{ 
        $pKey = $options['recaptcha_private_key']; 
    } // end if 
     
    // Render the output

	echo '<input id="recaptcha_private_key" type="text" name="jamsession_theme_general_options[recaptcha_private_key]"  value="'.esc_html( $pKey).'" size="150"/>'; 
	echo '<p class="description">Insert recaptcha private key - live it empty if you do not want recapthca validation on contact form.</p>';  	
}


function JAMSESSION_SWP_contact_form_email()
{
	 $options = get_option( 'jamsession_theme_general_options' );
	 
	 $contact_email = '';
    if( isset( $options['contact_form_email'] ) ) 
	{ 
        $contact_email = sanitize_email($options['contact_form_email']); 
    }
	
	echo '<input type="text" size="150 id="contact_form_email" name="jamsession_theme_general_options[contact_form_email]" value="' . $contact_email . '" />'; 
	echo '<p class="description">Email address to which messages from the contact form are sent. You can leave it empty if you want, and if so, the messages would be sent to the default website administrator email address.</p>';
}

function JAMSESSION_SWP_twitter_callback()
{
      
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['twitter'] ) ) 
	{ 
        $url = esc_url_raw($options['twitter']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="twitter" name="jamsession_theme_social_options[twitter]" value="' . $url . '" />';  
      
} // end JAMSESSION_SWP_twitter_callback

function JAMSESSION_SWP_facebook_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['facebook'] ) ) 
	{ 
        $url = esc_url_raw($options['facebook']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="facebook" name="jamsession_theme_social_options[facebook]" value="' . $url . '" />';  
      	
}

function JAMSESSION_SWP_google_plus_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['google_plus'] ) ) 
	{ 
        $url = esc_url_raw($options['google_plus']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="google_plus" name="jamsession_theme_social_options[google_plus]" value="' . $url . '" />';  
      	
}

function JAMSESSION_SWP_youtube_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['youtube'] ) ) 
	{ 
        $url = esc_url_raw($options['youtube']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="youtube" name="jamsession_theme_social_options[youtube]" value="' . $url . '" />';  
      	
}

function JAMSESSION_SWP_vimeo_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['vimeo'] ) ) 
	{ 
        $url = esc_url_raw($options['vimeo']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="vimeo" name="jamsession_theme_social_options[vimeo]" value="' . $url . '" />';  
      	
}

function JAMSESSION_SWP_soundcloud_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['soundcloud'] ) ) 
	{ 
        $url = esc_url_raw($options['soundcloud']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="soundcloud" name="jamsession_theme_social_options[soundcloud]" value="' . $url . '" />';  
      	
}

function JAMSESSION_SWP_myspace_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['myspace'] ) ) 
	{ 
        $url = esc_url_raw($options['myspace']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="myspace" name="jamsession_theme_social_options[myspace]" value="' . $url . '" />';  
      	
}

function JAMSESSION_SWP_flickr_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['flickr'] ) ) 
	{ 
        $url = esc_url_raw($options['flickr']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="flickr" name="jamsession_theme_social_options[flickr]" value="' . $url . '" />';  
      	
}

function JAMSESSION_SWP_pinterest_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['pinterest'] ) ) 
	{ 
        $url = esc_url_raw($options['pinterest']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="pinterest" name="jamsession_theme_social_options[pinterest]" value="' . $url . '" />';  
      	
}

function JAMSESSION_SWP_instagram_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['instagram'] ) ) 
	{ 
        $url = esc_url_raw($options['instagram']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="instagram" name="jamsession_theme_social_options[instagram]" value="' . $url . '" />';  
      	
}

function JAMSESSION_SWP_itunes_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['itunes'] ) ) 
	{ 
        $url = esc_url_raw($options['itunes']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="itunes" name="jamsession_theme_social_options[itunes]" value="' . $url . '" />';  
}

function JAMSESSION_SWP_spotify_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['spotify'] ) ) 
	{ 
        $url = esc_url_raw($options['spotify']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="spotify" name="jamsession_theme_social_options[spotify]" value="' . $url . '" />';  
}

function JAMSESSION_SWP_tumblr_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['tumblr'] ) ) 
	{ 
        $url = esc_url_raw($options['tumblr']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="tumblr" name="jamsession_theme_social_options[tumblr]" value="' . $url . '" />';  
}

function JAMSESSION_SWP_rnation_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_social_options' );  
      
    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $url = ''; 
    if( isset( $options['rnation'] ) ) 
	{ 
        $url = esc_url_raw($options['rnation']); 
    } // end if 
     
    // Render the output 
	echo '<input type="text" size="150 id="rnation" name="jamsession_theme_social_options[rnation]" value="' . $url . '" />';  
}

function JAMSESSION_SWP_footer_text_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_footer_options' ); 

    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $text = ''; 
    if( isset( $options['footer_text'] ) ) 
	{ 
        $text = esc_html($options['footer_text']); 
    } // end if 
     
    // Render the output 
	echo '<textarea  cols="147" rows="10" id="footer_text" name="jamsession_theme_footer_options[footer_text]" >' . $text . '</textarea>';  
}

function JAMSESSION_SWP_footer_text_url_callback()
{
   // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_footer_options' ); 

    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $text_url = ''; 
    if( isset( $options['footer_text_url'] ) ) 
	{ 
        $text_url = esc_url_raw($options['footer_text_url']); 
    } // end if

	// Render the output 
	echo '<input type="text" size="147" id="footer_text_url" name="jamsession_theme_footer_options[footer_text_url]" value="' . $text_url . '" />';   	
}

function JAMSESSION_SWP_analytics_code_callback()
{
    // First, we read the social options collection  
    $options = get_option( 'jamsession_theme_footer_options' ); 

    // Next, we need to make sure the element is defined in the options. If not, we'll set an empty string.  
    $acode = ''; 
    if( isset( $options['analytics_code'] ) ) 
	{ 
		$acode = esc_html($options['analytics_code']); 
    } // end if 
     
    // Render the output 
	echo '<textarea  cols="147" rows="10" id="analytics_code" name="jamsession_theme_footer_options[analytics_code]" >' . $acode . '</textarea>';  
		
}
/*==================================================================*/
/*================== ADD SETTING CALLBACKS END =====================*/

function JAMSESSION_SWP_sanitize_footer_options( $input )
{
    // Define the array for the updated options  
    $output = array();  
  
    //footer text
	$output['footer_text'] = esc_html( trim($input['footer_text']));
	
	//footer text url
	$output['footer_text_url'] = esc_url_raw( trim($input['footer_text_url']));
	
	 //analytics_code footer_text
	$output['analytics_code'] = $input['analytics_code'];
	
    // Return the new collection  
    return apply_filters( 'JAMSESSION_SWP_sanitize_footer_options', $output, $input );
} // end JAMSESSION_SWP_sanitize_footer_options

function JAMSESSION_SWP_sanitize_general_options( $input)
{
    // Define the array for the updated options  
    $output = array();  
  
    // Loop through each of the options sanitizing the data  
    foreach( $input as $key => $val ) 
	{  
        if( isset ( $input[$key] ) ) 
		{  
			if ($key == 'contact_form_email')
			{
				$output[$key] = sanitize_email( trim( $input[$key] ) );
			}
			else
			{
				$output[$key] =  esc_html( trim( $input[$key] ) ) ;
			}
        } // end if   
      
    }
	return apply_filters( 'JAMSESSION_SWP_sanitize_general_options', $output, $input ); 	;
}

function JAMSESSION_SWP_sanitize_social_options( $input )
{
    // Define the array for the updated options  
    $output = array();  
  
    // Loop through each of the options sanitizing the data  
    foreach( $input as $key => $val ) 
	{  
        if( isset ( $input[$key] ) ) 
		{  
            $output[$key] = esc_url_raw( trim( $input[$key] ) );  
        } // end if   
      
    } // end foreach  
      
    // Return the new collection  
    return apply_filters( 'JAMSESSION_SWP_sanitize_social_options', $output, $input );
} // end JAMSESSION_SWP_sanitize_social_options



//add necessary javascript
function JAMSESSION_SWP_options_enqueue_scripts()
{  
    wp_register_script( 'jamsession-settings-upload', get_template_directory_uri() .'/js/jamsession-settings-upload.js', array('jquery','media-upload','thickbox'), '', true );  
  
    /*appearance_page_[menu_slug]*/
    if ( 'appearance_page_jamsession_menu_page' == get_current_screen()->id ) 
	{  
        wp_enqueue_script('jquery');  
  
        wp_enqueue_script('thickbox');  
        wp_enqueue_style('thickbox');  
  
        wp_enqueue_script('media-upload');  
        wp_enqueue_script('jamsession-settings-upload');  
    }  
}  
add_action('admin_enqueue_scripts', 'JAMSESSION_SWP_options_enqueue_scripts');

/*change insert into post text inside thickbox*/
function JAMSESSION_SWP_options_setup()
{  
    global $pagenow;  
  
    if ( 'media-upload.php' == $pagenow || 'async-upload.php' == $pagenow ) 
	{
        // Now we'll replace the 'Insert into Post Button' inside Thickbox  
        add_filter( 'gettext', 'JAMSESSION_SWP_replace_thickbox_text'  , 1, 3 );
    } 
} 
add_action( 'admin_init', 'JAMSESSION_SWP_options_setup' );
 
function JAMSESSION_SWP_replace_thickbox_text($translated_text, $text, $domain)
{ 
    if ('Insert into Post' == $text) 
	{ 
        $referer = strpos( wp_get_referer(), 'jamsession_menu_page' ); 
        if ( $referer != '' ) 
		{	
			$referer = strpos( wp_get_referer(), 'jamsession_menu_page_logo' ); 
			if (  $referer != '' )
            {
				return __('Use this image as logo', 'jamsession' );
			}
			$referer = strpos( wp_get_referer(), 'jamsession_menu_page_favicon' ); 
			if (  $referer != '' )
            {
				return __('Use this image as favicon', 'jamsession' );
			}
			$referer = strpos( wp_get_referer(), 'jamsession_menu_page_bgimage' ); 
			if (  $referer != '' )
            {
				return __('Use this image as background', 'jamsession' );
			}
        }  
    }  
    return $translated_text;  
}  
?>