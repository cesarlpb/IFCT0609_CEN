// append es la acción de "añadir" texto al final de un string o archivo, etc.
// appendFile() -> añade texto o CREA el archivo si no existe

const fs = require('fs');
const filename = 'nuevoArchivo.html'
const date = new Date()

fs.appendFile(filename, `<p>Registro nuevo, hora: ${date.toLocaleTimeString()}</p>\n`, function (err) {
  if (err) {
    throw err
  };
  console.log("Se ha creado/editado el archivo " + filename);
});

// Ejecutad este archivo varias veces para ver el resultado con
// node 0.leerArchivo.js