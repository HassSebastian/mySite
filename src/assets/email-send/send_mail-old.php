<!-- <?php

########### CONFIG ###############

$recipient = 'sebastian.hass76@gmail.com'; // Bitte hier deine E-Mail-Adresse angeben

########### CONFIG END ###########


if (empty($recipient)) {
    die("Bitte geben Sie die E-Mail-Adresse in Zeile 5 an.");
}

header('Content-Type: text/html; charset=utf-8');
// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Funktion zur korrekten Kodierung von Umlauten in E-Mails
function encodeEmailText($text) {
    $text = utf8_encode($text);
    return $text;
}

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

            // Kodieren Sie den Betreff und die Nachricht
            $encodedSubject = encodeEmailText($subject);
            $encodedMessage = encodeEmailText($message);

            if (mail($recipient, $encodedSubject, $encodedMessage, $headers)) {
                // Erfolgreich versendet, sende Bestätigung
                echo "gesendet";

                // Bestätigungs-E-Mail an den Absender senden
                $confirmationSubject = "Vielen Dank";
                $confirmationMessage = "Vielen Dank. Ich werde mich sehr bald bei Ihnen Melden.";

                // Kodieren Sie den Betreff und die Nachricht der Bestätigungs-E-Mail
                $encodedConfirmationSubject = encodeEmailText($confirmationSubject);
                $encodedConfirmationMessage = encodeEmailText($confirmationMessage);

                $confirmationHeaders = "From: $recipient";
                mail($email, $encodedConfirmationSubject, $encodedConfirmationMessage, $confirmationHeaders);
            } else {
                // Fehler beim Versenden
                echo "fehler";
            }
        } else {
            echo "ungültige_email";
        }
    } else {
        echo "fehlende_felder";
    }
} else {
    header("Allow: POST", true, 405);
    exit;
}
?> -->


<?php

########### CONFIG ###############

$recipient = 'sebastian.hass76@gmail.com'; // Bitte hier deine E-Mail-Adresse angeben

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
            $headers = "From: " . $email . "\r\n";
            $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

            $message = "Vielen Dank für Ihre E-Mail. Ich werde so bald wie möglich antworten.\r\n\r\n" . $message;

            if (mail($recipient, $subject, $message, $headers)) {
                // E-Mail erfolgreich gesendet
                echo "success";
            } else {
                echo "error";
            }
        } else {
            echo "error";
        }
    } else {
        echo "error";
    }
} else {
    header("Allow: POST", true, 405);
    exit;
}
?>
