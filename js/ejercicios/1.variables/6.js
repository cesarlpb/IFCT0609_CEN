/*
Cambio de unidades. En este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.

Recuerda una hora son 60 minutos y cada minuto son 60 segundos.

horas : 2

minutos 30

Resultado 2*60*60 + 30*60 = 9000 segundos
*/

let horas = Number(prompt("Introduce número de horas:"))
let minutos = Number(prompt("Introduce número de minutos:"))
let segundos = horas * 60 * 60 + minutos * 60
console.log(horas, ":", minutos, "equivalen a", segundos, "segundos")