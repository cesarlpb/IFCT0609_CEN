let num, cuadrado, resultado;
num = parseInt(prompt("4"));
cuadrado = parseInt(prompt("2"));

if (cuadrado == num*num) {
  resultado = "Correcto";
} else if (isNaN(num) || isNaN(cuadrado)) {
  resultado = "Error: debes escribir números";
} else {
  resultado = "Error: el cuadrado no es correcto";
}

console.log("Resultado: "+resultado);


// Método 2: ternario

isNaN(numero) || isNaN(cuadrado) 
    ? alert("Alguno de los números no es correcto") 
    : cuadrado == numero * numero 
        ? alert("Es correcto") 
        : alert(`No es correcto. El cuadrado de ${numero} es ${numero**2}`)

console.log("Resultado: "+resultado);