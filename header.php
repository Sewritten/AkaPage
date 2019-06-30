<!DOCTYPE html>
<!--
   AkaPage;
Copyright 2019 Seia-Soto. All rights reserved.
-->
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title><?php echo get_bloginfo('name'); ?></title>

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Seia-Soto">
    <meta name="description" content="<?php echo get_bloginfo('description'); ?>">

    <link rel="shortcut icon" href="assets/images/70131984_p0_master1200_avatarsize.jpg" />

    <link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_directory'); ?>/ui/semantic.min.css">
    <script
      src="https://code.jquery.com/jquery-3.1.1.min.js"
      integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
      crossorigin="anonymous"></script>
    <script src="<?php echo get_bloginfo('template_directory'); ?>/ui/semantic.min.js"></script>

    <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/style.css">
    <?php wp_head(); ?>
  </head>
  <body>
    <?php get_sidebar(); ?>

    <div class="pusher">
      <nav>
        <div class="ui borderless top fixed menu">
          <div class="ui container">
            <div class="item" onclick="location.href='<?php echo get_option('home'); ?>'">
              <?php
              $custom_logo_id = get_theme_mod('custom_logo');
              $logo = wp_get_attachment_image_src($custom_logo_id, 'full');

              if (has_custom_logo()) {
                echo "<img class=\"ui avatar image\" src=\"" . esc_url($logo[0]) . "\"> &nbsp;";
              }
              echo get_bloginfo('name');
               ?>
            </div>
            <a class="right item" onclick="$('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle')">
              <i class="bars icon"></i>
              메뉴
            </a>
          </div>
        </div>
      </nav>
