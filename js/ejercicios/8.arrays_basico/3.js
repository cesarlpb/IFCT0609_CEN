/*

Sin usar métodos del objeto array, diseña una función llamada sumaLista() capaz de sumar todos los números que forman el array que se le pase como argumento.

Si ejecuto sumaLista([2,4,5,1,2]) deberá devolver como resultado 14

sumaLista([])    ->  0 // convenio que estamos adoptando para este caso
sumaLista([1,NaN])-> 0 // convenio
sumaLista([1])   ->  1 // ok
sumaLista([1,2]) ->  3 // ok
etc

*/

function sumarLista(arr){
    let suma = 0
    if(arr.length == 0){
        return 0
    }else{
        for(let i = 0; i<arr.length; i++){
            let sumando = arr[i]
            if( isNaN(sumando) || !isFinite(sumando) ){
                return 0
            }else{
                suma += arr[i]
            }
        }
    }
    return suma
}