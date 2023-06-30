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