/*
Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.

Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"

Aparecerá el prompt y el usuario escribirá su nombre:

Usuario escribe juan

Hola Juan.

*/


// https://www.codecademy.com/article/getting-user-input-in-node-js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('¿Cual es tu nombre? > ', name => {
    console.log(`Hola, ${name}!`);
    readline.close();
  });

// No tenemos prompt() porque es de window.prompt() y eso está disponible en el navegador