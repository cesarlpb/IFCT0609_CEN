/*
Diseña una función que sea capaz de encontrar los caracteres comunes entre dos palabras. 

* La función recibe como argumentos dos palabras o frases y 
* devuelve una cadena con los caracteres que haya en común entre ambas ordenados de menor a mayor.
* Se desechan los espacios en blanco.
* No se tiene en cuenta el caso (mayúsuclas o minúsculas) -> case insensitive

Por ejemplo si llamamos a la función comunes("Ciudad", "Cuidar") el resultado será "acdiu"
*/

function charsComunes(string1, string2){
    // Almacenamos la longitud menor de las dos cadenas
    let n = Math.min(string1.length, string2.length);
    // Se puede hacer con ternario también:
    // let n = string1.length < string2.length ? string1.length : string2.length;
    
    // Hacemos una copia de la cadena más corta:
    let stringCorto = string1.length < string2.length ? string1.trim().toLowerCase() : string2.trim().toLowerCase();
    let stringLargo = string1.length > string2.length ? string2.trim().toLowerCase() : string1.trim().toLowerCase();
    // TODO: pensar una forma mejor de hacer esta asignación de variables
    
    let mensaje = "", coindicencias = "";
    if(n === 0) 
    {
      mensaje = "No hay caracteres comunes";
      alert(mensaje);
      return 0;
    }
    else{
      for(let i = 0; i < n; i++){
        let char = stringCorto.charAt(i);
        if(char !== " " && stringLargo.indexOf(char) !== -1){
          if(coindicencias.indexOf(char) === -1){
            coindicencias += char;
          }
        }
      }
      // TODO: pensar una forma mejor de hacer esto sin anidar dos if
      mensaje = "Los caracteres comunes son: " + coindicencias.split("").sort().join("");
    }
    alert(mensaje);
    return 0;
}