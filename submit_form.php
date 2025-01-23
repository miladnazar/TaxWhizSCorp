<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $service = htmlspecialchars($_POST['service']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = "info@taxwhiz.co";  // This is the email address where form submissions will be sent.

    // Set the email subject
    $subject = "New Contact Form Submission from $name";

    // Create the email content
    $body = "You have received a new message from your website contact form.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Service: $service\n".
            "Message: $message";

    // Set the email headers
    $headers = "From: $email" . "\r\n" .  
               "Reply-To: $email" . "\r\n" .  
               "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // If email is sent, redirect the user to a thank-you page
        header('Location: thank_you.html');
        exit;
    } else {
        // If email is not sent, display an error message
        echo "Error sending email. Please try again.";
    }
}
?>

