CREATE database IF NOT EXISTS faculdade;

USE faculdade;

CREATE TABLE IF NOT EXISTS biblioteca (
    nome VARCHAR(40) CHARACTER SET utf8,
    emprestado VARCHAR(3) CHARACTER SET utf8,
    quantidade INT,
    ano_lancamento INT,
    vendas INT
);

INSERT INTO faculdade.biblioteca VALUES
    ('Um Livro do Ano','Não',5,2019,350),
    ('Novas conquistas novas responsabilidades','Sim',10,2020,1412),
    ('O retorno do Jedi','Não',6,2019,845),
    ('Café ou Chá, eis a questão','Não',13,2020,1337);