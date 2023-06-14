## CRUD con MySQL

Aplicación de Node para realizar CRUD con MySQL.

- Nos basamos en [conexion.js](../mysql/conexion.js) para los queries necesarios y los métodos de `mysql`.
- Separamos los queries para que se ejecute solo uno a la vez.

## 1. Objetos
Usamos un objeto distinto o similar al de [Todo](../todos/Todo.js) para representar los datos en la tabla. Algunos ejemplos:
 
 - [Usuarios](./usuarios.md)
 - [Posts](./posts.md)
 - [Albumes](./albumes.md)
 - [Artistas](./artistas.md)
 - [Tracks o Pistas](./tracks.md)
 - Subastas

### Carpeta media

```
  media 
  |-- albumes
    -- portada.jpg
    -- portada2.png
    -- portada3.jpg
  |-- artistas
    -- michael.jpg
    -- michael2.jpg
    -- michael3.jpg
  |-- pistas
    -- nombre-de-la-pista.mp3
    -- nombre-de-la-pista2.mp3
    -- nombre-de-la-pista3.mp3
    
```

## 2. Tabla
Creamos un archivo `.sql` para crear tabla e insertar algunos datos:
- `nombre_del_objeto_en_plural.sql`, por ejemplo:
  - `albumes.sql`
  - `artistas.sql`
  - `posts.sql`
  - `tracks.sql`
  - `usuarios.sql`
  - etc.

## 3. Archivos
Creamos estos archivos para cada query y con endpoints para cada uno, por ejemplo para los artistas:
- `getAll.js` -> localhost:8080/artistas
- `getOne.js` -> localhost:8080/artistas/1
- `create.js` -> localhost:8080/artistas
- `update.js` -> localhost:8080/artistas/1
- `delete.js` -> localhost:8080/artistas/1

**Importante:** lo habitual es devolver los objetos en formato `JSON`. 

## 4. Salida

- Debemos ver en consola el resultado del query. -> `console.log(...)`
- **Opcional:** mostrar en el navegador el resultado del query. -> `res.end(...)`

POST, UPDATE, DELETE:
**Opcional:** comprobar en otro query que el resultado es correcto cuando sea necesario.

## 5. Reseteo de tabla
Añadimos query para al archivo `.sql` para resetear la tabla:
- `nombre_del_objeto_en_plural.sql`
[ x ] Hemos colocado el reseteo (truncate) de tabla en el mismo archivo que crea la tabla en cada caso.
