/*
Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.

Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.

Precio 100€

Iva: 21%

El total son 121 €.
*/

let precio = 100
let iva = 21    // porcentaje 21%, 10%, etc.
let cantidadIva = precio * iva / 100 // 100 * 21 / 100 = 21 
let precioFinal = precio + cantidadIva // 100 + 21 = 121
console.log("El precio base es:", precio, "€")
console.log("El precio con IVA es:", precioFinal, "€")