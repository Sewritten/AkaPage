<?php
get_header();
the_post();
?>

<article class="ui basic container segment aka context" style="padding-top: 75px;">
  <h1 class="ui header">
    <?php the_title(); ?>
  </h1>
</article>

<?php
the_content();
get_footer();
 ?>
