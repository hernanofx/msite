<?php
	get_header();
?>
	
<div id="main_content">
	<div id="post_title"> 
			<?php echo __("Discography","jamsession"); ?>
	</div>

	<?php
	/*get current term name and display it properly*/
	$term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) );
	
	if ( !empty($term))
	{
		echo '<div id="postmeta_custom">';
		echo ' <span class="post_cat">';  JAMSESSION_SWP_list_custom_terms_with_links('album_category', $term->name); echo "</span>";
		echo '</div>';
	}
	?>	
	
	<div id="post_content_container">
		<?php
		if (have_posts())
		{
			while (have_posts()) 
			{
				the_post();
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
							echo $mydate->format('jS F Y'); 
							
							?>
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