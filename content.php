<section class="aka context">
  <h3 class="ui header"><?php the_date(); ?> <?php the_author_posts_link(); ?></h3>
  <h1 class="ui header"><?php the_title(); ?></h1>

  <?php the_content(); ?>

  <a class="ui primary button" href="<?php the_permalink(); ?>">
    계속 읽기
    <i class="right arrow icon"></i>
  </a>
</section>
