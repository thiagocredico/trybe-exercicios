-- início dp script de criação do banco Pixar

DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);

INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('Vida de inseto', 'Andrew Staton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Carros', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Valente', 'Brenda Chapman', 2012, 98),
         ('Luca', 'Andrew Staton', 2021, 101),
         ('Frozen II', 'Brad Bird', 2016, 75);

INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000); 

-- fim do script de criação do banco Pixar 

-- funções de agregação
SELECT AVG(rental_duration) FROM sakila.film;
SELECT MIN(rental_duration) FROM sakila.film;
SELECT MAX(rental_duration) FROM sakila.film;
SELECT SUM(rental_duration) FROM sakila.film;
SELECT COUNT(rental_duration) FROM sakila.film;

-- agrupamento por director e agregação com COUNT
SELECT COUNT(title), director FROM Pixar.Movies GROUP BY director;

-- outras funções de agregação com GROUP BY
SELECT 
    COUNT(title) as quantidade_filmes, 
    director,
    SUM(length_minutes) as duracao_filmes,
    AVG(length_minutes) as media_duracao,
    MAX(length_minutes) as maior_duracao,
    MIN(length_minutes) as menor_duracao
FROM
    Pixar.Movies
GROUP BY director;

-- 

SELECT 
    COUNT(email) as qtd_email_cadastrados, 
    store_id
FROM
    sakila.customer
GROUP BY store_id;

-- 

SELECT 
    AVG(rental_rate)
FROM
    sakila.film;

-- 

SELECT 
    AVG(rental_rate),
    rating
FROM
    sakila.film
GROUP BY rating;

-- 

SELECT 
    MIN(rental_rate),
    rating
FROM
    sakila.film
GROUP BY rating;

-- 

SELECT 
    MAX(rental_rate),
    rating
FROM
    sakila.film
GROUP BY rating;

--

SELECT 
    SUM(rental_rate),
    rating
FROM
    sakila.film
GROUP BY rating;

-- utilização do having para filtrar
SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
HAVING COUNT(*) >= 2;

-- utilização do having para filtrar e uso de alias
SELECT district, COUNT(*) AS district_count
FROM sakila.address
GROUP BY district
HAVING district_count >= 2;

-- comandos condicionais: IF
SET @age = 14;
SELECT IF(@age < 18, 'Minor of age', 'Not minor of age');

-- 

SET @is_entrance_allowed = true;
SELECT IF(@is_entrance_allowed = 1, 'Entrance allowed', 'Entrance not allowed');

-- comandos condicionais: CASE
SELECT 
    title, release_year, length,
    CASE
        WHEN length <= 60 THEN 'Short duration'
        WHEN length > 60 AND length <= 150 THEN 'Medium duration'
        ELSE 'Long duration'
    END AS film_duration_type
FROM
    sakila.film;

-- funções para manipulação de string

-- retorna o tamanho da string
SELECT LENGTH('Curso BeTrybe');

-- transforma todas em maiúsculas
SELECT UCASE('Curso BeTrybe');

-- transforma todas em minúsculas
SELECT LCASE('Curso BeTrybe');

-- substitui uma string por outra
SELECT REPLACE('Curso BeTrybe', 'e', 'eeee');


-- extrai 5 caracteres a partir da esquerda
SELECT LEFT('Curso BeTrybe', 5); 

-- extrai 5 caracteres a partir da direita
SELECT RIGHT('Curso BeTrybe', 5); 

-- extrai parte de uma string, começando na posição 6
SELECT SUBSTRING('Curso BeTrybe', 6);

-- extrai 4 caracteres de uma string, começando na posição 2 
SELECT SUBSTRING('Curso BeTrybe', 2, 4); 

-- extrai 6 caracteres de uma string, começando na posição 5, da direita para a esquerda
SELECT SUBSTRING('Curso BeTrybe', -5, 6); 

-- Funções aritméticas
SELECT 5 + 5; 
SELECT 5 - 2; 
SELECT 5 * 2;
SELECT 5 / 3;  

-- divisão inteira
SELECT 20 DIV 3; 

-- retornar o resto da divisão
SELECT 18 MOD 3; 

-- arredondamento
SELECT ROUND(20.49); 

-- arredonda para o inteiro mais próximo para cima
SELECT CEIL(20.51);

-- arredonda para o inteiro mais próximo para baixo
SELECT FLOOR(10.51); 

-- potenciação
SELECT POW(2, 5); 

-- raiz quadrada
SELECT SQRT(16); 

-- gerar valores aleatórios entre 0 (incluso) e 1.0 (excluso)
SELECT RAND();

-- gerar valor aleatório entre 5 e 14
SELECT FLOOR(5 + (RAND() * 10));

SELECT CURRENT_DATE(); -- yyyy-mm-dd Atual
SELECT NOW(); -- yyyy-mm-dd hh-mm-ss Atual

-- diferença em dias
SELECT DATEDIFF('2020-05-31', '2020-05-01');

-- diferença de tempo 
SELECT TIMEDIFF('05:15:30', '06:15:30');
SELECT TIMEDIFF('05:15:30', '05:12:30');