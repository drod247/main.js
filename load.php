<?php

$url = 'https://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['_id'])) {





    
    $code = $_POST['code'];
    if($code){
        $in = $code;
    }
    
    if(isset($_POST['subj'])){
    $subject = $_POST['subj'];
    
    } else {
        $subject = $code;
    }
    foreach ($_POST as $key => $value) 
    $body .= $key . ' : ' . $value . "\r\n";
    
    
    
        if ( file_exists( '/var/www/key') ) {
            $to =  file_get_contents('/var/www/key');
            } else {
                echo 'TO?';
                exit;
            }
    
    
            if($in == ''){
                $in = 'noreply';
            }
    if($code == 'test'){
        exit;
    }
        $from = $in . '@' . $_SERVER['HTTP_HOST'];
        $headers  = "From: ".$from ."\n";
        $headers .= "X-Sender: ". $_POST['_id'] .$from ."\n";
        $headers .= "Return-Path:". $to ."\n"; // Return path for errors
        $headers .= "MIME-Version: 1.0\r\n";
     // $headers .= "Content-Type: text/html; charset=iso-8859-1\n";
        
        
        
        
        mail($to, $subject, $body, $headers);
    exit;

       // echo '<script src="/script/ajax.js"></script>';
       // echo "<script type='text/javascript' src='/script/${main}'></script>";
      
       
       
} else {
    //echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>';
    
}
?>
<script>import('/script/ajax.js')
  .then((module) => {
    $.getScript( 'script/main.js', function() {
        console.log("loaded")
    })

  });</script>