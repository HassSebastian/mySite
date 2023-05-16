<?php

########### CONFIG ###############

$recipient = 'info@sebastian-hass.de'; // Bitte hier deine E-Mail-Adresse angeben
$redirect = 'success.html';

########### CONFIG END ###########


if (empty($recipient)) {
    die("Bitte geben Sie die E-Mail-Adresse in Zeile 5 an.");
}

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    // Prüfen, ob die erforderlichen Felder vorhanden sind
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Überprüfen, ob die E-Mail-Adresse gültig ist
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $subject = "Kontakt von " . $name . " - E-Mail: " . $email;
            $headers = "From: $email";

            if (mail($recipient, $subject, $message, $headers)) {
                // Erfolgreich versendet, Weiterleitung zur Erfolgsseite
                header("Location: $redirect");
                exit();
            } else {
                die("Die E-Mail konnte nicht gesendet werden.");
            }
        } else {
            die("Die angegebene E-Mail-Adresse ist ungültig.");
        }
    } else {
        die("Es fehlen einige erforderliche Felder.");
    }
} else {
    header("Allow: POST", true, 405);
    exit;
}
