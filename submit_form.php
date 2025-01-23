<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $service = htmlspecialchars($_POST['service']);
    $message = htmlspecialchars($_POST['message']);
    
    // Email configuration
    $to = "info@taxwhiz.co";
    $subject = "New contact form submission";
    $body = "Name: $name\nEmail: $email\nService: $service\nMessage:\n$message";
    $headers = "From: $email";
    
    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        header("Location: thank_you.html"); // Redirect to thank you page after successful submission
        exit();
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
}
?>
