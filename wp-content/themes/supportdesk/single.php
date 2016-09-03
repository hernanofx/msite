<?php get_header(); ?>

<?php 
// get the id of the posts page
$st_index_id = get_option('page_for_posts');
$st_page_sidebar_pos = get_post_meta( $st_index_id, '_st_page_sidebar', true );
?>

<?php get_template_part( 'page-header' ); 	?>

<!-- #primary -->
<div id="primary" class="sidebar-<?php echo $st_page_sidebar_pos; ?> clearfix"> 
<div class="ht-container">
  <!-- #content -->
  <section id="content" role="main">
  
  
    <?php while ( have_posts() ) : the_post(); ?>

    <article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?>>
    
      <h1 class="entry-title"><?php the_title(); ?></h1>
      
      <?php get_template_part('content', 'meta'); ?>
      
      <?php if ( 'has_post_thumbnail' ) { ?>
      <div class="entry-thumb">
        <?php the_post_thumbnail( 'post' ); ?>
      </div>
      <?php } ?>  

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- MPYE Banner -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2797981570132193"
     data-ad-slot="2682002065"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
      
      <div class="entry-content clearfix">
        <?php the_content(); ?>
        <?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'framework' ), 'after' => '</div>' ) ); ?>
      </div>

      <?php if (is_single() && has_tag()) { ?>
      <div class="tags">
        <?php the_tags(_e('Tagged:', 'framework') ,'',''); ?>
      </div>
      <?php } ?>
      
      <?php get_template_part('single', 'author-bio'); ?> 

    </article>


    <?php endwhile; // end of the loop. ?>

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- MPYE Footer -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2797981570132193"
     data-ad-slot="8588934869"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
    
<?php
// If comments are open or we have at least one comment, load up the comment template
 if ( comments_open() || '0' != get_comments_number() )
			comments_template( '', true );
?>

</section>
<!-- #content -->

<?php if ($st_page_sidebar_pos != 'off') {
  get_sidebar();
  } ?>

</div>
</div>
<!-- /#primary -->

<?php get_footer(); ?>