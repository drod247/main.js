
<?php
    $_dir_ = $_SERVER['DOCUMENT_ROOT'];
    $me = basename($_SERVER['PHP_SELF']);

    $app = 'app.php';
    $main = 'main.js';
    $css = 'vsdg.css';
    $update = 'update.php';
if ( file_exists( './script/' . $main ) ) {
        unlink( './script/' . $main);


                $components = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/main.js');
                $myfile = fopen('./script/'. $main, "w") or die("Unable to open $main!");
                fwrite($myfile, $components);
                fclose($myfile);
        
}




if ( file_exists( './' . $app ) ) {
        unlink( './' . $app);

         
        $library = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/app.php');
                 $myfile = fopen('./'. $app, "w") or die("Unable to open $app!");
                 fwrite($myfile, $library);
                 fclose($myfile);
}





if ( file_exists( './css/' . $css ) ) {
        unlink( './css/' . $css);

                 
        $style = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/vsdg.css');
                $myfile = fopen('./css/'. $css, "w") or die("Unable to open $css!");
                fwrite($myfile, $style);
                fclose($myfile);
                         
}
                          

if ( file_exists( './' . $update ) ) {

                 
        $up = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/update.php');
                $myfile = fopen('./'. $update, "w") or die("Unable to open $update!");
                fwrite($myfile, $up);
                fclose($myfile);
                         
}
         

    ?>
<meta http-equiv="refresh" content="3;url=index.php"> 