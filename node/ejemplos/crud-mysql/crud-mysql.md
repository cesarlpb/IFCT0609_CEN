## CRUD con MySQL

Aplicación de Node para realizar CRUD con MySQL.

- Nos basamos en [conexion.js](../mysql/conexion.js) para los queries necesarios y los métodos de `mysql`.
- Separamos los queries para que se ejecute solo uno a la vez.

## 1. Objeto
Usamos un objeto distinto o similar al de [Todo](../todos/Todo.js) para representar los datos en la tabla.

## 2. Tabla
Creamos un archivo `.sql` para crear tabla e insertar algunos datos:
- `createTable.sql`

## 3. Archivos
Creamos estos archivos para cada query:
- `getAll.js`
- `getOne.js`
- `create.js`
- `update.js`
- `delete.js`

## 4. Salida
Debemos ver en consola el resultado del query. **Opcional:** comprobar en otro query que el resultado es correcto cuando sea necesario.

## 5. Reseteo de tabla
Añadimos query para al archivo `.sql` para resetear la tabla:
- `createTable.sql`
