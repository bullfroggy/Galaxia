




<?php
$UN = $_POST["uname"];
$PW = $_POST["pw"];

$connect = mysql_connect("localhost:3306", "root", "dba");
//echo($connect);

@mysql_select_db(testingthings) or die("Unable to connect to the database");

//CHECK IF USERNAME IS TAKEN


$query = "INSERT INTO `testingthings`.`login` (`ID`, `Username`, `Password`) 
	VALUES (NULL, '$UN', '$PW')";
if (mysql_query($query)) {
	//write successful
	echo 1;
} else {
	//write failed
	echo 0;
}


?>