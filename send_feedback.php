<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $feedback = $_POST["feedback"];
    
    $to = "swayampalrecha6@g";  // Replace with your email address
    $subject = "Feedback from $name";
    $message = "Name: $name\nEmail: $email\nFeedback:\n$feedback";
    
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "Invalid request";
}
?>
