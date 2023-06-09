/*
Crea una función que reciba como argumento una cadena de caracteres y devuelva una cadena con todas las vocales y el número de veces que aparece cada una en la cadena argumento.

Procura usar prioritariamente los métodos del objeto string

Ejemplo cuentaVocales("Hola soy Pepe") deberá imprimir 
a:1, e:2, i:0, o:2, u:0
*/

function cuentaVocales(string) {
    let vocales = "aeiou"; // podemos usar un string que es un array de caracteres o un array de caracteres -> en ambos se usan índices numéricos
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

function cuentaVocales2(string) {
    let vocales = "aeiou";
    let contador = [0, 0, 0, 0, 0];
    [...string].map(char => {
        let index = vocales.indexOf(char); // devuelve 0-4 si lo encuentra o -1 si no lo encuentra
        if (index >= 0) {
            contador[index]++;
        }
    })
    // TODO: sería interesante plantear esto con un map o con un objeto que agrupe ambos arrays
    return `a:${contador[0]}, e:${contador[1]}, i:${contador[2]}, o:${contador[3]}, u:${contador[4]}`
}