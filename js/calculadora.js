// Operaciones básicas

// Pedir dos números al usuario
    // prompt -> devuelve texto
let a = prompt("Introduce un número:")
let b = prompt("Introduce otro número:")
console.log(typeof(a)) // a es string
console.log(typeof(b)) // b es string
// string -> Number
a = Number(a)
b = Number(b)
console.log(typeof(a)) // a es number
console.log(typeof(b)) // b es number

// Suma
let suma = a + b;
// Resta
let resta = a - b;
// Producto
let producto = a * b;
// División
let division = a / b;
console.log(a, b, suma, resta, producto, division) // todo bien
// Escribir al HTML
document.getElementById("suma").innerText = suma;
document.getElementById("resta").innerText = resta;
document.getElementById("producto").innerText = producto;
document.getElementById("division").innerText = division;