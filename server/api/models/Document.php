<?php

class Document {
    // подключение к БД
    private $conn;
    private $table = 'documents';

    // свойства объекта
    public $id;
    public $user_id;    // +
    public $user_email; // +
    public $data;
    public $created;

    // public $fetched_data;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function cleanData() {
        $this->user_id = htmlspecialchars(strip_tags($this->user_id));
        $this->user_email = htmlspecialchars(strip_tags($this->user_email));
        $this->data = htmlspecialchars(strip_tags($this->data));
    }

    function create() {
        $sql = "INSERT INTO " . $this->table .
                " SET user_id = :user_id,
                user_email = :user_email,
                data = :fields";
        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(1, $this->user_id);
        $stmt->bindParam(2, $this->user_email);
        $stmt->bindParam(3, $this->data);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    function get_documents() {
        $sql = "SELECT 
                id,
                data,
                created,
                modified FROM "
                . $this->table .
                " WHERE 
                user_id = :user_id AND 
                user_email = :user_email";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(1, $this->user_id);
        $stmt->bindParam(2, $this->user_email);

        if ($stmt->execute()) {
            $row = $stmt->fetchAll();

            $this->id = $row['id'];
            $this->data = $row['data'];
            $this->created = $row['created'];
            // $this->fetched_data = $row;
            
            return true;
        }

        return false;
    }
}