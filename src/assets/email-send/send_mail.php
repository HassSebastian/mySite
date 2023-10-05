<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // E-Mail an den Empfänger senden
  $to = 'seb-ha@gmx.de';
  $subject = 'Neue Message';
  $headers = "From: webmaster@example.com\r\n";
  $headers .= "Reply-To: webmaster@example.com\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  $emailMessage = "Neue Message:\n\n";
  $emailMessage .= "Name: $name\n";
  $emailMessage .= "Email: $email\n";
  $emailMessage .= "Nachricht: $message\n";

  mail($to, $subject, $emailMessage, $headers);

  // Bestätigungsmail an den Absender senden
  $confirmationSubject = 'Ihre Nachricht wurde erfolgreich gesendet';
  $confirmationMessage = 'Vielen Dank für Ihre Nachricht.\n';
  $confirmationMessage = 'Ich haben Ihre Anfrage erhalten und werde mich in Kürze bei Ihnen melden.';
  $confirmationHeaders .= "From: $to\r\n";
  $confirmationHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";

  // JSON-Antwort an den TypeScript-Teil senden
  $response = ['status' => 'success', 'message' => 'Message erfolgreich gesendet'];
  mail($email, $confirmationSubject, $confirmationMessage, $confirmationHeaders);
  echo json_encode($response);
} else {
  header('HTTP/1.1 405 Method Not Allowed');
  echo 'Method Not Allowed';
}
?>
