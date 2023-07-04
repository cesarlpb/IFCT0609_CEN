-- Creamos la base de datos:

CREATE DATABASE IF NOT EXISTS `objetos`;

-- Seleccionamos la base de datos:

USE `objetos`;

-- Creamos tabla Artistas:
CREATE TABLE IF NOT EXISTS `Artistas` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT , 
  `nombre` VARCHAR(100) NOT NULL , 
  `descripcion` VARCHAR(500) NULL , 
  `fechaNacimiento` DATETIME NULL , 
  `lugarNacimiento` VARCHAR(50) NULL , 
  `foto` VARCHAR(255) NULL , 
  PRIMARY KEY (`id`)) ENGINE = InnoDB;

-- Truncamos la tabla (borrar los datos):
TRUNCATE TABLE `Artistas`;

-- Insertamos los datos:
INSERT INTO `Artistas` 
  (`id`, `nombre`, `descripcion`, `fechaNacimiento`, `lugarNacimiento`, `foto`) 
VALUES 
  (NULL, 'Michael Jackson', 'Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, dancer, and philanthropist. His contributions to music, dance, and fashion, along with his publicized personal life, made him a global figure in popular culture. Jackson influenced artists across many music genres; through stage and video performances, he popularized complicated dance moves such as the moonwalk.', '1958-08-29 12:00:00', 'Gary, Indiana', 'Michael_Jackson_in_1988.jpg');
INSERT INTO `Artistas` 
  (`id`, `nombre`, `descripcion`, `fechaNacimiento`, `lugarNacimiento`, `foto`) 
VALUES 
  (NULL, 'Bob Marley', 'Robert Nesta Marley (Nine Mile, parroquia de Saint Ann, 6 de febrero de 1945-Miami, Florida, 11 de mayo de 1981), más conocido como Bob Marley, fue un cantante y compositor jamaicano. Durante su carrera musical fue el líder, compositor y guitarrista de las bandas The Wailers (1964-1974) y Bob Marley & The Wailers (1974-1980). ', NULL, NULL, 'Bob-Marley.jpg');