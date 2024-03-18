<?php
// Recoge los datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];

// Dirección de correo electrónico a la que enviar el mensaje
$to = "miguelmiguezangel@gmail.com";

// Asunto del correo electrónico
$subject = "Mensaje de contacto desde el sitio web";

// Mensaje a enviar (puedes personalizarlo como desees)
$message = "Nombre: $name\n";
$message .= "Email: $email\n";
$message .= "Teléfono: $number\n";

// Cabeceras para el correo electrónico
$headers = "From: $email";

// Envía el correo electrónico
$mail_success = mail($to, $subject, $message, $headers);

header('Location:index.html');
?>
