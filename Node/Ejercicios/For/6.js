/** Le damos a cada variable un valor inicial vacío, mas visual y fácil de leer:
* Tambien podemos escribir la funcion de variables asi: let letra, veces, cont, *mensaje = ''; aunque se dan 4 variables diferentes pero solo se inicia la última variable(mensaje) con un valor de cadena vacía */


let letra = ""
let veces = ""
let cont = ""
let mensaje = ""

letra = prompt("Ingrese una letra: ");

if (letra.length > 1) {
  letra = prompt("Por favor, ingrese solo una letra: ");
}

veces = parseInt(prompt("Ingrese el número de veces que desea repetir la letra: "));

while (isNaN(veces) || veces <= 0) {
  veces = parseInt(prompt("Por favor, ingrese un número entero positivo: "));
}

for (cont = 0; cont < veces; cont++) {
  mensaje += letra;
}

alert(`La letra ${letra} se ha repetido ${veces} veces: ${mensaje}`);
