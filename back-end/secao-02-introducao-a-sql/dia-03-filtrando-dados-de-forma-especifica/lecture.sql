SELECT 
    first_name AS primeiro_nome, last_name AS ultimo_nome
FROM
    sakila.actor
WHERE first_name = 'adam' AND last_name = 'GRant';

-- 

SELECT 
    COUNT(*)
FROM
    sakila.film
WHERE
    rental_duration = 6 AND rating = 'R';

--



SELECT 
    title, rental_duration, rating
FROM
    sakila.film
WHERE
    rental_duration = 6 AND ( rating = 'R' OR rating = 'PG-13');
    
--





SELECT 
	title, rental_duration, rating 
FROM 
	sakila.film 
WHERE 
	rating  IN ('PG','G', 'NC-17');
    
--





SELECT 
	title, rental_duration, rating 
FROM 
	sakila.film 
WHERE 
	rating  NOT IN ('PG','G', 'NC-17');


--


SELECT 
    film_id, title, length
FROM
    sakila.film
    WHERE length BETWEEN 50 AND 130
ORDER BY length;
-- 50 e 130



--





SELECT 
    actor_id, first_name
FROM
    sakila.actor 
    WHERE first_name BETWEEN 'BELA' AND 'DUSTIN'
ORDER BY first_name;



--


SELECT 
    rental_id, rental_date, inventory_id, customer_id
FROM
    sakila.rental
WHERE rental_date BETWEEN '2005-05-27' AND '2005-05-31';
-- AAAA-MM-DD hh:mm:ss

SELECT NOW();

SELECT DATE(NOW());
SELECT CURDATE();

SELECT TIME(NOW());
SELECT CURTIME();

SELECT YEAR(NOW());
SELECT MONTH(NOW());
SELECT DAY(NOW());

SELECT WEEKDAY(NOW());
SELECT DAYOFWEEK(NOW());


-- 00:00:00
-- 23:59:59

--

SELECT 
    rental_id, rental_date, DATE(rental_date)
FROM
    sakila.rental
    WHERE 
    DATE(rental_date) = '2005-05-26';
    
-- 
SELECT 
    rental_id, rental_date, DATE(rental_date)
FROM
    sakila.rental
	WHERE 
    rental_date BETWEEN '2005-05-26' AND '2005-05-27 23:59:59';
    
    -- 2005-05-27
    -- 2005-05-27 00:00:00
    
    
SELECT 
    rental_id, rental_date, DATE(rental_date)
FROM
    sakila.rental
	WHERE 
    DATE(rental_date) BETWEEN '2005-05-26' AND '2005-05-27';
    

SELECT 
    rental_id, rental_date, DATE(rental_date)
FROM
    sakila.rental
WHERE
    rental_date BETWEEN CAST('2005-05-26 00:00:00' AS DATETIME) AND 
CAST('2005-05-27 23:59:59' AS DATETIME);
    
    
    
    
    

-- 



SELECT * FROM sakila.customer;

SELECT 
	* 
FROM 
	sakila.customer
WHERE
	first_name LIKE 'ADAM';


SELECT 
	* 
FROM 
	sakila.customer
WHERE
	first_name LIKE 'FER_____';


--
SELECT * FROM sakila.actor;
-- nomes que contem 'rey'
SELECT * FROM sakila.actor WHERE first_name LIKE '%rey%';
-- nomes finalizados com 'dra'
SELECT * FROM sakila.actor WHERE first_name LIKE '%dra';
-- nomes iniciando com 'jun'
SELECT * FROM sakila.actor WHERE first_name LIKE 'jun%';
-- Nomes que iniciam com 'J' e terminar com 'E'
SELECT * FROM sakila.actor WHERE first_name LIKE 'j%' AND first_name LIKE 
'%e';
SELECT * FROM sakila.actor WHERE first_name LIKE 'j%e';
-- Nomes que iniciam com RA a partir da segunda letra
SELECT * FROM sakila.actor WHERE first_name LIKE '_RA%';
-- Nomes que iniciam com ME a partir da terceira letra
SELECT * FROM sakila.actor WHERE first_name LIKE '__ME%';
-- Nomes com exatamente 3 caracteres
SELECT * FROM sakila.actor WHERE first_name LIKE '___';
-- Nomes com 3 caracteres que iniciam com B
SELECT * FROM sakila.actor WHERE first_name LIKE 'b__';



