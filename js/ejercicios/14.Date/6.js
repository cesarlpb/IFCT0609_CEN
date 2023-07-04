/*
En este ejercicio vas a crear una función capaz de determinar el número de horas, minutos y segundos entre dos horas de un mismo día. La función que puedes llamar intervalo tiene dos argumentos string con los tiempos en formato hh:mm:ss.

Si llamo a intervalo("12:20:30" , "14:25:00")  esto debería dar como resultado 2horas, 4minutos y 30 segundos.
*/

/**
 * Calcula el intervalo entre dos horas del mismo día en hh:mm:ss
 * @param {string} hora1 
 * @param {string} hora2 
 * @returns {string} intervalo en formato hh:mm:ss
 */
function intervaloIntradia(hora1, hora2) {
    let f = new Date(); // Fecha actual
    let fecha = `${f.getFullYear()}/${f.getMonth() + 1}/${f.getDate()}`;
    let fecha1 = new Date(`${fecha} ${hora1}`); // yyyy/mm/dd hh:mm:ss
    let fecha2 = new Date(`${fecha} ${hora2}`); // yyyy/mm/dd hh:mm:ss

    if(isNaN(fecha1.valueOf())){
        throw new Error("La hora 1 no es válida");
    }
    if(isNaN(fecha2.valueOf())){
        throw new Error("La hora 2 no es válida");
    }
    
    let intervalo = Math.abs(fecha2.getTime() - fecha1.getTime()); // diferencia de tiempos en ms
    intervalo /= 1000; // diferencia de tiempos en segundos
    let horas = Math.floor(intervalo / 3600); // horas
    let minutos = Math.floor( (intervalo - (horas * 3600))/60 ); // minutos
    let segundos = Math.floor(intervalo - (horas * 3600) - (minutos * 60)); // segundos
    return `${horas}:${minutos}:${segundos}`;
}

let intervalo = intervaloIntradia("12:20:30" , "14:25:00")
document.write("Entre las 12:20:30 y las 14:25:00 hay: ");
document.write(intervalo);

let intervalo2 = intervaloIntradia("23:20:30" , "14:25:00")
document.write("<br>");
document.write("Entre las 23:20:30 y las 14:25:00 hay: ");
document.write(intervalo2);

let intervalo3 = intervaloIntradia("12:00:00" , "a") // Error
// Estas línea no se ejecutan:
document.write("<br>");
document.write("Entre las 12 y las a hay: ");
document.write(interval3);

// TODO: Modificar el programa para calcular intervalo de tiempo en hh:mm:ss entre dos días distintos