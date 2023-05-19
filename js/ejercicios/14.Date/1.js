/*
En este ejercicio el usuario te dará su fecha de nacimiento y debes escribir la función que calcula el dia de la semana en que nació. Se supone que el usuario introducirá los datos numéricos correctamente y en una fecha real.

Por ejemplo si la fecha de nacimiento es el 3 de febrero de 1990 (3, 2, 1990) la función debe decirte que nació en Sábado

Pedimos que escriba el formato de fecha: dd/mm/aaaa

*/

let fechaStr = prompt("Introduce tu fecha de nacimiento en formato dd/mm/aaaa: ")
/* Observación:
Este formato puede ser un poco confuso para hispanohablantes ya que en España y en la mayoría de países de habla hispana se usa el formato dd/mm/aaaa, hay dos opciones para cambiar esto:
1. Mirar en la documentación como funciona la conversión de string con Date() para ver si es posible cambiar el formato de fecha que espera el constructor
2. Hacemos una función que nos haga el cambio en el string que pasamos a Date()

dd/mm/aaaa -> mm/dd/aaaa

*/
let fecha = new Date(cambiarFormato(fechaStr))
let dia = fecha.getDay() // le pasamos este dato a diasSemana() para que nos devuelva el nombre del día
let diaSemana = diasSemana(dia)
if(!diaSemana){
    alert("Formato de fecha incorrecto")
  }else{
    console.log(diaSemana)
    alert(`Naciste un ${diaSemana}`)
  }

// ¡Esta función es muy útil! 👀
function cambiarFormato(fechaStr){
  // Recibimos un string con datos separados por / -> dd/mm/aaaa
  let arr = fechaStr.split("/")
  if(arr.length !== 3){
      console.error("Formato de fecha incorrecto")
      return ""
  }else{
      let [dia, mes, año] = arr;
      return `${mes}/${dia}/${año}`
  }
}