<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Content-type: application/json; charset=UTF-8');
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Origin, Access");

// includes
include_once 'config/Database.php';
include_once 'models/User.php';
include_once 'models/Session.php';

// if request is not POST method then die
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    die();
}

$database = new Database();
// instance of db connect
$db = $database->getConnection();

$user     = new User($db);
$session  = new Session($db);

// create vars with post info
$login    = $_POST['login'];
$email    = $_POST['email'];
$password = $_POST['password'];

// if post fields is not set
if (
    empty($login) or
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

// fill classes instances
$user->login    = $login;
$user->email    = $email;
$user->password = $password;

// clear fields from spaces and HTML tags
$user->clearData();

// check if email is not taken
if ($user->exist_email()) {

    http_response_code(400);
    echo json_encode([
        'status' => false,
        'message' => 'This email already exists'
    ]);
    die();
}

$created_user        = $user->create(); // true
$logged_user         = $user->login();

$session->user_id    = $user->id;
$session->user_email = $user->email;

$session->cleanData();

$generated_session   = $session->generate(); // true

if ($created_user AND $generated_session) {

    http_response_code(201);

    $cookie_params = [
        'expires' => 0,
        'path' => '/',
        'domain' => 'te1m0z.site',
        'secure' => true,
        'httponly' => true
    ];

    // cookies for session
    // setcookie('session', $session->session, $cookie_params);
    // cookie for user's role
    // setcookie('role', $user->role, $cookie_params);

    echo json_encode([
        'status'  => true,
        'message' => 'User successfully created',
        'data' => [
            'id'      => $user->id,
            'login'   => $user->login,
            'email'   => $user->email,
            'created' => $user->created,
            'status'  => $user->role
        ],
        'session' => $session->session
    ]);
    die();
}

// возврат ответа если что-то не сработало
http_response_code(400);
echo json_encode([
    'status' => false,
    'message' => 'Oops some error :('
]);
die();
