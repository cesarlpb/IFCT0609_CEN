// Bucle Switch

let dia = ""
let fecha = new Date()
switch (fecha.getDay()) {
    case 0:
      dia = "Domingo";
      break;
    case 1:
      dia = "Lunes";
      break;
    case 2:
      dia = "Martes";
      break;
    case 3:
      dia = "Miércoles";
      break;
    case 4:
      dia = "Jueves";
      break;
    case 5:
      dia = "Viernes";
      break;
    case 6:
      dia = "Sábado";
  }

let fechaCorta = fecha.toLocaleDateString() // dd/mm/aaaa
let mensaje = "Hoy es " + dia.toLowerCase() + ", " + fechaCorta;
console.log(mensaje)


switch(fecha.getDay()){
    case 6:
        mensaje = "Hoy es sábado!"
        break;
    case 0:
        mensaje = "Hoy es domingo!!"
        break;
    default:
        mensaje = "Es día laboral"
}
console.log(mensaje)

switch(fecha.getDay()){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        mensaje = "Hoy toca programar!"
        break;
    default:
        mensaje = "Hoy toca descansar!"
}
console.log(mensaje)

// Ejercicio: hacer un switch que me escriba el mes actual a partir de getMonth()

let mes = ""

switch(fecha.getMonth()){
    case 0:
        mes = "Enero"
        break;
    case 1:
        mes = "Febrero"
        break;
    case 2:
        mes = "Marzo"
        break;
    case 3:
        mes = "Abril"
        break;
    case 4:
        mes = "Mayo"
        break;
    case 5:
        mensaje = "Junio"
        break;
    case 6:
        mes = "Julio"
        break;
    case 7:
        mes = "Agosto"
        break;
    case 8:
        mes = "Septiembre"
        break;
    case 9:
        mes = "Octubre"
        break;
    case 10:
        mes = "Noviembre"
        break;
    case 11:
        mes = "Diciembre"
}
console.log(mes)