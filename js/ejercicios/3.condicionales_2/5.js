/**
 * 
 * En una sala de juegos existen tres salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si apga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.
 * 
 * 
 * Tecleo que pago 2 créditos, el script me dirá que puedo acceder a las salas de consola y juegos 2D.
 * 
 * 1 => Consolas
 * 2 => Consolas y Juegos 2D
 * 3 => ... y Juegos 3D
 * 4 => todo
 */


let creditos = parseInt(prompt("Introduce los créditos que has pagado:"))
const listaSalas = ["Consolas", "Juegos 2D", "Juegos 3D", "Realidad Virtual"]
let mensaje = ""

/**
 * crédito  índice
 * -1 o 0 => mensaje de error   
 * 1    => 0
 * 2    => 0, 1
 * 3    => 0, 1, 2
 * 4    => 0, 1, 2, 3 
 * 5    => 0..3
 */

if( creditos < 1 || isNaN(creditos) ){
    mensaje = "El número de créditos no es válido"
} else {
    if( creditos > 4 ){ creditos = 4 } // Suponiendo que creditos no lo presentamos más al usuario ni lo usamos para llevar la cuenta de su balance
    mensaje = "Puedes entrar a:"
    for(let i = 0; i<creditos; i++){
        mensaje += `\n${listaSalas[i]}` // += es un append (añadir al final)
    }
}
alert(mensaje)

/**
 * // Idea con switch:
 * 
 *     switch(creditos){
        case 1:
        case 2:
        case 3:
        case 4:
            mensaje = "Puedes entrar a:"
            for(let i = 0; i<creditos; i++){
                mensaje += `\n${listaSalas[i]}`
            }
            break;
        default:
            if(creditos > 4){
                // for
            }else{
            mensaje = "Dato incorrecto"
            }
    }
 * 
 */