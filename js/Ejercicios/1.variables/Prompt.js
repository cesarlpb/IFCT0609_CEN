const readline = require('readline');

// Función para preguntar por consola 
// para que el usuario introduzca un dato
// recibe un string y 
// retorna un string

const prompt = (pregunta) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
      rl.close();
      resolve(respuesta);
    });
  });
}

module.exports = prompt;