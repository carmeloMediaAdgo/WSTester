<?php
require __DIR__ . '/vendor/autoload.php';

use \Curl\Curl;

$curl = new Curl();
$curl->get('https://www.example.com/');

if ($curl->error) {
echo 'Error: ' . $curl->errorCode . ': ' . $curl->errorMessage . "\n";
} else {
echo 'Response:' . "\n";
var_dump($curl->response);
}