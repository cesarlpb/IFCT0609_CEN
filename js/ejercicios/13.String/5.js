/*
Escribe una función que reciba como argumento una frase y devuelva la misma frase pero con la inicial de cada palabra en mayúsculas

Por ejemplo cambInicial("pero no tengo hambre ") debería devolver la frase Pero No Tengo Hambre
*/

// hola mundo -> Hola Mundo
function capitalize(string){
    // Para evitar que el split nos coloque espacios vacíos en el array, usamos trim() para eliminarlos:
    let arr = string.trim().split(' ') // separamos en palabras el string
    let arrMayus = arr.map((palabra) => {
        return palabra[0].toUpperCase() + palabra.slice(1)
    })
    return arrMayus.join(' ') // volvemos a unir las palabras modificadas en un string
}