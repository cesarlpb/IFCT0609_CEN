// open permite abrir el archivo con permisos determinados
// 'w' para escribir (write)
// 'r' para leer (read)
// 'a' para append (añadir al final)

const fs = require('fs');
const filename = 'nuevoNuevoArchivo.html'

fs.open(filename, 'w', function (err, file) {
  if (err) throw err;
  console.log("Se ha creado/editado el archivo " + filename);
});

// Ejecutad este archivo una vez para ver que el archivo se crea
// Añadid contenido al documento nuevoNuevoArchivo.html
// Ejecutad este script de nuevo... y, ¿qué pasó con el contenido?
// fs.open() -> sobreescribe el archivo si ya existe <--- CUIDADO