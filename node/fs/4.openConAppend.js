// open permite abrir el archivo con permisos determinados
// 'w' para escribir (write)
// 'r' para leer (read)
// 'a' para append (añadir al final)

const fs = require('fs');
const filename = 'nuevoNuevoArchivo.txt'

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

fs.open(filename, 'a', function (err, texto) {
  if (err) throw err;
  fs.writeFile(texto, lorem + "\n", function (err) {
    if (err) throw err;
    fs.close(texto, function(err) {
      if (err) throw err;
      console.log('Línea añadida en ' + filename);
    });
  });
});

// Ejecutad este archivo una vez para ver que el archivo se crea
// Se crea nuevoNuevoArchivo.txt
// Ejecutad este script de nuevo... y, ¿qué pasó con el contenido?
// fs.open( ... 'a' ...) -> añade contenido al final sin borrar lo anterior <-- esto es conveniente