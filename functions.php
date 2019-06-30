<?php
add_theme_support('custom-logo');
add_theme_support('custom-header');
add_theme_support('post-thumbnails');

// NOTE: Changing excerpt length
function new_excerpt_length($length) {
  return 100;
}
add_filter('excerpt_length', 'new_excerpt_length');

// NOTE: Changing excerpt more
function new_excerpt_more($more) {
  return '...';
}
add_filter('excerpt_more', 'new_excerpt_more');

// NOTE: Primary menu support
function theme_register_menus() {
  register_nav_menus(
    array(
      'primary_menu' => __('Primary Menu', 'AkaPage'),
      'first_footer_menu' => __('First footer menu', 'AkaPage'),
      'second_footer_menu' => __('Second footer menu', 'AkaPage')
    )
  );
}
add_action('init', 'theme_register_menus');
 ?>
