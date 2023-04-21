/**
 * Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio de cada uno.
 * 
 * Por ejemplo si compras 20 artículos de 10 euros se te descuenta un 15% del total pagarías 20*10 - 20*10*0.15 = 170 euros.
 * 
 * Recibimos dos números: 
 *  - numArticulos
 *  - precioArticulo
 * 
 *  Si se cumple la condición:
 *  - numArticulos > 10
 *  - y precioArticulo > 40
 * 
 *  se aplica el descuento del 15%
 */

let numArticulos = Number(prompt("Introduce número de artículos:"))
let precioArticulo = Number(prompt("Introduce precio de cada artículo:"))

if( numArticulos > 10 && precioArticulo > 40 ){
    let precioSinDto = numArticulos * precioArticulo
    let descuento = precioSinDto * 15 / 100 // El 15%
    let precioConDto = precioSinDto - descuento
    alert(`Se aplica el descuento y te ahorras el 15%
    
    Precio sin dto:     ${precioSinDto.toFixed(2)}  €
    Descuento 15% :     ${descuento.toFixed(2)}     €
    Precio final  :     ${precioConDto.toFixed(2)}  €    
    `)
} else {
    alert("No se aplica el descuento del 15%")
}
