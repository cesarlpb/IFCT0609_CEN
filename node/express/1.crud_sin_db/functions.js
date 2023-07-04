// Importamos el array de notas de nota.js
const { notas, Nota } = require("./nota"); // Con las llaves, es un array // SIN las llaves, es un obj { notas: [ notas... ] }

// getAll -> devuelve el array de notas
function getAll() {  
  // Sembramos 3 datos en el array de notas
  if(Nota.notas.length == 0) Nota.seed();
  // TODO: opciones de filtrado
  return notas;
}
// getOne -> devuelve una nota concreta
function getOne(id) {
  return notas.find((nota) => nota.id == id);
}
// createOne -> crea una nota, recibe un objeto nota y lo devuelve
function createOne(nota) {
  if(Nota.notas.length == 0) Nota.seed(); // Sembramos 3 datos en el array de notas
  let nuevaNota = new Nota(
    nota?.id || Nota.notas.length + 1, 
    nota?.titulo, 
    nota?.texto, 
    nota?.prioridad, 
    nota?.fecha
  );
  if(nuevaNota instanceof Nota){
    Nota.notas.push(nuevaNota);
    return nuevaNota;
  } else {
    return {"mensaje": "No se ha podido crear la nota"}
  };
}
function updateOne(id, nota) {
  if(Nota.notas.length == 0) Nota.seed(); // Sembramos 3 datos en el array de notas
  let notaEditada = new Nota(
    Number.parseInt(id), 
    nota?.titulo, 
    nota?.texto, 
    nota?.prioridad, 
    nota?.fecha
  );
  if(notaEditada instanceof Nota){
    Nota.notas[id-1] = notaEditada;
    return Nota.notas[id-1];
  } else {
    return {"mensaje": `No se ha podido editar la nota con id ${id}`}
  };
}
function deleteOne(id){
  if(id <= Nota.notas.length){
    Nota.notas.splice(id-1, 1);
    return {"mensaje": `Nota ${id} borrada`}
  }else{
    return{"mensaje": `No se ha podido borrar la nota con id ${id}`}
  }
}

exports.getAll = getAll;
exports.getOne = getOne;
exports.createOne = createOne;
exports.updateOne = updateOne;
exports.deleteOne = deleteOne;