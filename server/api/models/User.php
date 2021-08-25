<?php

class User {
    // подключение к БД
    private $conn;
    private $table = 'users';

    // свойства объекта
    public $id;
    public $name;
    public $surname;
    public $email;
    public $password;
    public $created;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function clearData() {
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->surname = htmlspecialchars(strip_tags($this->surname));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));
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

        $sql = "INSERT INTO " . $this->table .
                " SET 
                name = :name,
                surname = :surname,
                email = :email,
                password = :password";

        // подготовка
        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":surname", $this->surname);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":password", $this->password);

        // выполняем запрос если успешно -> функция вернет true
        if($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }

        return false;
    }

    function login() {

        $sql = "SELECT
                id,
                name,
                surname,
                created
                FROM " . $this->table . 
                " WHERE email = :email AND
                password = :password";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);

        $stmt->execute();

        $num = $stmt->rowCount();

        if ($num > 0) {
            $row = $stmt->fetchAll();

            $this->id = $row['id'];
            $this->name = $row['name'];
            $this->surname = $row['surname'];
            $this->created = $row['created'];

            return true;
        }

        return false;
    }
}