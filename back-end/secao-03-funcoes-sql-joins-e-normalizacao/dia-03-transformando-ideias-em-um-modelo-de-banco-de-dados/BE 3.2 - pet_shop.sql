-- início do script de criação do banco de Pets
DROP DATABASE IF EXISTS `pet_shop`;
CREATE DATABASE `pet_shop`;
USE `pet_shop`;

CREATE TABLE `person` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `pet` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `person_id` INT NULL,
  `type` VARCHAR(100),
  `name` VARCHAR(100),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`person_id`) REFERENCES `person` (`id`)
);

INSERT INTO `person` (`id`, `name`) VALUES 
  (1, 'John'),
  (2, 'Sarah'),
  (3, 'Rachel'),
  (4, 'Sam');

INSERT INTO `pet` (`id`, `person_id`, `type`, `name`) VALUES 
  (1, 1, 'goldfish', 'Fishy'),
  (2, 1, 'goldfish', 'Nemo'),
  (3, 1, 'dog', 'Fido'),
  (4, 2, 'cat', 'Kitty'),
  (5, 2, 'bird', 'Feathers'),
  (6, 3, 'chinchilla', 'Fuzzy'),
  (7, NULL, 'iguana', 'Scales');
-- fim do script de criação do banco de Pets
