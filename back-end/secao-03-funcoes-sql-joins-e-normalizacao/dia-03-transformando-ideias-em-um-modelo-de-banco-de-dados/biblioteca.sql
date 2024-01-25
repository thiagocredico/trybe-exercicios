CREATE DATABASE IF NOT EXISTS Biblioteca;

USE Biblioteca;

CREATE TABLE Autor(
	autor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE Categoria(
	categoria_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE Cliente(
	cliente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE Livros(
	livro_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    autor_id INT NOT NULL,
    categoria_id INT NOT NULL,
    FOREIGN KEY (autor_id) REFERENCES Autor (autor_id),
    FOREIGN KEY (categoria_id) REFERENCES Categoria (categoria_id)
);

CREATE TABLE Historico(
	livro_id INT NOT NULL,
    cliente_id INT NOT NULL,
    data_aluguel DATE NOT NULL,
    data_retorno DATE,
    CONSTRAINT PRIMARY KEY (livro_id, cliente_id),
    FOREIGN KEY (livro_id) REFERENCES Livros (livro_id),
    FOREIGN KEY (cliente_id) REFERENCES Cliente (cliente_id)
);


