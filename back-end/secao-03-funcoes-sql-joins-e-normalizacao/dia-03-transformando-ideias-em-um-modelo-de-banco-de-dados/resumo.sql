
-- selecionar address e city a partir de duas tabelas: INNER JOIN
SELECT 
    A.address, A.district, A.city
FROM
    sakila.address AS A
        INNER JOIN
    sakila.city AS C ON A.city_id = C.city_id;

-- filtrando a cidade com id = 449
SELECT 
    A.address, A.district, A.city_id
FROM
    sakila.address AS A
        INNER JOIN
    sakila.city AS C ON A.city_id = C.city_id
WHERE
    A.city_id = 449;

-- mais de um INNER JOIN
SELECT 
    A.address, A.district, C.city, CO.country
FROM
    sakila.address AS A
        INNER JOIN
    sakila.city AS C ON A.city_id = C.city_id
        INNER JOIN
    sakila.country AS CO ON C.country_id = CO.country_id
WHERE
    A.city_id = 449;

-- selecionar dados da tabela pet e person: INNER JOIN
SELECT 
    person.id, person.name, pet.id, pet.person_id, pet.name
FROM
    pet_shop.person
        INNER JOIN
    pet_shop.pet ON person.id = pet.person_id;

-- selecionar dados da tabela pet e person: LEFT JOIN
SELECT 
    person.id, person.name, pet.id, pet.person_id, pet.name
FROM
    pet_shop.person
        LEFT JOIN
    pet_shop.pet ON person.id = pet.person_id;

-- selecionar dados da tabela pet e person: RIGHT JOIN
SELECT 
    person.id, person.name, pet.id, pet.person_id, pet.name
FROM
    pet_shop.person
        RIGHT JOIN
    pet_shop.pet ON person.id = pet.person_id;

-- selecionar pets com mesmas pessoas tutoras: SELF JOIN
SELECT 
    A.name, B.name, A.person_id
FROM
    pet_shop.pet A
    INNER JOIN pet_shop.pet B 
    ON A.person_id = B.person_id
WHERE
    A.name <> B.name
ORDER BY A.person_id;

-- Quantos filmes de cada diretor tiveram maior bilheteria?
SELECT 
    COUNT(M.title) AS numero_filmes,
    M.director,
    SUM(B.domestic_sales + B.international_sales) AS total_sales
FROM
    Pixar.Movies AS M
        INNER JOIN
    Pixar.BoxOffice AS B ON M.id = B.movie_id
GROUP BY M.director
ORDER BY total_sales DESC;

-- Quais animais são da mesma espécie?

SELECT * FROM pet_shop.pet A
INNER JOIN pet_shop.pet B
ON A.type = B.type AND A.id <> B.id;

-- Quais animais são do mesmo dono, filtrando somente os com nome diferentes

SELECT 
    A.name, B.name, A.person_id
FROM
    pet_shop.pet A
    INNER JOIN pet_shop.pet B 
    ON A.person_id = B.person_id
WHERE
    A.name <> B.name
ORDER BY A.person_id;
