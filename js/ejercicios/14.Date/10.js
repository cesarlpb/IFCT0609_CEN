/*
En este ejercicio debes añadir un nuevo método al objeto Date, se llamara getWeek y debe devolver el número de semana para una fecha determinada.

* Según la norma norma ISO 8601 las semana comienzan en Lunes y 

Lunes, martes, miércoles o jueves:
* Si el año comienza antes del viernes esa es la semana 1 del año, 

* En caso contrario (viernes, sábado o domingo el día 1 de enero) esa es la última semana del año anterior. 

* Si el año termina antes del jueves esa última semana se cuenta como semana 1 del año siguiente. 

Si defino el objeto fecha = new Date('2023/3/27') entonces fecha.getWeek() me dará el número de la semana actual que es 13.

Para el 1 de enero de 2023 que fue domingo obtenemos que el num de semana es 52
*/

/**
 * Calcula la semana del año de una fecha
 * @param {Date} fecha Objeto Date
 * @returns {number} Número entero de la semana
 */
function getWeek(fecha){
  let semana = 0;
  let primerDiaAño = new Date(fecha.getFullYear(), 0, 1).getDay(); // 0-6 Domingo-Sábado
  // * Si el año comienza antes del viernes esa es la semana 1 del año -> entre 1 y 4
  let primerLunesBucle = 0;
  if(primerDiaAño > 0 && primerDiaAño < 5){
    semana++;
  }
  // Calculamos el primer día para empezar el bucle:
  if(primerDiaAño === 1){
    primerLunesBucle = 8;
  } else {
    let primerDiaBucle = new Date(fecha.getFullYear(), 0, 1).getDay();
    while(primerDiaBucle != 1){
      primerLunesBucle++;
      primerDiaBucle = new Date(fecha.getFullYear(), 0, primerLunesBucle).getDay();
    }
    console.log(primerLunesBucle)
  }
  // Necesitamos ubicar el segundo lunes del año si el 1 de enero es lunes o el primer lunes si el 1 de enero no es lunes

  // * En caso contrario (viernes, sábado o domingo el día 1 de enero) esa es la última semana del año anterior -> 4, 5, 6 ==> en este caso la semana sigue siendo 0

  let fechaComparacion = new Date(fecha.getFullYear(), 0, primerLunesBucle);
  while(fechaComparacion <= fecha){
    semana++;
    fechaComparacion.setDate(fechaComparacion.getDate() + 7);
  }
  console.log(fechaComparacion, fecha)
  return semana;
}
