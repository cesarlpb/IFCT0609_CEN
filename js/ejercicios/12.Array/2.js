/*
Crea un objeto Array con los días laborables de la semana (Lunes a Viernes) y utiliza un método del objeto para recorrer el array y convertir cada elemento de ese array a mayúsculas. sa console.table para ver el resultado.
*/

// Este ejercicio se puede for, while, etc.

let diasLaborables = ["lunes", "martes", "miércoles", "jueves", "viernes"]
let diasEnMayus = diasLaborables.map(dia => dia.toUpperCase()) // Guardamos en esta variable el array en mayúsculas
console.table(diasEnMayus) // salen los días en mayúsculas
console.log(diasLaborables) // los datos originales del array no han cambiado