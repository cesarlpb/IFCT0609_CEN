/*
Crea una función javascript que reciba como argumento una frase y que devuelva el número de espacios, dígitos y letras  contenidos en la frase. Puedes usar expresiones regulares

Si llamo ala funcion contarCars("Si, hoy es dia 10") debería devolver
2 digitos, 4 espacios y 10 letras
*/

// Usando bucles:
function contarCars(string) {
    let digitos = 0, espacios = 0, letras = 0
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if (parseInt(char) == char) {
            digitos++
        } else if (char == " ") {
            espacios++
        } else if (esLetra(char)) {
            letras++
        }
    }
    return `${digitos} digitos, ${espacios} espacios y ${letras} letras`
}

function esLetra(char){
    let charCode = char.charCodeAt(0);
    // Fuente: https://www.tutorialspoint.com/how-to-validate-an-input-is-alphanumeric-or-not-using-javascript?ranMID=49144&ranEAID=mP6UMnc5Ozo&ranSITEID=mP6UMnc5Ozo-f0.kFn3DocAGIUDHkqVC2A
    // Tabla ASCII: https://www.asciitable.com/
    // rango de dígitos: !(charCode > 47 && charCode < 58) 
    if (!(charCode > 96 && charCode < 123) &&
    !(charCode > 64 && charCode < 91) &&
    !(charCode > 191 && charCode < 221) && // Á, É, Í, Ó, Ú... Ñ
    !(charCode > 223 && charCode < 253) // á, é, í, ó, ú... ñ
    ) {
        return false;
    } 
    return true;
}

// Observación: charCodeAt() se basa en la lista de chars UTF-16, referencias:
// https://asecuritysite.com/coding/asc2
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

// Usando RegExp:
function contarCars2(string) {
    let digitos = string.match(/\d/g).length
    let espacios = string.match(/\s/g).length
    let letras = string.match(/[a-z]/gi).length
    return `${digitos} digitos, ${espacios} espacios y ${letras} letras`
}

// TODO: Extender para caracteres especiales
