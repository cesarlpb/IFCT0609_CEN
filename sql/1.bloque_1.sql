-- Para ver todos los datos de la tabla:

SELECT * FROM tblUsuarios;

-- 1. Listar los nombres de los usuarios

SELECT nombre FROM tblUsuarios;

-- 2. Calcular el saldo máximo de los usuarios de sexo “Mujer”

SELECT MAX(saldo) FROM `tblUsuarios` WHERE sexo = 'M';

-- Para ver los saldos de las mujeres en la tabla:

SELECT nombre, saldo FROM tblUsuarios WHERE sexo = 'M';

-- 3. Listar nombre y teléfono de los usuarios con teléfono NOKIA, BLACKBERRY o SONY

SELECT nombre, telefono
FROM `tblUsuarios`
WHERE
    marca = 'NOKIA'
    OR marca = 'BLACKBERRY'
    OR marca = 'SONY';

-- Una forma más corta de hacerlo usando IN y un array:

SELECT nombre, telefono
FROM `tblUsuarios`
WHERE
    marca IN ('NOKIA', 'BLACKBERRY', 'SONY');

-- 4. Contar los usuarios sin saldo o inactivos

SELECT COUNT(*) FROM `tblUsuarios` WHERE saldo = 0 OR activo = 0;

-- Para ver estos usuarios en la tabla:

SELECT nombre, saldo, activo
FROM `tblUsuarios`
WHERE saldo = 0 OR activo = 0;

-- 5. Listar el login de los usuarios con nivel 1, 2 o 3 -> login se refiere a email o usuario

SELECT usuario FROM `tblUsuarios` WHERE nivel > 0;

-- 6. Listar los números de teléfono con saldo menor o igual a 300

SELECT telefono FROM tblUsuarios WHERE saldo <= 300;

-- 7. Calcular la suma de los saldos de los usuarios de la compañia telefónica NEXTEL

SELECT SUM(saldo) FROM tblUsuarios WHERE compañia = 'NEXTEL';

-- Solo hay un usuario y tiene saldo 150 -> el resultado es 150

-- 8. Contar el número de usuarios por compañía telefónica

-- GROUP BY aplica la selección a cada uno de las filas que encuentra en la categoría, en este caso, "compañia"

SELECT compañia, COUNT(*) FROM tblUsuarios GROUP BY compañia;

-- 9. Contar el número de usuarios por nivel

-- GROUP BY aplica la selección a cada uno de las filas que encuentra en la categoría, en este caso, "nivel"

SELECT nivel, COUNT(*) FROM tblUsuarios GROUP BY nivel;

-- 10. Listar el login de los usuarios con nivel 2, login es usuario o email

SELECT usuario, email FROM tblUsuarios WHERE nivel = 2;

-- 11. Mostrar el email de los usuarios que usan gmail

SELECT email FROM tblUsuarios WHERE email LIKE '%@gmail.com';

-- % es un comodín (wildcard) que representa ningún caracter, un caracter o más

-- 12. Listar nombre y teléfono de los usuarios con teléfono LG, SAMSUNG o MOTOROLA

SELECT nombre, telefono
FROM tblUsuarios
WHERE
    marca IN ('LG', 'SAMSUNG', 'MOTOROLA');