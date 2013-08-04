<?php

$UN = $_POST["username"];
$ITEM = $_POST["item"];
$SAVE = $_POST["saveData"];


$connect = mysql_connect("localhost:3306", "root", "dba");
//echo($connect);

@mysql_select_db(testingthings) or die("Unable to connect to the database");


$query = mysql_query("SELECT `ID` FROM `login` where `username` ='aaaaa'");
$row = mysql_fetch_row($query);

$userID = $row[0];

$query = mysql_query("SELECT `item_key` FROM `items` where `name` = 'screwdriver'");
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