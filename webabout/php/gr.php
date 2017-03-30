<?php
$user=$_GET['username'];
$email=$_GET['email'];
$tell=$_GET['tell'];
$con=$_GET['content']
$link=mysqli_connect('localhost','root','','grtj',3306);
$sql="insert into user (`username`,`email`,`tell`,`content`) values('{$user}','{$email}',{$tell},{$con})";
$result=mysqli_query($link,$sql);
if (mysqli_affected_rows($link)>0) {
	echo "1";
	return ;
}else{
	echo "2";
	return ;
}

?>