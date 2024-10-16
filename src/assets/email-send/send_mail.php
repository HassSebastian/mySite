<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // E-Mail an den Empfänger senden
  $to = 'sebastian.hass76@gmail.com';
  $subject = 'Neue Message';
  $headers = "From: webmaster@example.com\r\n";
  $headers .= "Reply-To: webmaster@example.com\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  $emailMessage = "Neue Message:\n\n";
  $emailMessage .= "Name: $name\n";
  $emailMessage .= "Email: $email\n";
  $emailMessage .= "Nachricht: $message\n";

  // Versuche, die E-Mail zu senden und fange Fehler ab
  if (!mail($to, $subject, $emailMessage, $headers)) {
    echo json_encode(['status' => 'error', 'message' => 'Fehler beim Senden der E-Mail']);
    exit;
  }

  // Bestätigungsmail an den Absender senden
  $confirmationSubject = 'Ihre Nachricht wurde erfolgreich gesendet';
  $confirmationMessage = "Vielen Dank für Ihre Nachricht.\nIch habe Ihre Anfrage erhalten und werde mich in Kürze bei Ihnen melden.";
  $confirmationHeaders = "From: $to\r\n";
  $confirmationHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";

  // Versuche, die Bestätigungs-E-Mail zu senden
  if (!mail($email, $confirmationSubject, $confirmationMessage, $confirmationHeaders)) {
    echo json_encode(['status' => 'error', 'message' => 'Fehler beim Senden der Bestätigungsmail']);
    exit;
  }

  // JSON-Antwort an den TypeScript-Teil senden
  echo json_encode(['status' => 'success', 'message' => 'Message erfolgreich gesendet']);
} else {
  header('HTTP/1.1 405 Method Not Allowed');
  echo 'Method Not Allowed';
}
?>
