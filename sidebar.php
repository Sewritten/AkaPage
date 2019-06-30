<div class="ui right borderless sidebar inverted vertical menu">
  <?php
    $menuLocations = get_nav_menu_locations();
    $menuIdentify = $menuLocations['primary_menu'];

    $primaryMenu = wp_get_nav_menu_items($menuIdentify);

    foreach ($primaryMenu as $item) {
      ?>
      <a class="item" href="<?php echo $item->url; ?>">
        <?php echo $item->title; ?>
      </a>
      <?php
    }
   ?>
</div>
