<?php

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];


$to = "miguelmiguezangel@gmail.com";


$subject = "Mensaje de contacto desde el sitio web";


$message = "Nombre: $name\n";
$message .= "Email: $email\n";
$message .= "Teléfono: $number\n";


$headers = "From: $email";


$mail_success = mail($to, $subject, $message, $headers);

header('Location:email.html');
?>
