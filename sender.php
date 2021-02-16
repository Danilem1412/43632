<?php
$name = htmlspecialchars(strip_tags($_POST['name']));
$surname = htmlspecialchars(strip_tags($_POST['surname']));
$phone = htmlspecialchars(strip_tags($_POST['phone']));
$email = htmlspecialchars(strip_tags($_POST['email']));
$text = htmlspecialchars(strip_tags($_POST['text']));



$to = "breadsmiggles@gmail.com";
$date = date("d.m.Y");
$time = date("h:i");
$from = $email;
$subject = "Заявка c сайта";


$msg = "
    Имя: $name /n
    Фамилия: $surname /n
    Телефон: $phone /n
    Почта: $email /n
    Текст: $text";
mail($to, $subject, $msg, "From: $from ");

?>
<form action="sender.php">
	<input type="text" class="name" name="name" placeholder="Imię *" autocomplete="off" required>
	<input type="text" name="surname" placeholder="Miejscowość *" autocomplete="off" required>
	<input type="text" class="phone" name="phone" placeholder="Telefon kontaktowy *" autocomplete="off" required>
	<input type="email" name="email" placeholder="Adres mailowy *" autocomplete="off" required>
	<textarea name="text" id="" placeholder="Treść wiadomości" autocomplete="off"></textarea>
	<button type="button" class="send-form button">
		<div class="mask"></div>
		<div class="submask"></div>
		<span>Wyślij zapytanie</span>
		<div class="subbutton"></div>
		<div class="border">
		</div>
	</button>
</form>