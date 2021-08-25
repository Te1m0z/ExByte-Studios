<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Max-Age: 3600');

class Session {
    private $conn;
    private $table = 'sessions';

    public $id;
    public $user_id;
    public $user_email;
    public $session;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function cleanData() {
        $this->user_id = htmlspecialchars(strip_tags($this->user_id));
        $this->user_email = htmlspecialchars(strip_tags($this->user_email));
    }

    public function exist_session() {
        $sql = "SELECT FROM "
        . $this->table . 
        "";
    }

    public function generate() {
        $sql = "INSERT INTO " . $this->table .
                " SET 
                user_id = :user_id,
                user_email = :user_email,
                session = :session";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(":user_id", $this->user_id);
        $stmt->bindParam(":user_email", $this->user_email);
        $mutation = $this->user_id . $this->user_email . time();
        $this->session = hash('sha1', $mutation);
        $stmt->bindParam(":session", $this->session);

        // выполняем запрос если успешно -> функция вернет true
        if($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }

        return false;
    }
}