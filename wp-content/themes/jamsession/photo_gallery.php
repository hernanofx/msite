<?php
/*
Template Name: Photo Gallery
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
	echo '<div id="postmeta_custom">';
	echo ' <span class="post_cat">';  JAMSESSION_SWP_list_custom_terms_with_links('photo_album_category'); echo "</span>";
	echo '</div>';
	?>	
	
	<div id="post_content_container">
		<?php
		while (have_posts()) 
		{
			the_post();
			$args = array(
	'numberposts'	=> 100,
	'posts_per_page'   => 100,
	'offset'           => 0,
	'category'         => '',
	'orderby'          => 'post_date',
	'order'            => 'DESC',
	'include'          => '',
	'exclude'          => '',
	'meta_key'         => '',
	'meta_value'       => '',
	'post_type'        => 'js_photo_albums',
	'post_mime_type'   => '',
	'post_parent'      => '',
	'post_status'      => 'publish',
	'suppress_filters' => true ); 

			$myposts = get_posts( $args);
			foreach($myposts as $post)
			{
				setup_postdata( $post );
		?>
				<div class="post_item">
					<?php
						if ( has_post_thumbnail() ) 
						{
							?>
							<a href="<?php the_permalink(); ?>">
								<div class="post_image_container">
									<div class="post_icon_more">
										<i class="icon-picture"></i>
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
						<?php echo get_the_date(); ?>
					</div>
				</div>
	
		<?php
			}	/*foreach*/
		} /*while*/

		?>
		<div id="content_loader"></div>		
	</div>


	<div class="clearfix"></div>
	
</div>
	

	

<?php	
	get_footer();
?>