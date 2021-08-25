<?php

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
        $this->user_id    = trim(strip_tags($this->user_id));
        $this->user_email = trim(strip_tags($this->user_email));
    }

    public function exist_session() {
        
        $sql = "SELECT session FROM "
        . $this->table .
        " WHERE session = ? LIMIT 1";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(1, $this->session);
        $stmt->execute();

        $num = $stmt->rowCount();

        if ($num > 0) {
            return true;
        }

        return false;
    }

    public function generate() {

        $sql = "INSERT INTO " . $this->table .
                " SET 
                user_id = :user_id,
                user_email = :user_email,
                session = :session";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(":user_id",    $this->user_id);
        $stmt->bindParam(":user_email", $this->user_email);

        $mutation = $this->user_id . $this->user_email . time();
        $session_hashed = hash('sha1', $mutation);

        $stmt->bindParam(":session", $session_hashed);

        // выполняем запрос если успешно -> функция вернет true
        if($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            $this->session = $session_hashed;
            return true;
        }

        return false;
    }
}