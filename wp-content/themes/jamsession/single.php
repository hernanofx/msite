<?php
	get_header();
?>
	
<div id="main_content">
	
	<div id="post_content">
	<?php
	if (have_posts()) 
	{	
		while (have_posts()) 
		{
			the_post();
			
			?><div id="post_title"><?php the_title();?></div>
			<div id="postmeta">
				 <?php 
					echo __('by','jamsession')." "; ?>
					<span class="post_author"><a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>"><?php the_author(); ?></a></span>
					<?php echo " on "; the_date('F j, Y g:i A'); if (has_category()){ echo __(' in ','jamsession').' <span class="post_cat">';  the_category(' '); echo "</span>";}
				?> 
			</div>
			<?php
			the_content();
			
			?>
			<?php 
				$args = array(
					'before'           => '<div class="pagination_links">' . __('Pages:', 'jamsession'),
					'after'            => '</div>',
					'link_before'      => '',
					'link_after'       => '',
					'next_or_number'   => 'number',
					'nextpagelink'     => __('Next page', 'jamsession'),
					'previouspagelink' => __('Previous page', 'jamsession'),
					'pagelink'         => '%',
					'echo'             => 1
				); 
				?><div class="clearfix"></div><?php
				wp_link_pages( $args );
			?>		
			<?php
				if(function_exists('the_post_thumbnail'))
				{
					$image_string =  wp_get_attachment_url(get_post_thumbnail_id());
				}
				JAMSESSION_SWP_add_social_sharing_icons(get_permalink(), get_the_title(), $image_string);
			?>
			<div class="post_tags">
				<?php 
				$before_tag = '<span class="post_tag">';
				$after_tag = '</span>';
				the_tags( $before_tag, ' ', $after_tag);  
				?>
			</div>
			
			
			
	<?php  comments_template();  ?>
	
	<?php 
		} /*while*/
	}	/*if*/
	else
	{
		echo '<p>'.__('Sorry, no posts matched your criteria.', 'jamsession').'</p>';
	}
	?>	
		
	</div>

	<?php	get_sidebar();	?>

	<div class="clearfix"></div>
	
</div>
	

	

<?php	
	get_footer();
?>