<?php

require __DIR__ . '/../vendor/autoload.php';
use \Curl\Curl;

$curl = new Curl();


switch ($_POST['method']) {

    case "get" :
        $curl->get($_POST['ws'], $_POST['params']);
        break;
    case "post" :
        $curl->post($_POST['ws'], $_POST['params']);
        break;
    case "put" :
        $curl->put($_POST['ws'], $_POST['params']);
        break;
    case "patch" :
        $curl->patch($_POST['ws'], $_POST['params']);
        break;
}


if ($curl->error) {
    echo 'Error: ' . $curl->errorCode . ': ' . $curl->errorMessage . "\n";
} else {
    echo 'Response:' . "\n";
    var_dump($curl->response);
}