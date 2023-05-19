let cumpleaños = prompt("Introduce tu fecha de nacimiento en formato dd/mm/aaaa: ")

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

let fecha = new Date(cambiarFormato(cumpleaños)) // obj fecha en formato mm/dd/aaaa ...
let fechaActual = new Date()

let años =  fechaActual.getFullYear() - fecha.getFullYear()

let diaCumple = fecha.getDate() // dd
let mesCumple = fecha.getMonth() // mm
let fechaCumpleEsteAño = new Date(fechaActual.getFullYear(), mesCumple, diaCumple) // mm/dd/aaaa

let haPasadoSuCumple = fechaCumpleEsteAño < fechaActual

alert(`Tienes ${años} años. ${haPasadoSuCumple ? "Ya has cumplido años" : "Aún no has cumplido años"}`)

// haPasadoSuCumple = true -> calcular el cumple del año que viene
// haPasadoSuCumple = false -> calcular el cumple de este año

// Calcular el tiempo que queda para ese cumpleaños

// Actualizar este dato cada segundo en un <div> en el html