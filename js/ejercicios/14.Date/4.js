/*
Crea una función diferencia que sea capaz de calcular el número de días transcurridos entre dos fechas dadas en la forma "año/mes/dia". El resultado debe ser un valor absoluto, o sea, el primer argumento será un fecha anterior o posterior al segundo, pero el resultado será un número de días, sin signo

Por ejemplo si pido diasEntre("2023/03/10", "2023/03/15") deberá devolver que el número entre esas fechas hay 5 días.

*/

// Idea:
// Podemos pasar ambas fechas a unix time -> int
// Hacemos la diferencia entre ambas fechas -> Math.abs() -> +
// Calculamos los días que hay en esta diferencia y redondeamos

/**
 * @description Devuelve el número de días entre dos fechas en valor absoluto
 * @param {string} fecha1 en formato "yyyy/mm/dd"
 * @param {string} fecha2 en formato "yyyy/mm/dd"
 * @returns {number} Número de días entre ambas fechas en valor absoluto
 */
function diasEntre(fecha1, fecha2) {
    // fecha1 y fecha 2 deben ser de la forma "yyyy/mm/dd"
    // Date.parse() -> devuelve el número de ms desde el 1 de enero de 1970
    let fecha1Unix = Date.parse(fecha1) 
    let fecha2Unix = Date.parse(fecha2)
    let diferenciaMs = Math.abs(fecha2Unix - fecha1Unix) // en ms!
    let diferenciaSeg = diferenciaMs / 1000     // en segundos
    let dias = diferenciaSeg / ( 3600 * 24 )    // dias
    return Math.round(dias)
}

document.write(`
<p>Entre el 10-03-2023 y el 15-03-2023 hay ${diasEntre("2023/03/10", "2023/03/15")} días</p>`)
document.write(`<br>`)
document.write(`
<p>Entre el 15-03-2023 y el 15-04-2023 hay ${diasEntre("2023/03/15", "2023/04/15")} días</p>`)
document.write(`<br>`)
document.write(`
<p>Entre el 15-03-2023 y el 15-03-2024 hay ${diasEntre("2023/03/15", "2024/03/15")} días</p>`)