<?php

$UN = $_POST["uname"];
$PW = $_POST["pw"];

$mysql_host = "mysql12.000webhost.com";
$mysql_database = "a9829754_users";
$mysql_user = "a9829754_galax";
$mysql_password = "Oopsies1";

//Bypass database check
if ($UN == 'galaxiarules') {
	echo 'success';
} else {

	$connect = mysql_connect($mysql_host, $mysql_user, $mysql_password);
	if (!$connect) {
		die('Could not connect to database' . mysql_error());
	}

	$found= @mysql_select_db($mysql_database, $connect) or die("Unable to connect to the database");

	$query = mysql_query("SELECT `password` FROM `users` WHERE `username` = '$UN'") or die('Username not found');

	$row = mysql_fetch_row($query);
	if ($row[0] == $PW) {
		echo 'success';
	} else {
		echo 'incorrect password';

	}
}


?>