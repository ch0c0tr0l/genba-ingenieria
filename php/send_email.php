<?php

function sendEmailPost() {
/*     ini_set('SMTP', 'smtp.hostinger.com'); // Configura el servidor SMTP
    ini_set('smtp_port', '465'); // Configura el puerto SMTP
    ini_set('sendmail_from', 'no-reply@genba-ingenieria.com'); // Configura el remitente predeterminado */
    // Verificar si los parámetros necesarios están presentes en la solicitud POST
    if (isset($_POST['to']) && isset($_POST['subject']) && isset($_POST['message'])) {
        ini_set('SMTP', 'smtp.hostinger.com'); // Configura el servidor SMTP
        ini_set('smtp_port', '465'); // Configura el puerto SMTP
        $to = $_POST['to'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $headers = "From: no-reply@genba-ingenieria.com";

        // Enviar el correo
        if (mail($to, $subject, $message, $headers)) {
            echo "Correo enviado exitosamente a $to.";
        } else {
            echo "Error al enviar el correo.";
        }
    } else {
        echo "Faltan parámetros en la solicitud POST (to, subject, message).";
    }
}

// Llamar a la función
sendEmailPost();
?>