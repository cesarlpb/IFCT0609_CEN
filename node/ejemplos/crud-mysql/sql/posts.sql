-- Creamos la base de datos:

CREATE DATABASE IF NOT EXISTS `objetos`;

-- Seleccionamos la base de datos:

USE `objetos`;

-- Creamos tabla posts:

CREATE TABLE
    IF NOT EXISTS `Posts` (
        `id` smallint(6) NOT NULL AUTO_INCREMENT,
        `title` varchar(100) NOT NULL,
        `body` varchar(6000) DEFAULT NULL,
        `userId` smallint(6) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- Truncamos la tabla (borrar los datos):

TRUNCATE TABLE `Posts`;

-- Insertamos los datos:

-- Herramienta para escapar caracteres de un texto para SQL:

-- https://www.freeformatter.com/sql-escape.html

INSERT INTO
    `Posts` (`id`, `title`, `body`, `userId`)
VALUES (
        NULL,
        'Post sobre Javascript',
        'JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users'' devices.',
        1
    );

INSERT INTO
    `Posts` (`id`, `title`, `body`, `userId`)
VALUES (
        NULL,
        'Post sobre HTML',
        'HTML, siglas en inglés de HyperText Markup Language (‘lenguaje de marcado de hipertexto’), hace referencia al lenguaje de marcado para la elaboración de páginas web. Es un estándar que sirve de referencia del software que conecta con la elaboración de páginas web en sus diferentes versiones, define una estructura básica y un código (denominado código HTML) para la definición de contenido de una página web, como texto, imágenes, videos, juegos, entre otros. Es un estándar a cargo del World Wide Web Consortium (W3C) o Consorcio WWW, organización dedicada a la estandarización de casi todas las tecnologías ligadas a la web, sobre todo en lo referente a su escritura e interpretación. HTML se considera el lenguaje web más importante siendo su invención crucial en la aparición, desarrollo y expansión de la World Wide Web (WWW). Es el estándar que se ha impuesto en la visualización de páginas web y es el que todos los navegadores actuales han adoptado.1​',
        3
    );

INSERT INTO
    `Posts` (`id`, `title`, `body`, `userId`)
VALUES (
        NULL,
        'Post sobre MySQL',
        'MySQL (/ˌmaɪˌɛsˌkjuːˈɛl/)[5] is an open-source relational database management system (RDBMS).[5][6] Its name is a combination of "My", the name of co-founder Michael Widenius''s daughter My,[7] and "SQL", the acronym for Structured Query Language. A relational database organizes data into one or more data tables in which data may be related to each other; these relations help structure the data. SQL is a language programmers use to create, modify and extract data from the relational database, as well as control user access to the database. In addition to relational databases and SQL, an RDBMS like MySQL works with an operating system to implement a relational database in a computer''s storage system, manages users, allows for network access and facilitates testing database integrity and creation of backups.

        MySQL is free and open-source software under the terms of the GNU General Public License, and is also available under a variety of proprietary licenses. MySQL was owned and sponsored by the Swedish company MySQL AB, which was bought by Sun Microsystems (now Oracle Corporation).[8] In 2010, when Oracle acquired Sun, Widenius forked the open-source MySQL project to create MariaDB.[9]

        MySQL has stand-alone clients that allow users to interact directly with a MySQL database using SQL, but more often, MySQL is used with other programs to implement applications that need relational database capability. MySQL is a component of the LAMP web application software stack (and others), which is an acronym for Linux, Apache, MySQL, Perl/PHP/Python. MySQL is used by many database-driven web app<lications, including Drupal, Joomla, phpBB, and WordPress. MySQL is also used by many popular websites, including Facebook,[10][11] Flickr,[12] MediaWiki,[13] Twitter,[14] and YouTube.[15]',
        2 
    );