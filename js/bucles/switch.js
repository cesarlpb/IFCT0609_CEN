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