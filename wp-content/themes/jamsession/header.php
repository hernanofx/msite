<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<title><?php bloginfo('name'); ?> | <?php (is_home() || is_front_page()) ? bloginfo('description') : wp_title('');  ?></title>
	<meta name="description" content="<?php bloginfo( 'description' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">  
	<?php
		$general_options = get_option( 'jamsession_theme_general_options' );
		
		/* custom favicon */
		if ( !empty(  $general_options['favicon_upload_value']))
		{
			echo '<link rel="shortcut icon" href="'.$general_options['favicon_upload_value'].'" type="image/x-icon" />';
		}
		else
		{
			?>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri().'/images/favicon.ico'; ?>" type="image/x-icon" />
			<?php		
		}
		
	?>
	<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>
	<?php add_thickbox(); ?>
	<?php wp_head(); ?>
	
</head>
<body  <?php body_class(); ?>>
	<div class="wraper">
		<div id="header">
			<div id="logo">
				<?php
					/* custom logo */
					$custom_logo = 0;

					if ( !empty( $general_options['logo_select']))
					{
												
						if ("custom_image" == $general_options['logo_select'])
						{
							if ( !empty(  $general_options['logo_upload_value']))
							{
								?>
								<a href="<?php echo home_url(); ?>"> <img src="<?php echo $general_options['logo_upload_value']; ?>" alt="<?php bloginfo('name'); ?>"> </a>
								<?php
								$custom_logo = 1;
							}
						}
					}
					
					if (0 == $custom_logo)
					{
						?>
							<a href="<?php echo home_url(); ?>"> <?php bloginfo('name'); ?></a>
						<?php
					}
				?>
			</div>
			<div id="menu_navigation">
				<div id="search_blog">
					<div id="display_none">
						<div id="inline_search">
							<?php get_search_form();?>
						</div>
					</div>
					<a title="<?php echo __('Search...','jamsession'); ?>" href="#TB_inline?width=500&amp;height=45&amp;inlineId=display_none" class="thickbox">
						<span>
								<i class="icon-search"></i>
						</span>
					</a>
				</div>
				<div id="mobile_menu"><i class="icon-menu"></i> </div>
				<?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'container_id' => 'main_menu') ); ?>
			</div>
		</div>
		<?php
		if (!(is_page_template('page_main_slider.php')))
		{
		?>
			<div id="canvas_image">
				<img src="<?php echo JAMSESSION_SWP_get_background_image(); ?>">
			</div>
		<?php
		}
		else
		{
			$last_slide_image = JAMSESSION_SWP_get_last_slide_image();
			if ( "" != $last_slide_image)
			{
				?>
					<div id="share_image">
						<img src="<?php echo $last_slide_image; ?>">
					</div>
				<?php
			}
		}
		?>