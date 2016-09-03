<?php
	get_header();
?>
	
<div id="main_content">

	<div id="archive_title"> 
			<?php echo __("Posts tagged under ","jamsession");
			?> <span class="archive_name">  <?php echo single_tag_title(); ?></span> 
	</div>
	
	<div id="post_content_container">
	<?php
	if (have_posts()) 
	{	
		while (have_posts()) 
		{
			the_post();
			?>
			<div class="post_item">
				<?php
					if ( has_post_thumbnail() ) 
					{
						?>
						<a href="<?php the_permalink(); ?>">
							<div class="post_image_container">
								<div class="post_icon_more"><i class="icon-link"></i></div>							
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
		} /*while*/?>
		<div id="content_loader"></div>
	</div>
		<div class="page_navigation">
			<div class="alignleft"><?php next_posts_link( '&laquo; Older posts' ); ?></div>
			<div class="alignleft"><?php previous_posts_link( 'Newer posts &raquo;' ); ?></div>
		</div>
		<?php
	}	/*if*/
	else
	{
		echo '<p>'.__('Sorry, no pages matched your criteria.', 'jamsession').'</p>';
	}
	?>	
	
	</div>


	<div class="clearfix"></div>
	
</div>
	

	

<?php	
	get_footer();
?>