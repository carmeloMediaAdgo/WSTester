<?php

$con = pg_connect("host=localhost port=5432 dbname=plantillabbdd user=postgres password=adgo2012");
$sql = "insert into wstester (url,json,fecha) values
('" . $_POST['url'] . "','" . $_POST['json'] . "','" . date("Y-m-d h:i:sa") . "')";
$result = pg_query($con, $sql);

var_dump($result);
?>