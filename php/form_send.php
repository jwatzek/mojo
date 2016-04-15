<?php

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$to = 'austin@mojo.fitness';
$subject = 'New Message from Contact Form';

// email body
$body .= "Name: ";
$body .= $name;
$body .= "\n";
 
$body .= "Email: ";
$body .= $email;
$body .= "\n";
 
$body .= "Message: ";
$body .= $message;
$body .= "\n";
 
// send email
mail($to, $subject, $body, "From:".$name." <".$email.">");
 
?>

