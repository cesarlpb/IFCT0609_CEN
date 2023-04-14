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