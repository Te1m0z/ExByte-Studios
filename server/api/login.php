<?php

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// includes
include_once 'config/Database.php';
include_once 'models/User.php';
// connect to db
$database = new Database();
$db = $database->getConnection();

$user = new User($db);

if (
    empty($_POST['email']) or
    empty($_POST['password'])
) {
    http_response_code(400);
    echo json_encode([
        'status' => false,
        'message' => 'All fields must be filled'
    ]);
    die();
}

$user->email = $_POST['email'];
$user->password = $_POST['password'];
// проверим есть ли такой email
$email_exists = $user->exist_email();
// если такого email нет
if (!$email_exists) {
    http_response_code(400);
    echo json_encode([
        'status' => false,
        'message' => 'wrong email or password'
    ]);
    die();
}

// такой email существует, проверяем пароли
// password_verify($password, $user->password)

$logged = $user->login();

if ($logged) {

    // send cookie (session id)
    http_response_code(200);
    echo json_encode([
        'status' => true,
        'message' => 'You are logged in!',
        'data' => [
            'id' => $user->id,
            'firstname' => $user->firstname,
            'lastname' => $user->lastname,
            'created' => $user->created,
        ]
    ]);
    die();
}

// ответ по дефолту
http_response_code(400);
echo json_encode([
    'status' => false,
    'message' => 'wrong email or password'
]);