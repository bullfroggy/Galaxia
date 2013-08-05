<?php

$UN = $_POST["uname"];
$PW = $_POST["pw"];

$mysql_host = "mysql12.000webhost.com";
$mysql_database = "a9829754_users";
$mysql_user = "a9829754_galax";
$mysql_password = "Oopsies1";

$connect = mysql_connect($mysql_host, $mysql_user, $mysql_password);
if (!$connect) {
	die('Could not connect to database' . mysql_error());
}


$found= @mysql_select_db($mysql_database, $connect) or die("Unable to connect to the database");

$query = "INSERT INTO `a9829754_users`.`users` (`U_ID`, `username`, `password`) 
	VALUES (NULL, '$UN', '$PW')";
if (mysql_query($query)) {
	//write successful
	echo 1;
} else {
	//write failed
	echo 0;
}


?>