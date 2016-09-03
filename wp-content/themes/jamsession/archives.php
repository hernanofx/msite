<?php
/*
Template Name: Archives
*/
?>

<?php
	get_header();
?>
	
<div id="main_content">

	<div id="post_content_container">
		<?php
			$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
			
			$args = array(
				'numberposts'	=> -1,
				'posts_per_page'   => 20,
				'paged'			   => $paged,
				'offset'           => 0,
				'category'         => '',
				'orderby'          => 'post_date',
				'order'            => 'DESC',
				'include'          => '',
				'exclude'          => '',
				'meta_key'         => '',
				'meta_value'       => '',
				'post_type'        => array( 'post', 'js_videos', 'js_photo_albums'),
				'post_mime_type'   => '',
				'post_parent'      => '',
				'post_status'      => 'publish',
				'suppress_filters' => true ); 

			$temp = $wp_query;
			$wp_query= null;
			$wp_query = new WP_Query();
			$wp_query->query($args);
			
			if ( $wp_query->have_posts() ) :
			while ( $wp_query->have_posts() ) : $wp_query->the_post();
			?>
				<div <?php post_class('post_item');?> >
					<?php
						if ( has_post_thumbnail() ) 
						{
							?>
							<a href="<?php the_permalink(); ?>">
								<div class="post_image_container">
									<div class="post_icon_more">
									<?php if ( 'js_videos' == get_post_type()) 
									{ ?>
										<i class="icon-play"></i>
									<?php 
									}
									elseif ( 'js_photo_albums' == get_post_type())
									{
									?>	
										<i class="icon-picture"></i>
									<?php 
									} 
									else
									{
									?>
										<i class="icon-link"></i>
									<?php
									}
									?>
									</div>
									<div class="post_fader"></div>
									<?php the_post_thumbnail('medium'); ?>
								</div>
							</a>
							<?php
						}
					?>
					<div class="post_item_title">
						<a href="<?php the_permalink(); ?>"> <?php the_title();?> </a>
					</div>
				
					<div class="post_item_excerpt">
						<?php
						the_excerpt();
						?>
					</div>
					<div class="post_item_date">
						<?php echo get_the_date(get_option('date_format')); ?>
					</div>
				</div>
	
		<?php
			endwhile;
		?>
		<div id="content_loader"></div>
	</div>
		<div class="page_navigation">
			<div class="alignleft"><?php next_posts_link( '&laquo; Older posts' ); ?></div>
			<div class="alignleft"><?php previous_posts_link( 'Newer posts &raquo;' ); ?></div>
		</div>
		
		<?php else:  ?>
			<p><?php __( 'Sorry, no posts matched your criteria.', 'jamsession' ); ?></p>
		<?php endif; ?>
		
		<?php
			$wp_query = null; $wp_query = $temp;
		?>

	<div class="clearfix"></div>
	
</div>
	

	

<?php	
	get_footer();
?>