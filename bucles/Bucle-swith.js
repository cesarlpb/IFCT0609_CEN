// Bucle Switch

let month = ""
let mes = new Month()
switch (fecha.getMonth()) {
    case 0:
      mes = "Enero";
      break;
    case 1:
      mes = "Febrero";
      break;
    case 2:
      mes = "Marzo";
      break;
    case 3:
      mes = "Abril";
      break;
    case 4:
      mes = "Mayo";
      break;
    case 5:
      mes = "Junio";
      break;
    case 6:
      mes = "Julio";
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

let fechaCorta = fecha.toLocaleDateString() // dd/mm/aaaa
let mensaje = "Hoy es " + dia.toLowerCase() + ", " + fechaCorta;
console.log(mensaje)


switch(fecha.getMonth()){
    case 3:
        mensaje = "Estamos en abril!"
        break;
    case 0:
        mensaje = "Fue enero!!"
        break;
    default:
        mensaje = "Es el mes de vacaciones"
}
console.log(mensaje)

switch(fecha.getMonth()){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: 
    case 6:   
        mensaje = "Toca programar!"
        break;
    default:
        mensaje = "Toca descansar!"
}
console.log(mensaje)
