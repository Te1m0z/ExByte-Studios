<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Content-type: application/json; charset=UTF-8');
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Origin, Authorization");

// includes
include_once 'config/Database.php';
include_once 'models/User.php';
include_once 'models/Session.php';

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    die();
}

$database = new Database();
$db = $database->getConnection();

$user    = new User($db);
// $session = new Session($db);

$name     = $_POST['name'];
$surname  = $_POST['surname'];
$email    = $_POST['email'];
$password = $_POST['password'];

if (
    empty($name) or
    empty($surname) or
    empty($email) or
    empty($password)
) {
    http_response_code(400);
    echo json_encode([
        'status' => false,
        'message' => 'All fields must be filled'
    ]);
    die();
}

// данные формы
$user->name     = $name;
$user->surname  = $surname;
$user->email    = $email;
$user->password = $password;

// очищаем данные от html тегов
$user->clearData();

// если такой email занят
$email_exists = $user->exist_email();

if ($email_exists) {
    http_response_code(400);
    echo json_encode([
        'status' => false,
        'message' => 'this email already exists'
    ]);
    die();
}

// если email свободен
$created   = $user->create();

$session->user_id = $user->id;
$session->user_email = $email;
$session->cleanData();

$generated = $session->generate();

if ($created AND $generated) {
    http_response_code(201);

    setcookie('session', 'test name is', [
        'expires' => 7200,
        'path' => '/registration',
        'domain' => '127.0.20.20',
        'secure' => true,
        'httponly' => false,
        'samesite' => 'Lax'
    ]);

    echo json_encode([
        'status'  => true,
        'message' => 'User created',
        'data' => [
            'id'      => $user->id,
            'name'    => $user->name,
            'surname' => $user->surname,
            'email'   => $user->email,
        ],
        'session' => [
            'id'   => $session->id,
            'hash' => $session->session
        ]
    ]);
    die();
}

// возврат ответа если что-то не сработало
http_response_code(400);
echo json_encode([
    'status' => false,
    'message' => 'Oops some error'
]);
die();
