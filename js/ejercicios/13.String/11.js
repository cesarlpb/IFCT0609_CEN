/*
Debes crear una función que reciba tres argumentos: una frase y dos palabras, como resultado la función insertará la segunda palabra detrás de la primera con un espacio por delante y por detrás. Si no se encuentra la palabra después de la que insertar se devuelve la frase original

Por ejemplo 

insertar("nombre:, edad: 30", "nombre:", "Juan"), el resultado será la cadena"nombre: Juan, edad:30"
*/

function insertar(frase, palabra1, palabra2){
  let pos = frase.indexOf(palabra1); // Buscamos la posición de la primera palabra. También se puede usar search()
  if(pos === -1){
    return frase; // Si no se encuentra la primera palabra, devolvemos la frase original
  }else{
    let nuevaFrase = "";
    let strAntes = frase.slice(0, pos + palabra1.length); // Obtenemos la parte de la frase que hay hasta la primera palabra (incluida)
    let strDespues = frase.slice(pos + palabra1.length); // Obtenemos la parte de la frase que hay después de la primera palabra (no incluida)
    nuevaFrase = strAntes + " " + palabra2 + strDespues; // Creamos la nueva frase
    return nuevaFrase;
  }
}
// TODO: Replantear o rehacer on RegExp
// TODO2: Permitir que se añada la palabra2 en cada una de las coincidencias de palabra1 ya que ahora solo busca la primera