/**
 * 
 * Escribe una función que determina si la letra que se le pasa como argumento se encuentra contenida dentro de un array de letras que se le pasa como segundo argumento.

Se trata de resolverlo sin usar métodos del objeto array, solo el dato tipo array.

existeEn('a', ['w','e','r','i']) devolverá false porque la letra 'a' no existe en el array

existeEn('a', ['w','e','r','i']) -> false
existeEn('w', ['w','e','r','i']) -> true

 */

function existeEn(char, arr){
    if(arr.length > 0 && char){
        for(let i = 0; i<arr.length; i++){
            if(char == arr[i]){
                return true
            }
        }
        return false
    }else{
        if(arr.length == 0){
            return "Array vacío"
        }else{
            return "Char vacío"
        }
    }
}