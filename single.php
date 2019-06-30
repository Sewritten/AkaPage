<?php
get_header();
the_post();
?>

<article class="ui basic container segment aka context" style="padding-top: 75px;">
  <h3 class="ui header"><?php echo get_the_date(); ?> <?php the_author_posts_link(); ?></h3>
  <h1 class="ui header">
    <?php the_title(); ?>
  </h1>

  <?php
  if (has_post_thumbnail(get_the_ID())) {
   ?>
    <div class="ui basic segment">
      <img class="ui rounded fluid image" src="<?php echo wp_get_attachment_url(get_post_thumbnail_id()); ?>">
    </div>
  <?php
  }

  the_content();
   ?>
</article>

<?php
get_footer();
 ?>
