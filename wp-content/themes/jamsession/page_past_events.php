<?php
/*
Template Name: Past Events
*/
?>

<?php
	get_header();
?>
	
<div id="main_content">
	
	
	
	<div id="post_title"> 
			<?php the_title(); ?>
	</div>
	
		<?php
		while (have_posts()) 
		{
			the_post();

			$args = array(
	'numberposts'	=> 100,
	'posts_per_page'   => 100,
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
			   'compare' => '<'
			)
	),
	'suppress_filters' => true ); 

			$myposts = get_posts( $args);
			
			echo '<div id="postmeta_custom">';
			echo ' <span class="post_cat">';  JAMSESSION_SWP_list_custom_terms_with_links('event_category'); echo "</span>";
			echo '</div>';
			?>
			
	<div id="post_content_container">
	
		<?php
			foreach($myposts as $post)
			{
				setup_postdata( $post );
				
				$event_date = esc_html( get_post_meta( get_the_ID(), 'event_date', true ) );
				if ( $event_date != "")
				{
					@$event_date = str_replace("/","-", $event_date);
					@$dateObject = new DateTime($event_date);
				}
				$event_location = esc_html( get_post_meta( get_the_ID(), 'event_location', true ) );
		?>
				<div class="post_item">
				<div class="post_item_event_container">
						<?php
							if ( has_post_thumbnail() ) 
							{
								?>
								<a href="<?php the_permalink(); ?>">
									<div class="post_image_container">
									
										<div class="post_icon_more">
											<i class="icon-mic"></i>
										</div>
										<div class="post_fader"></div>
									
										<?php the_post_thumbnail('medium'); ?>
									</div>
								</a>
								<?php
							}
						?>
						<div class="event_brick_date">
							<?php echo date_i18n(get_option('date_format'), $dateObject->getTimestamp()); ?>
						</div>
						<div class="post_item_title">
							<a href="<?php the_permalink(); ?>"> <?php  the_title(); ?> </a>
						</div>
					

						<div class="event_brick_venue">
							<?php echo $event_location; ?>
						</div>
				</div>
				</div>
	
	
		<?php
			}	/*foreach*/
		} /*while*/

		?>	
	</div>


	<div class="clearfix"></div>
	
</div>
	

	

<?php	
	get_footer();
?>