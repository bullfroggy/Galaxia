<?php

$UN = $_POST["uname"];
$PW = $_POST["pw"];
$msg;


//Bypass database check
if ($UN == 'galaxiarules') {
	echo 'success';
} else {

	$connect = mysql_connect("localhost:3306", "root", "dba");
	//echo($connect);

	@mysql_select_db(testingthings) or die("Unable to connect to the database");

	$query = mysql_query("SELECT `Password` FROM `testingthings`.`login` WHERE `Username` = '$UN'") or die('Username not found');

	$row = mysql_fetch_row($query);
	if ($row[0] == $PW) {
		echo 'success';
	} else {
		echo 'incorrect password';

	}
}


?>