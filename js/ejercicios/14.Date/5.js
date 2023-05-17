/*
Este ejercicio va a consistir en crear un objeto similar al objeto Date, al que llamaremos MiDate, con los métodos: sumar, restar. 

* Estos sumarán o restarán un número de días a la fecha representada por el objeto.

Por ejemplo creo el objeto miFecha (new MiDate() ) para tener el día de hoy. 
Si hago miFecha.sumar(1) tendré la fecha de mañana: hoy más 1 día.
*/

class MiDate{
  constructor(fecha_ = new Date()){
    // Boolean para comprobar si es una fecha válida:
    let esFechaValida = fecha_ instanceof Date && !isNaN(fecha_.valueOf()) // alternativa con isNaN: !isNaN(fecha_.getTime())
    this.fecha = esFechaValida ? fecha_ : new Date("fecha no válida")
  }
  /**
   * Método para sumar o restar días a una fecha
   * @param {number} dias  - positivo o negativo
   * @returns objeto de fecha MiDate() con valor modificado en días
   */
  sumarDias(dias){
    let diasEnMs = dias * 24 * 60 * 60 * 1000 // ms
    let fechaEnMs = this.fecha.getTime() // pasa Date() a unix time en ms
    let nuevaFecha = new Date(fechaEnMs + diasEnMs)
    return new MiDate(nuevaFecha) // devuelve objeto Date() con la cantidad sumada/restada de días
  }
  toString(){
    return this.fecha.toLocaleDateString() // dd/mm/aaaa
  }
}

let miFecha = new MiDate()        // 17-05-2023
let mañana = miFecha.sumarDias(1) // 18-05-2023
let ayer = miFecha.sumarDias(-1)  // 16-05-2023
let proximaSemana = miFecha.sumarDias(7) // 24-05-2023
let mesPasado = miFecha.sumarDias(-30)   // 17-04-2023

document.write(`Hoy es: ${miFecha}<br>`)
document.write(`Mañana será: ${mañana}<br>`)
document.write(`Ayer fue: ${ayer}<br>`)
document.write(`La próxima semana será: ${proximaSemana}<br>`)
document.write(`El mes pasado fue: ${mesPasado}<br>`)
