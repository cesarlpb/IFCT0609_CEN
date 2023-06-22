// Importamos el array de notas de nota.js
const { notas } = require("./nota"); // Con las llaves, es un array // SIN las llaves, es un obj { notas: [ notas... ] }

// getAll -> devuelve el array de notas
function getAll() {
  // TODO: opciones de filtrado
  return notas;
}
// getOne -> devuelve una nota concreta
function getOne(id) {
  return notas.find((nota) => nota.id == id);
}
// createOne -> crea una nota, recibe un objeto nota y lo devuelve
function createOne(nota) {
  // TODO: validar nota y añadir nota al array
  return nota;
}
exports.getAll = getAll;
exports.getOne = getOne;
exports.createOne = createOne;