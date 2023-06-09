/**
 * Cuenta atrás
 * 
 * Se trata de que dado un número entero el script muesre una cuenta atrás, es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0.
 * 
 * Si tecle o número 5 deberá mostarar 5,4,3,2,1,0.
 * 
 */

let num = parseInt(prompt("Introduce un número:"))
let mensaje = ""

if(num > 0){
    for(let i = num; i >= 0; i--){
        if(i == 0){
            mensaje += i
        }else{
            mensaje += i + ", "
        } 
    }
}else {
    mensaje = "El dato introducido no es válido.\nDebe ser un número positivo"
}
alert(mensaje)