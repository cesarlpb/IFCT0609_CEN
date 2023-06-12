## CRUD con MySQL

Aplicación de Node para realizar CRUD con MySQL.

- Nos basamos en [conexion.js](../mysql/conexion.js) para los queries necesarios y los métodos de `mysql`.
- Separamos los queries para que se ejecute solo uno a la vez.

## 1. Objetos
Usamos un objeto distinto o similar al de [Todo](../todos/Todo.js) para representar los datos en la tabla. Algunos ejemplos:
 
 - **Usuarios:**
   - id: int
   - nombre: string
   - apellido: string
   - email: string
   - password: string

```javascript
{
  id: 1,
  nombre: "María",
  apellido: "Jimenez",
  email: "maria.j@gmail.com",
  password: "123456"
}
```
 - **Posts:**
   - id: int
   - title: string
   - body: string
   - userId: int

```javascript
  {
    id: 1,
    title: "Título del post",
    body: "Cuerpo del post.\n Segunda línea.\nEtc.",
    userId: 1
  }
```
- **Album**
  - id: int
  - titulo: string
  - descripcion: string
  - artistaId: int, id para identificar el artista en otra tabla
  - fecha: string
  - portada: string, path de la imagen de la portada
```javascript
{
  id: 1,
  titulo: "Título del álbum",
  descripcion: "Descripción del álbum",
  artistaId: 1,
  fecha: "2020-01-01",
  portada: "media/albumes/portada.jpg"
}
```

- **Tracks o pistas:**
  - id: int
  - name: string
  - albumId: int, id para identificar el álbum en otra tabla
  - formato: string
  - duracion: float
  - genero: string
  - artistaId: int, id del artista de la canción
  - path: string
  - filename: string
```javascript
{
  id: 1,
  name: "Nombre de la pista",
  albumId: 1,
  formato: "mp3",
  duracion: 3.5,
  genero: "Rock",
  artistaId: 1,
  path: "media",
  filename: "nombre-de-la-pista.mp3"
}
```

**Artista:**
  - id: int
  - nombre: string
  - descripcion: string
  - fechaNacimiento: string
  - lugarNacimiento: string
  - foto: string, path de la imagen del artista

```javascript
  {
    id: 1,
    nombre: "Michael Jackson",
    descripcion: `Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, dancer, and philanthropist. Known as the "King of Pop", he is regarded as one of the most significant cultural figures of the 20th century. During his four-decade career, his contributions to music, dance, and fashion, along with his publicized personal life, made him a global figure in popular culture. Jackson influenced artists across many music genres; through stage and video performances, he popularized complicated dance moves such as the moonwalk, to which he gave the name, as well as the robot.`,
    fechaNacimiento: "1958-08-29",
    lugarNacimiento: "USA",
    foto: "media/artistas/michael.jpg"
  }
```

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
