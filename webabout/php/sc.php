<?php
$user=@$_GET["username"];
$tell=@$_GET["tell"];
$email=@$_GET["email"];
$consa=@$_GET["content"];
define("HOST","localhost");
define("USERNAME","root");
define("PASSWORD","");
define("DATABASE","grtj");
$con=new mysqli(HOST,USERNAME,PASSWORD,DATABASE);
if($con->connect_error){
    echo "链接失败";
    exit();
}else{
//    echo "成功";
    $con->set_charset('utf8');
};

$zcs="select  * from user where username=$user";
$ccw=$con->query($zcs);
if(empty($ccw->num_rows)){

    $sql="insert into user(username,email,tell,content)values('$user','$email','$tell','$consa')";
    $rul=$con->query($sql);

    include '../time.html';
}else{
    echo "该用户已注册";
}
?>