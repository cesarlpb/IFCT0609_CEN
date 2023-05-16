/*
Se trata de crear una función que decodifique un código de producto. 

El código contiene tres partes separadas por un guión:

* Dos caracteres:  CP: cliente particular, CE: empresa
* Dos dígitos: 10 Local, 11 Autonómico, 12 Nacional, 20 * Internacional
* Una cifra que indica el número de años de antigüedad del cliente.
* Si el código es erróneo la función deberá informar del tipo de erorr o errores.

Por ejemplo descifrar("CP-12-3") deberá devolver Cliente particular nacional con 3 años de antigüedad

*/

function descifrar(codigo) {
  let mensaje = "El código no tiene la longitud correcta";
  if (codigo.length < 7) {
    alert(mensaje);
    return -1; // Significa que no hemos recibido un código válido
  } else {
    let arr = codigo.split("-"); // arr con los datos: CP o CE, región o ámbito, años antigüedad
    let cliente = arr[0]; // CP o CE
    let region = Number(arr[1]); // 10, 11, 12, 20
    let antiguedad = arr[2]; // digitos pero no validamos que sean números 
    // TODO: validar que no sea NaN ni número negativos

    let tipoCliente = "", tipoRegion = "";
    if(cliente === "CP") {
      tipoCliente = "particular";
    } else if(cliente === "CE") {
      tipoCliente = "empresa";
    }else{
      mensaje = "El código de cliente no es correcto"
      alert(mensaje);
      return -1;
    }

    switch(region) {
      case 10:
        tipoRegion = "Local";
        break;
      case 11:
        tipoRegion = "Autonómico";
        break;
      case 12:
        tipoRegion = "Nacional";
        break;
      case 20:
        tipoRegion = "Internacional";
        break;
      default:
        mensaje = "El código de región no es correcto"
        alert(mensaje);
        return -1;
    }
    mensaje = `Cliente ${tipoCliente} ${tipoRegion} con ${antiguedad} años de antigüedad`;
  }
  alert(mensaje);
  return 0; // Significa que hemos recibido un código válido, return 1 o return -1 puede significar que no es válido o que algún dato es incorrecto
}
