
CREATE DATABASE IF NOT EXISTS ftamangaapi;

USE ftamangaapi;

CREATE TABLE IF NOT EXISTS products(
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(150) NOT NULL,
  price FLOAT NOT NULL DEFAULT 0,
  editorial VARCHAR(150) NOT NULL DEFAULT 'Desconocida',
  img VARCHAR(150) DEFAULT NULL,
  year INT NOT NULL
);
