DROP DATABASE IF EXISTS simpsons_db;
CREATE DATABASE IF NOT EXISTS simpsons_db ;

USE simpsons_db;

CREATE TABLE characters (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(60) NOT NULL,
  PRIMARY KEY(id),
  UNIQUE(name)
);

INSERT INTO
  characters (id, name)
VALUES
  (1, "Homer Simpson"),
  (2, "Marge Simpson"),
  (3, "Bart Simpson"),
  (4, "Lisa Simpson"),
  (5, "Maggie Simpson"),
  (6, "Ned Flanders"),
  (7, "Montgomery Burns"),
  (8, "Nelson Muntz"),
  (9, "Krusty"),
  (10, "Milhouse Van Houten");