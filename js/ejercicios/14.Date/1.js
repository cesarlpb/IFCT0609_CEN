/*
En este ejercicio el usuario te dará su fecha de nacimiento y debes escribir la función que calcula el dia de la semana en que nació. Se supone que el usuario introducirá los datos numéricos correctamente y en una fecha real.

Por ejemplo si la fecha de nacimiento es el 3 de febrero de 1990 (3, 2, 1990) la función debe decirte que nació en Sábado

Pedimos que escriba el formato de fecha: dd/mm/aaaa

*/

let fechaStr = prompt("Introduce tu fecha de nacimiento en formato mm/dd/aaaa: ")
let fecha = new Date(fechaStr)
let dia = fecha.getDay() // le pasamos este dato a diasSemana() para que nos devuelva el nombre del día
console.log(dia)
let diaSemana = diasSemana(dia)
alert(`Naciste un ${diaSemana}`)