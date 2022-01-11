<?php
/**
 * Front to the WordPress application. This file doesn't do anything, but loads
 * wp-blog-header.php which does and tells WordPress to load the theme.
 *
 * @package WordPress
 */

/**
 * Tells WordPress to load the WordPress theme and output it.
 *
 * @var bool
 */
define( 'WP_USE_THEMES', true );

    
$url = 'https://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

$match = array('customize','admin','wp-admin');


if (strpos($url, $match) !== false) {
   echo $url;

} else {

//include_once __DIR__ . '/app.php';




// include_once(ABSPATH . 'app.php'); add to wp-config.php if wordpress | index.php if not wordpress

    }

/** Loads the WordPress Environment and Template */
require __DIR__ . '/wp-blog-header.php';
include_once( __DIR__ . '/app.php');