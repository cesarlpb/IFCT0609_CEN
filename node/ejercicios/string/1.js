/*
Crea una función que reciba como argumento una cadena de caracteres y devuelva una cadena con todas las vocales y el número de veces que aparece cada una en la cadena argumento.

Procura usar prioritariamente los métodos del objeto string

Ejemplo cuentaVocales("Hola soy Pepe") deberá imprimir 
a:1, e:2, i:0, o:2, u:0
*/

function cuentaVocales(string) {
    let vocales = "aeiou"; // podemos usar un string que es un array de caracteres o un array de caracteres -> en ambos se usan índices numéricos
    let resultado = "";
    let contadorA = 0, contadorE = 0, contadorI = 0, contadorO = 0, contadorU = 0;
    for (let i = 0; i < string.length; i++) {
        let char = string[i].toLowerCase();
        switch(char){
            case "a":
                contadorA++;
                break;
            case "e":
                contadorE++;
                break;
            case "i":
                contadorI++;
                break;
            case "o":
                contadorO++;
                break;
            case "u":
                contadorU++;
        }
    }
    return `a:${contadorA}, e:${contadorE}, i:${contadorI}, o:${contadorO}, u:${contadorU}`
}
