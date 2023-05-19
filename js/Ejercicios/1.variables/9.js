/*
Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.

Teiens que escribir un prograa que intercambie el valor de dos variables. Al final la primera variable debe terner el valor de la sgudna y la segunda el valor de la primera.

Antes:

varUno vale 10, varDos vale 30

Al final

varUno vale 30, varDos vale 10
*/

let a = 10
let b = 30
console.log(`a vale ${a} y b vale ${b}`)

let temp // undefined
console.log("temp", temp)
temp = a // temp = 10
console.log("temp", temp)

a = b // a es 30
b =  temp // b = 10
console.log(`a vale ${a} y b vale ${b}`)