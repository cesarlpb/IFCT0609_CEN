function meses(mes) {
// Recibe el número del mes de Date() -> 0 - 11
// y retorna el mes en español
// 0 -> Enero ... 11 -> Diciembre
  switch (mes) {
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
      mensaje = "Junio";
      break;
    case 6:
      mes = "Julio";
      break;
    case 7:
      mes = "Agosto";
      break;
    case 8:
      mes = "Septiembre";
      break;
    case 9:
      mes = "Octubre";
      break;
    case 10:
      mes = "Noviembre";
      break;
    case 11:
      mes = "Diciembre";
  }
  return mes;
}
