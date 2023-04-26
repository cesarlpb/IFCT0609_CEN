/**
 * Se trata de dibujar un triángulo con asteriscos. 
 * 
 * El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.
Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.
Le tecleamos el valor 5. El resultado será:
*
**
***
****
*****
 */

let num = prompt("Introduce un número entero:")
let mensaje = ""

if(num == parseInt(num) && Number(num) > 0){
    for(let i = 0; i<=num; i++){
        for(let j = 0; j<i; j++){
            mensaje += "*"
        }
        mensaje += "\n"
    }
}else{
    mensaje = "Debes introducir un número positivo"
}
console.log(mensaje)