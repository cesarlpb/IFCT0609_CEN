// Programa para recibir una fecha objetivo como String y calcular cuánto queda hasta esa fecha desde el día de hoy
let fechaObjetivo = prompt("Introduce una fecha final en formato mm/dd/yyyy:")
console.log(fechaObjetivo, typeof(fechaObjetivo))
// Usamos el formato anglosajón con el mes primero por ahora
// 01/02/2023 == 2 de enero de 2023
// No validamos si el dato es incorrecto pero si no es una fecha válidad obtendremos "invalid date"
fechaObjetivo = new Date(fechaObjetivo) //-> fecha
console.log(fechaObjetivo, typeof(fechaObjetivo))
let fechaHoy = new Date()
// Diferencia en ms
let ms = fechaObjetivo.getTime() - fechaHoy.getTime() // la diferencia de ambas fechas en unix time -> int
// Pasamos a segundos
let seg = ms / 1000
// Pasamos a horas
let horas = seg / 3600
// Pasamos a días
let dias = horas / 24

document.getElementById("fechaObjetivo").innerText = "Fecha objetivo: " + fechaObjetivo.toLocaleDateString() // string
document.getElementById("dias").innerText = "Quedan " + Math.ceil(dias) + " días."