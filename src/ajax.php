<?php
require __DIR__ . '../vendor/autoload.php';

use \Curl\Curl;
$curl = new Curl();
$curl->get($_GET['ws'] . $_GET['userId']);

if ($curl->error) {
echo 'Error: ' . $curl->errorCode . ': ' . $curl->errorMessage . "\n";
} else {
echo 'Response:' . "\n";
var_dump($curl->response);
}