<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $mobileModel = $_POST["mobileModel"];
    $phoneNumber = $_POST["phoneNumber"];
    $message = $_POST["message"];

    $to = "storework88@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $name <$to>";

    $fullMessage = "Name: $name\n";
    $fullMessage .= "Mobile Model: $mobileModel\n";
    $fullMessage .= "Phone Number: $phoneNumber\n";
    $fullMessage .= "Message:\n$message";

    mail($to, $subject, $fullMessage, $headers);
    echo "Form submitted successfully!";
} else {
    // Redirect back to the form if accessed directly
    header("Location: index.html");
    exit();
}
?>
