-- Creamos la base de datos:

CREATE DATABASE IF NOT EXISTS `objetos`;

-- Seleccionamos la base de datos:

USE `objetos`;

-- Creamos tabla usuarios:

CREATE TABLE
    IF NOT EXISTS `objetos`.`Usuarios` (
        `id` SMALLINT NOT NULL AUTO_INCREMENT,
        `nombre` VARCHAR(100) NULL,
        `apellido` VARCHAR(100) NULL,
        `email` VARCHAR(100) NOT NULL,
        `password` VARCHAR(20) NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- Borramos los datos de la tabla

TRUNCATE TABLE `objetos`.`Usuarios`;

-- Insertamos los datos de prueba:

INSERT INTO
    `objetos`.`Usuarios` (
        `id`,
        `nombre`,
        `apellido`,
        `email`,
        `password`
    )
VALUES (
        NULL,
        'Pepe',
        'Rana',
        'pepe@rana.frog',
        '12345'
    );

INSERT INTO
    `objetos`.`Usuarios` (
        `id`,
        `nombre`,
        `apellido`,
        `email`,
        `password`
    )
VALUES (
        NULL,
        'María',
        'Gómez',
        'maria@gm.com',
        'asdf'
    );

INSERT INTO
    `objetos`.`Usuarios` (
        `id`,
        `nombre`,
        `apellido`,
        `email`,
        `password`
    )
VALUES (
        NULL,
        'Felipe',
        'Reyes',
        'felipe@gmail.com',
        'Supersafe123/'
    );