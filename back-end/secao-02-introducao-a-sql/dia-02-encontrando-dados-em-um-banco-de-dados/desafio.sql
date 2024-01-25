SELECT * FROM faculdade.biblioteca;

-- 1 Eu quero somente os nomes dos livros cadastrados na biblioteca;
SELECT nome FROM faculdade.biblioteca;


-- 2 Eu quero saber quantos livros temos cadastrados em nossa biblioteca;
SELECT COUNT(*) FROM faculdade.biblioteca;


-- 3 Eu quero uma lista com 2 livros e suas informações, mas eu não quero o 
-- livro 'Um livro do Ano' e 'Novas conquistas novas responsabilidades';
SELECT * FROM faculdade.biblioteca LIMIT 2 OFFSET 2;


-- 4 Quero os livros mais recentes primeiro, e também em ordem alfabética;
SELECT * FROM faculdade.biblioteca ORDER BY ano_lancamento DESC, nome;


-- 5 Eu quero todas as informações do livro com maior estoque na biblioteca. 
-- Somente o com o maior estoque;
SELECT * FROM faculdade.biblioteca ORDER BY quantidade DESC LIMIT 1;


-- 6 Eu quero criar uma lista com os 4 livros mais vendidos. Como poderia encontrar isso?
SELECT * FROM faculdade.biblioteca ORDER BY vendas DESC limit 4;
