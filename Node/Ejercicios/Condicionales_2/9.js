/**
 * 
 * Un comerciante hace descuentos a sus clientes de la siguiente forma:
 * 
- Si ha comprado menos de 100 euros no hay descuento
- Si la compra está entre 100 y 300 euros le descuenta un 5%
- Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
- Si la compra supera los 500 euros le descuenta un 15%
    cantidad < 100 => no hay dto
    cantidad >= 100 && cantidad < 300 => 5%
    cantidad > 300 && cantidad < 500 => 10%
    cantidad > 500 => 15%
    Es decir: hago una compra de 150 euros pago 150 - 5% de 150, o sea 142,5 euros.
 */

    let cantidad = Number(prompt("Introduce el importe de la compra:"))
    let mensaje = ""
    let descuento = 0 // 0, 5, 10, 15 en %
    
    // Fórmula para calcular el descuento
    /**
     * Si el descuento en % se guarda en la variable descuento:
     * let cantidadDescontada = cantidad * ( 100 - descuento ) / 100
     * let cantidadDescontada = cantidad * ( 100 / 100 - descuento /100 )
     * let cantidadDescontada = cantidad * ( 1 - descuento/100 )
     * 
     * ^^^ Estas líneas son equivalentes ^^^
     */
    
    if( cantidad < 100 && cantidad > 0 ){
        mensaje = `No se aplica descuento.\nTu compra asciende a: ${cantidad.toFixed(2)} €`
    } else if ( cantidad >= 100 && cantidad < 300 ){
        descuento = 5 // en %
        let cantidadConDto = cantidad * (1-descuento/100)
        mensaje = `Se aplica un descuento del ${descuento} %\nTu compra asciende a: ${cantidadConDto.toFixed(2)} €`
    } else if ( cantidad >= 300 && cantidad < 500 ){
        descuento = 10 // en %
        let cantidadConDto = cantidad * (1-descuento/100)
        mensaje = `Se aplica un descuento del ${descuento} %\nTu compra asciende a: ${cantidadConDto.toFixed(2)} €`
    } else if (cantidad >= 500) {
        descuento = 15 // en %
        let cantidadConDto = cantidad * (1-descuento/100)
        mensaje = `Se aplica un descuento del ${descuento} %\nTu compra asciende a: ${cantidadConDto.toFixed(2)} €`
    } else {
        mensaje = "El dato introducido no es correcto.\nDebe ser un número positivo."
    }
    
    alert(mensaje)
    