<?php
// Recoge los datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];

// Dirección de correo electrónico a la que enviar el mensaje
$to = "contacto@digitalrain.online";

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

// Verifica si el correo electrónico se envió correctamente
if ($mail_success) {
    echo "<p>¡El mensaje se envió correctamente!</p>";
} else {
    echo "<p>¡Hubo un error al enviar el mensaje! Por favor, inténtalo de nuevo más tarde.</p>";
}
?>
