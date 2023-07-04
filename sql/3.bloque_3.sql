-- 1. Listar el login de los usuarios con nivel 1 o 3
-- Podemos usar OR o hacer el filtro con IN y una lista de valores:

SELECT usuario, email FROM tblUsuarios WHERE nivel = 1 OR nivel = 3;

SELECT usuario, email FROM tblUsuarios WHERE nivel IN (1,3);
-- 2. Listar nombre y teléfono de los usuarios con teléfono que no sea de la marca BLACKBERRY
SELECT nombre, telefono FROM tblUsuarios WHERE marca != 'BLACKBERRY';

SELECT nombre, telefono
FROM tblUsuarios
WHERE
    marca NOT IN ('BLACKBERRY');
-- 3. Listar el login de los usuarios con nivel 3
SELECT nombre, email FROM tblUsuarios WHERE nivel = 3;

SELECT nombre, email FROM tblUsuarios WHERE nivel IN (3);
-- 4. Listar el login de los usuarios con nivel 0
SELECT nombre, email FROM tblUsuarios WHERE nivel = 0;

SELECT nombre, email FROM tblUsuarios WHERE nivel IN (0);
-- 5. Listar el login de los usuarios con nivel 1
SELECT nombre, email FROM tblUsuarios WHERE nivel = 1;

SELECT nombre, email FROM tblUsuarios WHERE nivel IN (1);
-- 6. Contar el número de usuarios por sexo
SELECT sexo, COUNT(*) FROM tblUsuarios GROUP BY sexo;
-- 7. Listar el login y teléfono de los usuarios con compañia telefónica AT&T
SELECT usuario, email FROM tblUsuarios WHERE compañia = "AT&T";

SELECT usuario, email FROM tblUsuarios WHERE compañia IN ("AT&T");
-- 8. Listar las diferentes compañias en orden alfabético descendentemente
SELECT DISTINCT compañia FROM tblUsuarios ORDER BY compañia DESC;

-- 9. Listar el login de los usuarios inactivos

SELECT usuario, email FROM tblUsuarios WHERE activo = 0;
-- 10. Listar los números de teléfono sin saldo
SELECT telefono FROM tblUsuarios WHERE saldo = 0;
-- 11. Calcular el saldo mínimo de los usuarios de sexo “Hombre”
SELECT MIN(saldo) FROM tblUsuarios WHERE sexo = 'H';
-- 12. Listar los números de teléfono con saldo mayor a 300
SELECT telefono FROM tblUsuarios WHERE saldo > 300;