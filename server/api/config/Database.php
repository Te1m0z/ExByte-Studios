<?php

class Database {
    // данные для коннекта
    private $host = 'localhost';
    private $db = 'exbyte_studios';
    private $user = 'root';
    private $password = 'parol123';
    private $charset = 'utf8';

    // доступный коннект
    public $conn;
    // функция для коннекта
    public function getConnection() {
        $this->conn = null;

        try {

            $dsn = "mysql:host=" . $this->host . ";dbname=" . $this->db . ";charset=" . $this->charset . "";

            $opt = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
            ];

            $this->conn = new PDO($dsn, $this->user, $this->password, $opt);

        } catch (PDOException $err) {
            echo 'Connection error: ' . $err->getMessage();
            die();
        }
        
        return $this->conn;
    }
}