## Comandos de MySQL en Terminal
Para ver todas las tablas actuales:
```sql
SHOW DATABASES;
```
Creamos base de datos:
```sql
CREATE DATABASE nombre_db;
```
Seleccionamos base de datos:
```sql
USE nombre_db;
````
Mostrar tablas de db:
```sql
SHOW TABLES;
```
Creamos tabla de ejemplo:
```sql
CREATE TABLE nombre_tabla (`id` INT NOT NULL AUTO_INCREMENT , `nombre`
VARCHAR(50) NOT NULL , `email` VARCHAR(100) NOT NULL , PRIMARY KEY (`i
d`)) ENGINE = InnoDB;
```
Vemos la definición de la tabla:
```sql
DESCRIBE nombre_tabla;
```
Insertamos datos en esta tabla:
```sql
INSERT INTO nombre_tabla 
  (`id`, `nombre`, `email`) 
  VALUES 
  (NULL, 'pepe', 'pepe@larana.frog'), 
  (NULL, 'María', 'maria@gmail.com')
```
Para ver los datos, hacemos un SELECT:
```sql
SELECT * FROM nombre_tabla;
```