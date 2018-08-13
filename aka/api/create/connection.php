<?php
require_once(dirname(__FILE__) . '../get/configurations.php');

$link = new MySQLi($database['host'], $database['user'], $database['password'], $database['name']);
if ($link -> connect_errno) {
  die('Connection Error: ' . $link -> connect_error);
}
 ?>
