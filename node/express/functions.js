// Importamos el array de notas de nota.js
const { notas, Nota } = require("./nota"); // Con las llaves, es un array // SIN las llaves, es un obj { notas: [ notas... ] }

// getAll -> devuelve el array de notas
function getAll() {  
  // Sembramos 3 datos en el array de notas
  if(Nota.notas.length < 3) Nota.seed();
  // TODO: opciones de filtrado
  return notas;
}
// getOne -> devuelve una nota concreta
function getOne(id) {
  return notas.find((nota) => nota.id == id);
}
// createOne -> crea una nota, recibe un objeto nota y lo devuelve
function createOne(nota) {
  if(Nota.notas.length < 3) Nota.seed(); // Sembramos 3 datos en el array de notas
  let nuevaNota = new Nota(
    nota?.id || Nota.notas.length + 1, 
    nota?.titulo, 
    nota?.texto, 
    nota?.prioridad, 
    nota?.fecha
  );
  if(nuevaNota instanceof Nota){
    return nuevaNota;
  } else {
    return {"mensaje": "No se ha podido crear la nota"}};
}
exports.getAll = getAll;
exports.getOne = getOne;
exports.createOne = createOne;