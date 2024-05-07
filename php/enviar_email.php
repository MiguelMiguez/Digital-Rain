<?php

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];

$my_mail = "miguelmiguezangel@gmail.com";

$subject = "Mensaje de contacto desde el sitio web";

$message = "Nombre: $name\n";
$message .= "Email: $email\n";
$message .= "Teléfono: $number\n";

$headers = "From: $my_mail";

$mail_success = mail($my_mail, $subject, $message, $headers);

header('Location:../page/email.html');
?>
