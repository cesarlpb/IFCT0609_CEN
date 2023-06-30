## Sequelize

```bash
npm install
```

Cambiad lo datos de conexión a la base de datos:
```js
const sequelize = new Sequelize(
 '<nombre_base_de_datos>',
 '<usuario_base_de_datos>',
 '<contraseña_base_de_datos>',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
```

Inicamos el servidor:
```bash
node server.js
```
Debemos ver el mensaje:
```bash
La conexión se ha establecido correctamente.
```

## Tabla Books
Para crear la tabla, primero comprobad que la conexión es correct con `node server.js` y luego ejecutad:
```bash
node book.model.js
```
Debéis ver algo así:
```bash
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Books' AND TABLE_SCHEMA = 'sequelize'
Executing (default): CREATE TABLE IF NOT EXISTS `Books` (`id` INTEGER NOT NULL auto_increment , `title` VARCHAR(255) NOT NULL, `author` VARCHAR(255) NOT NULL, `description` VARCHAR(500) DEFAULT 'No hay una descripción disponible para este libro.', `release_date` DATE, `subject` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `Books`
Tabla 'Books' creada correctamente.
```