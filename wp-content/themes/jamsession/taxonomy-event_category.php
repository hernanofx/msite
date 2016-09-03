
<?php
	get_header();
?>
	
<div id="main_content">
	
	
	
	<div id="post_title"> 
			<?php echo __("Tour Dates","jamsession"); ?>
	</div>
	<?php
	/*get current term name and display it properly*/
	$term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) );

	if ( !empty($term))
	{
		echo '<div id="postmeta_custom">';
		echo ' <span class="post_cat">';  JAMSESSION_SWP_list_custom_terms_with_links('event_category', $term->name); echo "</span>";
		echo '</div>';
	}
	?>
	
	<div id="post_content_container">
	
	<?php
		$args = array(
				'orderby'          => 'meta_value',
				'meta_key'         => 'event_date',
				'order'            => 'ASC',
				'post_type'        => 'js_events',
				'tax_query' => array(
									array(
										'taxonomy' => 'event_category',
										'field' => 'slug',
										'terms' => $term->name
									)
								),
				'meta_query' => array(
								array(
								   'key' => 'event_date',
								   'value' => date('Y/m/d',time()),
								   'compare' => '>='
								)
				)
		);
		
		$the_query = new WP_Query( $args );
	
		if (  $the_query->have_posts() )
		{
			while ( $the_query->have_posts()) 
			{
					$the_query->the_post();

				
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
												<i class="icon-link"></i>
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
			} /*while*/
		} /*if*/

		?>	
	</div>


	<div class="clearfix"></div>
	
</div>
	

	

<?php	
	get_footer();
?>