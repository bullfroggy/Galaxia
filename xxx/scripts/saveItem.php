<?php

$UN = $_POST["username"];
$ITEM = $_POST["item"];
$SAVE = $_POST["saveData"];

$mysql_host = "mysql12.000webhost.com";
$mysql_database = "a9829754_users";
$mysql_user = "a9829754_galax";
$mysql_password = "Oopsies1";

$connect = mysql_connect($mysql_host, $mysql_user, $mysql_password);
if (!$connect) {
	die('Could not connect to database' . mysql_error());
}
$found = @mysql_select_db($mysql_database, $connect) or die("Unable to connect to the database");


$query = mysql_query("SELECT `U_ID` FROM `users` where `username` = '$UN'");
$row = mysql_fetch_row($query);

$userID = $row[0];

$query = mysql_query("SELECT `item_key` FROM `items` where `name` = '$ITEM'");
$row = mysql_fetch_row($query);
$itemID = $row[0];

$query = mysql_query("SELECT `U_ID`, `item_key` FROM `user_items` where `U_ID` = '$userID' AND `item_key` = '$itemID'");
$row = mysql_fetch_row($query);

if ($SAVE == 0) {
	if($row[0]) {
		echo 1;
	} else {
		echo 0;
	}
} else {
	if (!$row[0]) {
		$query = "INSERT INTO `user_items` (`U_ID`, `item_key`)
		VALUES ('$userID', '$itemID')";
		mysql_query($query);
	}
}

/*

$query = mysql_query("INSERT INTO `user_items`(`U_ID`, `item_key`) VALUES (
SELECT `ID` FROM `login` WHERE `username` = 'aaaaa',
SELECT `item_key` FROM `items` WHERE `name` = 'screwdriver')");

*/


?>	