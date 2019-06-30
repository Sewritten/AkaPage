<?php
get_header();
?>

<header style="background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(<?php echo (has_header_image() ? get_header_image() : 'https://seia.io/assets/images/pexels-photo-2395249.jpeg'); ?>)">
  <div class="ui container">
    <h2 class="ui right aligned header">
      <?php echo get_bloginfo('name'); ?>
      <div class="sub header">
        <?php echo get_bloginfo('description'); ?>
      </div>
    </h2>
  </div>
</header>

<article class="ui basic container segment">
  <?php
    if (have_posts()) : while (have_posts()) : the_post();
      get_template_part('content', get_post_format());
    endwhile; endif;
   ?>
</article>

<?php
get_footer();
 ?>
