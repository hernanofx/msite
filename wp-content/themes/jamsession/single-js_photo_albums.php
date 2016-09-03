<?php
	get_header();
?>
	
<div id="main_content">
	
	
	<?php
	
	if (have_posts()) 
	{	
		while (have_posts()) 
		{
			the_post();
			
			?> 
			<div id="post_title"><?php the_title();?></div>
			<div id="postmeta_custom">
				 <?php 
					echo __('by','jamsession')." "; ?>
					<span class="post_author"><a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>"><?php the_author(); ?></a></span>
					<?php echo " on "; the_date(); 
					if ( has_term( '', 'photo_album_category' ))
					{ 
						echo __(' in ','jamsession').' <span class="post_cat">'; 
						the_terms( $post->ID, 'photo_album_category', '', ' ' );
						echo "</span>"; 
					}
				?> 
			</div>
			<div id="post_content_container"> <?php
				
				/*get the attachments */
				 $args = array(
					'post_type' => 'attachment',
					'numberposts' => -1,
					'post_status' => null,
					'post_parent' => $post->ID
				);
				
				$attachments = get_posts( $args );
				if ( $attachments ) 
				{
					foreach ( $attachments as $attachment ) 
					{
							?>
						<div class="post_item_gallery" >
							<a href="<?php echo wp_get_attachment_url($attachment->ID); ?>" data-lightbox="photo_album">
								<div class="post_image_container">
								<div class="post_icon_more">
									<i class="icon-picture"></i> 
								</div>
								<div class="post_fader"></div>
							<?php
						echo wp_get_attachment_image( $attachment->ID, 'medium' );
							?>
								</div>
							</a>
						</div>	
						<?php
					}
				}
				
				
				?>
				<div id="content_loader"></div>
			</div>
	

		<div class="custom_content">
		<?php the_content(); ?>
		</div>
		
		<?php
			if(function_exists('the_post_thumbnail'))
			{
				$image_string =  wp_get_attachment_url(get_post_thumbnail_id());
			}
			JAMSESSION_SWP_add_social_sharing_icons(get_permalink(), get_the_title(), $image_string);
		?>		
		<?php comments_template();  ?>
	
	<?php 
		} /*while*/
	}	/*if*/
	else
	{
		?>
		<div id="post_content_container"> 
		<?php echo '<p>'.__('Sorry, no photo albums matched your criteria.', 'jamsession').'</p>'; ?>
		</div>
		<?php
	}
	?>	
		
	</div>


	<div class="clearfix"></div>
	
</div>
	

	

<?php	
	get_footer();
?>