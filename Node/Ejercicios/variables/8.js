/*
Una tortilla de patatas lleva 200 gramos de patatas por persona. 
Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 
Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias
5 comensales,
Se necesitará:
1 kg de papas
5 huevos
300 gr de cebolla
*/

let comensales = Number(prompt("Introduce número de comensales:"))

let patatasGr = comensales * 200 // gramos
let patatasKg = patatasGr / 1000 // kg
let huevos = patatasKg * 5 // número de huevos
let cebollaGr = patatasKg * 300 // gramos

console.log(`
Se necesitará:

${patatasKg} kg de patatas

${huevos} huevos

${cebollaGr} gr de cebolla
`)

