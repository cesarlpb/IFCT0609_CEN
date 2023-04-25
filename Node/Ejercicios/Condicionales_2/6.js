let Mes, estacion;
Mes = parseInt(prompt("Indica el número del mes 1 al 12"));

function obtenerEstacion(mes) {
  if (mes >= 1 && mes <= 12) {
    if (mes === 1 || mes === 2 || mes === 12) {
      return "invierno";
    } else if (mes >= 3 && mes <= 5) {
      return "primavera";
    } else if (mes >= 6 && mes <= 8) {
      return "verano";
    } else {
      return "otoño";
    }
  } else {
    return "El número ingresado no es válido";
  }
}

estacion = obtenerEstacion(Mes);
console.log(`La estación del año correspondiente al mes ${nMes} es ${estacion}`);
