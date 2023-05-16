/*
Objetos:
    - propiedades -> datos (string, number, etc.)
    - métodos == acciones que realizar el objeto
    Por ejemplo, 
        un coche tiene las propiedades color, matrícula, etc.
        un coche puede frenar(), pita(), acelerar(), etc.
    
        input ---> fn() ---> output
*/

/**
 * 
 * Define un objeto, mediante una expresión, que tenga dos propiedades: precio y descuento y un método neto. El método calculará el precio con el descuento aplicado. Los valores se pedirán por teclado
 * 
 * Por ejemplo objeto vestido, precio 400 y descuento 10. El método devolverá como resultado 360 (400 - 10*400/100).
 */

let articulo = {
    "nombre": "",
    "precio" : 0,
    "descuento": 0, // %
    "neto" : function(){
        let precioFinal = this.precio - this.descuento * this.precio / 100
        return precioFinal.toFixed(2)
    }
}
let nombre = prompt("Introduce nombre del artículo:")
let precio = prompt("Introduce precio del artículo:")
let descuento = prompt("Introduce descuento del artículo:")

articulo.nombre = nombre
articulo.precio = Number(precio)
articulo.descuento = Number(descuento)

alert("Precio neto: " + articulo.neto() + " €")