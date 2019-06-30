<?php
get_header();
?>
<article class="ui basic container segment aka context" style="padding-top: 75px;">
  <section class="ui center aligned container aka context">
    <img class="ui centered small circular image" src="<?php echo get_avatar_url(get_the_author_email(), 'full'); ?>">
    <h1><?php the_author_meta('display_name'); ?></h1>
    <p><?php echo nl2br(get_the_author_meta('description')); ?></p>
  </section>

  <section class="aka context">
    <section class="aka heading">
      <h2 class="ui horizontal divider header">최근 <?php the_author_meta('display_name'); ?>님이 작성한 글:</h2>
    </section>

    <?php
      $authorPosts = get_posts(array(
        'author' => get_the_author_email()
      ));

      if ($authorPosts) {
        foreach($authorPosts as $post) {
          setup_postdata($post);
          get_template_part('content', get_post_format());
        }
      }
     ?>
  </section>
</article>
<?php
get_footer();
 ?>
