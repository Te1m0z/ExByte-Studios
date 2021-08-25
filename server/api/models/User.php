<?php

class User {
    // подключение к БД
    private $conn;
    private $table = 'users';

    // свойства объекта
    public $id;
    public $login;
    public $email;
    public $password;
    public $role;
    public $created;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function clearData() {
        $this->login    = trim(strip_tags($this->login));
        $this->email    = trim(strip_tags($this->email));
        $this->password = trim(strip_tags($this->password));
    }

    public function exist_id() {
        $sql = "SELECT id FROM " . $this->table . " WHERE id = ? LIMIT 1";
        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(1, $this->id);
        $stmt->execute();

        $num = $stmt->rowCount();

        if ($num > 0) {
            return true;
        }

        return false;
    }

    public function exist_email() {

        $sql = "SELECT email FROM " . $this->table . " WHERE email = ? LIMIT 1";
        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(1, $this->email);
        $stmt->execute();

        $num = $stmt->rowCount();

        if ($num > 0) {
            return true;
        }

        return false;
    }

    // создание пользователя
    function create() {

        $sql = "INSERT INTO "
                . $this->table .
                " SET 
                login = :login,
                email = :email,
                password = :password";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(":login",    $this->login);
        $stmt->bindParam(":email",    $this->email);
        $stmt->bindParam(":password", $this->password);

        $inserted = $stmt->execute();

        if ($inserted) {

            return true;
        }

        return false;
    }

    function login() {

        $sql = "SELECT
                id,
                login,
                role,
                created,
                FROM " . $this->table . 
                " WHERE email = :email AND
                password = :password";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(':email',    $this->email);
        $stmt->bindParam(':password', $this->password);

        $stmt->execute();

        $num = $stmt->rowCount();

        if ($num > 0) {
            $row = $stmt->fetchAll();

            $this->id      = $row['id'];
            $this->login   = $row['login'];
            $this->role    = $row['role'];
            $this->created = $row['created'];

            return true;
        }

        return false;
    }
}