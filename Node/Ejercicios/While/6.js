// Declaramos dos variables, "numero" y "suma", y les asignamos valores iniciales
let numero = 1;
let suma = 0;

// Creamos un bucle while que se ejecutará mientras el usuario siga ingresando números distintos de cero
while (numero !== 0) {
  // Usamos la función parseInt para convertir el texto ingresado por el usuario en un número entero
  numero = parseInt(prompt("Teclee un número")); 
  // Sumamos el número ingresado al valor actual de "suma"
  suma += (numero !== 0) ? numero : 0;
} 


// Al final del bucle, mostramos un mensaje con la suma total de todos los números ingresados
alert(`La suma de todos los números es ${suma}`);




  
  


