// writeFile permite crear el archivo si no existe o editar el contenido (TODO) si ya existe, es decir, borra lo anterior y escribe lo nuevo

const fs = require('fs');
const filename = 'nuevoNuevoArchivo.html'

fs.writeFile(filename, '<h1>Hola mundo</h1>', function (err) {
  if (err) throw err;
  console.log("Se ha creado el archivo " + filename);
});

// Ejecutad este archivo una vez para ver que el archivo se crea
// Añadid contenido al documento nuevoNuevoArchivo.html
// Ejecutad este script de nuevo... y, ¿qué pasó con el contenido?
// fs.writeFile() -> sobreescribe el archivo si ya existe <--- CUIDADO