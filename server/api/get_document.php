<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: POST');
header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// includes
include_once 'config/Database.php';
include_once 'models/Document.php';
include_once 'models/User.php';

$database = new Database();
$db = $database->getConnection();

$document = new Document($db);
$user     = new User($db);

$user_id = $_POST['user_id'];
$user_email = $_POST['user_email'];

if (empty($user_id) or empty($user_email)) {
    http_response_code(400);
    echo json_encode([
        'status' => false,
        'message' => 'All fields must be filled'
    ]);
    die();
}

// данные формы
$document->user_id    = $user_id;
$document->user_email = $user_email;

// проврека на существование такого User
$user->id    = $user_id;
$user->email = $user_email;

$user_id_exists    = $user->exist_id();
$user_email_exists = $user->exist_email();

// есть ли такой
if ($user_id_exists AND $user_email_exists) {

    $fetched = $document->get_documents();

    if ($fetched) {
        http_response_code(201);
        echo json_encode([
            'status' => true,
            'message' => 'Documents fetched',
            'data' => [
                'id' => $document->id,
                'data' => $document->data,
                'created' => $document->created,
            ]
        ]);
        die();
    }

} else {
    http_response_code(400);
    echo json_encode([
        'status' => false,
        'message' => 'user doesnt exist'
    ]);
    die();
}

// default response
http_response_code(401);
echo json_encode([
    'status' => false,
    'message' => 'some err'
]);
die();
