-- Creamos la base de datos:

CREATE DATABASE IF NOT EXISTS `objetos`;

-- Seleccionamos la base de datos:

USE `objetos`;
-- Creamos tabla Tracks:
CREATE TABLE IF NOT EXISTS `Tracks` (
  `id` INT NOT NULL AUTO_INCREMENT , 
  `titulo` VARCHAR(255) NOT NULL , 
  `formato` CHAR(5) NULL , 
  `duracion` FLOAT NULL , 
  `genero` VARCHAR(100) NULL , 
  `path` VARCHAR(20) NOT NULL , 
  `filename` VARCHAR(255) NOT NULL , 
  `artistaId` SMALLINT NULL , 
  `albumId` SMALLINT NULL , 
  PRIMARY KEY (`id`)) ENGINE = InnoDB;

-- Truncamos tabla:
TRUNCATE TABLE `Tracks`;

-- Insertamos datos:
INSERT INTO `Tracks` 
  (`id`, `titulo`, `formato`, `duracion`, `genero`, `path`, `filename`, `artistaId`, `albumId`) 
VALUES 
  (NULL, 'Thriller', 'MP3', '357', 'Disco, Funk', 'tracks', 'Michael_Jackson_-_Thriller_Nghype.Com_.mp3', '1', '1');
