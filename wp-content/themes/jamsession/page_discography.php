<?php
/*
Template Name: Discography
*/
?>

<?php
	get_header();
?>
	
<div id="main_content">
	<div id="post_title"> 
			<?php 
			
			the_title(); 
		
			?>
	</div>
	
	<?php
	echo '<div id="postmeta_custom">';
	echo ' <span class="post_cat">';  JAMSESSION_SWP_list_custom_terms_with_links('album_category'); echo "</span>";
	echo '</div>';

	?>	
	<div id="post_content_container">
		<?php
		$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
		
		$args = array(
				'numberposts'	=> 100,
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
				'post_type'        => 'js_albums',
				'post_mime_type'   => '',
				'post_parent'      => '',
				'post_status'      => 'publish',
				'suppress_filters' => true ); 
				
		$temp = $wp_query;
		$wp_query= null;
		$wp_query = new WP_Query();
		$wp_query->query($args);		
		
		
		if ( $wp_query->have_posts() )
		{
			while ( $wp_query->have_posts() )
			{
				$wp_query->the_post();
	?>
				<div class="post_item" >
					<?php
						if ( has_post_thumbnail() ) 
						{
							?>
							<a href="<?php the_permalink(); ?>">
								<div class="post_image_container">
									<div class="post_icon_more">
									<i class="icon-headphones"></i> 
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

					<div class="album_release_date">
						<?php 
						$releaseDate = get_post_meta( get_the_ID(), 'album_release_date', true );
						@$releaseDate = str_replace("/","-", $releaseDate);
						@$mydate = new DateTime($releaseDate);
						echo date_i18n(get_option('date_format'), $mydate->getTimestamp()); 
						
						?>
					</div>
				</div>
	
		<?php
			} /*while*/
		?>
		<div id="content_loader"></div>		
	</div>
			<div class="page_navigation">
				<div class="alignleft"><?php next_posts_link( '&laquo; Older posts' ); ?></div>
				<div class="alignleft"><?php previous_posts_link( 'Newer posts &raquo;' ); ?></div>
			</div>
		<?php
		}/*if*/

		?>



	
	<div class="clearfix"></div>
	
</div>
	

	

<?php	
	get_footer();
?>