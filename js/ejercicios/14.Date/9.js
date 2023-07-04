/*
Te propongo que crees una función para determinar el número de días de cada mes, por supuesto sin usar arrays con meses y días, si no usando el objeto Date. La función recibe como argumento una fecha.

Así por ejemplo:

diasMes("2000/2/1"), es el mes de febrero de un año bisiesto, luego dará como resultado 29

diasMes("2023/1/1") dará 31
*/

/**
 * Calcula el máximo número de días de un mes a partir de una fecha
 * @param {string} fecha_ yyyy/mm/dd
 * @returns {number} Número de días del mes
 */
// TODO: arreglar discrepancia de 2 días y eliminar al menos un contador
function ultimoDiaDelMes(fecha_){
    let fecha = new Date(fecha_);
    if(isNaN(fecha.valueOf())){
        throw new Error("Fecha no válida");
    }
    let dia = fecha.getDate(); 
    let mes = fecha.getMonth();
    let nuevaFecha = fecha;
    let ultimoDia = dia;
    let contador = 0;
    while(mes == fecha.getMonth() && !isNaN(nuevaFecha)){
      nuevaFecha = new MiDate(new Date(fecha_)).sumarDias(contador).fecha; // objeto Date()
      contador++;
      ultimoDia++;
      mes = nuevaFecha.getMonth();
      console.log(mes, nuevaFecha, fecha.getMonth())
    }
    return ultimoDia-1; // discrepancia de 2 días ???
}

function diasMes(fecha) {
  // Convertir la fecha en formato "YYYY/MM/DD" a un objeto Date
  let date = new Date(fecha);

  // Obtener el mes y el año de la fecha
  let month = date.getMonth() + 1; // Se suma 1 porque los meses en JavaScript van de 0 a 11
  let year = date.getFullYear();

  // Determinar el último día del mes
  let lastDay = new Date(year, month, 0).getDate();

  return lastDay;
}