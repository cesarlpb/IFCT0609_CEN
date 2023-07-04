/*

Escribe una función que pueda devolver el valor más pequeño de un array numérico o el índice de ese valor. El segundo parámetro de la función dirá si debe devolver el valor ("v") o el índice ("i"). No uses métodos del objeto array.

Se supone que el primer parámetro siempre será una matriz llena con al menos 1 número y sin duplicados.

Se suponer el segundo parámetro será una letra con uno de dos valores: 'v' 'i'

min([4,5,7], 'v')  devolverá 4, mientras que min([4,5,7], 'i') devolverá 0.

min([4,5,7], 'v') devuelve el valor mínimo -> 4
min([4,5,7], 'i') devuelve el índice -> 0

*/

function min(arr, opcion = "v"){
    let min = Infinity
    let indice; // undefined

    // Suponemos que el array no esta vacío
    for(let i = 0; i<arr.length; i++){
        let el = arr[i]
        if(el<min){
            min = el
            indice = i
        }
    }
    // Suponemos que opcion es "v" o "i"
    if(arr.length > 0 && opcion == "v"){
        return min
    }else if(arr.length > 0 && opcion == "i"){
        return indice
    }else if(arr.length == 0){
        return "El array esta vacío"
    }
    else{
        return "Opcion no válida"
    }
}