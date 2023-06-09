/*
En este ejercicio debes crear una función que reciba como argumento un objeto fecha y devuelva un objeto con tres campos o propiedades: 

Hoy es 17-05-2023, miércoles

- Int dia para el día del mes -> 17
- String diaSemana para el nombre día de la semana (castellano) -> miércoles
- Un string mes: para el nombre del mes (castellano) -> mayo
- Un entero año: para el año con 4 dígitos -> 2023
  {
    dia: 17,
    diaSemana: 'Miércoles',
    mes: 'Mayo',
    año: 2023
  }

* Los nombres de día y mes deben comenzar con mayúsculas.
* Intentad no utilizar arrays.

*/

/**
 * @description Devuelve un objeto con el día, el día de la semana, el mes y el año
 * @param {Date} fecha 
 * @returns {Object} { dia: number, diaSemana: string, mes: string, año: number }
 */
function calcularFecha(fecha){
  let dia = fecha.getDate() // 1 - 31
  let diaSemana = fecha.getDay() // 0 - 6
  let mes = fecha.getMonth() // 0 - 11
  let año = fecha.getFullYear() // 4 dígitos
  return {
    dia: dia,
    diaSemana: diasSemana(diaSemana),
    mes: meses(mes),
    año: año
  }
}

let fechaObj = calcularFecha(new Date())
document.getElementById('resultado').innerHTML =`
<pre>
  Fecha actual:
  <code>
${JSON.stringify(fechaObj, null, 2)}
  </code>
</pre>
`