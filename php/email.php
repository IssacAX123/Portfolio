<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require 'C:\xampp\composer\vendor\autoload.php';

    $strJsonFileContents = file_get_contents("personel.json");
    $array = json_decode($strJsonFileContents, true);


    ini_set('smtp_port',25);

    $mail = new PHPMailer(TRUE);

    $mail->Host = "smtp.gmail.com";
    $mail-> isSMTP();
    $mail->Mailer = "smtp";
    $mail->SMTPAuth = TRUE;
    $mail->SMTPSecure = "tls";
    $mail->Username = $array["username"];
    $mail->Password = $array["password"];
    $mail->Port = 25;


    $mail->setFrom("issacabrahamiac@mail.com", $_POST["name"]."-".$_POST["email"]);


    $mail->addAddress("issaca32@gmail.com", 'Issac');


    $mail->Subject = $_POST["subject"];


    $mail->Body = $_POST["message"];


try {
    $mail->send();
    header("Location: ../index.html");
} catch (Exception $e) {
    echo "<p style='font-size: 42px;'> Error. Email directly to issaca32@gmail.com instead</p>";
    echo "<br>";
    echo "<a href='../index.html' style='font-size: 21px;'> Return</a>";
}
?>