SELECT * FROM sakila.actor;

SELECT first_name, last_name FROM sakila.actor;

SELECT address, district, city_id FROM sakila.address;

SELECT title, description, release_year FROM sakila.film;

SELECT DISTINCT first_name FROM sakila.actor;

SELECT * FROM sakila.customer;

SELECT DISTINCT store_id FROM sakila.customer;

SELECT DISTINCT first_name, last_name FROM sakila.actor;

SELECT * FROM sakila.country LIMIT 5;
SELECT * FROM sakila.country LIMIT 7 OFFSET 10;

SELECT * FROM sakila.address;



SELECT COUNT(address2) FROM sakila.address;

SELECT COUNT(2) FROM sakila.address;

SELECT COUNT(DISTINCT city_id)  FROM sakila.address;

SELECT COUNT(2) AS contagem FROM sakila.address;

-- spoilers das proximas aulas

SELECT district, COUNT(*) AS quantidade FROM sakila.address
GROUP BY district;

SELECT rating, COUNT(*) FROM sakila.film
GROUP BY rating;

-- Voltando para o presente

SELECT * FROM sakila.actor ORDER BY first_name, last_name DESC;


