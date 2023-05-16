/*
En este caso se trata de escriir una función javascript que acepte como argumento una cadena de caracteres y reúna los espacios repetidos en un solo espacio. Una especie de comrpesora de espacios. Resolverlo sin usar expresioens regulares ni arrays, solo el objeto string.

Por ejemplo tenemos la llamada unirEspacios("HTML       es      muy  fácil"), deberá devolver "HTML es my fácil"

*/
// console.log(char, char == " ", prevChar);
function myTrim(string){
    let stringTrim = "";
    let prevChar = "";
    for(let i = 0; i<string.length; i++){
        let char = string[i];
        // Si no es el primer caracter, almacenamos el anterior
        // Si es el primer caracter, no almacenamos nada porque tenemos ""
        if(i > 0){
            prevChar = string[i-1];
        }
        if(char == " "){
            // Si es espacio y el anterior también lo es, no lo añadimos
            // Si es espacio y el anterior no lo es, si lo añadimos porque sería el primer espacio que encontramos entre palabras
            if(prevChar !== " "){
                stringTrim += char;
            }
        }else{
            stringTrim += char;
        }
    }
    return stringTrim;
}