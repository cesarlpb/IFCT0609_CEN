/*

Escribe una función que recibe como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le descuenta un porcentaje del 10% si es mayor de 100 euros.


Si he comprado por valor de 200 euros con un impuesto del 5%, me descuentan un 10% por tanto pago 180 euros más los impuestos que son el 5% de 180. En total 189 euros.

200 y 5%
descuento del 10%

1. Aplicamos el descuento, el 10% de 200 es 20 -> 200 - 20 = 180€
2. Aplicamos el 5% a esta base de 180 -> 9 ==> 180 + 9 = 189€

*/ 

function calcularPrecio(precio, impuesto){
    // precio -> euros y impuesto es un %
    // si el precio > 100 => se aplica descuento de 10%
    let precioDescontado = precio; // euros
    if(precio > 100){
        precioDescontado = precio - ( (10/100) * precio )
    }
    let cantidadImpuesto = impuesto/100 * precioDescontado // euros

    // Opción básica: el problema es que si hay muchos decimales van a salir todo
    // return precioDescontado + cantidadImpuesto

    // Opción 2: con .toFixed(2) colocamos 2 decimales -> aparece el punto decimal en vez de la coma decimal

    // return (precioDescontado + cantidadImpuesto).toFixed(2)
    // Opción 3: aplicamos un replace() a lo anterior para presentar la coma decimal y el símbolo de euro (opcional)

    return (precioDescontado + cantidadImpuesto).toFixed(2).replace(".", ",") + " €"// string 
}