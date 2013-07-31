




<?php
$UN = $_POST["uname"];
$PW = $_POST["pw"];

$connect = mysql_connect("localhost:3306", "root", "dba");
echo($connect);

@mysql_select_db(testingthings) or die("Unable to connect to the database");

$query = "INSERT INTO `testingthings`.`login` (`ID`, `Username`, `Password`) 
	VALUES (NULL, '$UN', '$PW')";
mysql_query($query);



/*
$query = "SELECT * FROM testing";




<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
<script type = "text/javascript">

$(document).ready(function() {
document.cookie = 'Username=testName'; 
document.cookie = 'Password=testPass';

</script>
*/

?>
<html>
<body>

Username is: <?php echo $_POST["uname"]; ?> </br>
Password is: <?php echo $_POST["pw"];   ?>   </br>

</body>
</html>