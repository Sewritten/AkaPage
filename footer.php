<?php
  $menuLocations = get_nav_menu_locations();

  $menuIdentify = $menuLocations['first_footer_menu'];
  $first_footer_menu = wp_get_nav_menu_items($menuIdentify);

  $menuIdentify = $menuLocations['second_footer_menu'];
  $second_footer_menu = wp_get_nav_menu_items($menuIdentify);
 ?>

      <footer class="ui inverted vertical footer segment">
        <div class="ui center aligned container">
          <div class="ui stackable inverted divided grid">
            <div class="four wide column">
              <div class="ui inverted link list">
                <?php
                foreach ($first_footer_menu as $item) {
                  ?>
                  <a class="item" href="<?php echo $item->url; ?>">
                    <?php echo $item->title; ?>
                  </a>
                  <?php
                }
                 ?>
              </div>
            </div>
            <div class="four wide column">
              <div class="ui inverted link list">
                <?php
                foreach ($second_footer_menu as $item) {
                  ?>
                  <a class="item" href="<?php echo $item->url; ?>">
                    <?php echo $item->title; ?>
                  </a>
                  <?php
                }
                 ?>
              </div>
            </div>
            <div class="eight wide column">
              <h4 class="ui inverted header"><?php echo get_bloginfo('name'); ?></h4>
              <p><?php echo get_bloginfo('description'); ?></p>
            </div>
          </div>
          <div class="ui inverted section divider"></div>
          <?php
          $custom_logo_id = get_theme_mod('custom_logo');
          $logo = wp_get_attachment_image_src($custom_logo_id, 'full');

          if (has_custom_logo()) {
            echo "<img class=\"ui centered mini image\" src=\"" . esc_url($logo[0]) . "\"> &nbsp;";
          }
           ?>
          <div class="ui horizontal inverted small divided link list">
            <a class="item" href="https://github.com/Seia-Soto/AkaPage">
              Theme 'AkaPage' by Seia-Soto
            </a>
            <a class="item" href="<?php echo get_option('home'); ?>">
              Copyright <?php echo date("Y"); ?> <?php echo get_bloginfo('name'); ?>. All rights reserved.
            </a>
          </div>
        </div>
      </footer>
    </div>

    <?php wp_footer(); ?>
  </body>
</html>
