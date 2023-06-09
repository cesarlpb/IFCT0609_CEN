/*
Esta función que se pide va a recibir como argumento un texto con información. El texto es una cadena donde aparecen pares de la forma nombre dato: valor dato. La función debe convertir esta cadena en un objeto con campos identificados con nombre dato y valor dado por valor dato.

Ejemplo leeDato("nombre: juan, apellidos: Perez Sanchez, edad: 10, nivel: base") esto dará lugar al objeto
{
  nombre: "juan", 
  apellidos:"Perez Sanchez", edad:10, 
  nivel:"base"
}

*/
function leeDato(texto){
  let obj = {};
  if(texto.length === 0){
    return {};
  }else{
    let arr = texto.split(",");
    for(let i = 0; i<arr.length; i++){
      let [key, value] = arr[i].split(":")
      let llave = key.trim().toLowerCase()
      if(!obj[llave]){
        console.log(llave)
        if(value){
          obj[llave] = value.trim();
        }else{
          // Mensaje de error en consola:
          console.error("No se ha encontrado el valor para la llave: ", llave)
          // Mensaje de error en la página (nos saca de la función):
          throw new Error("No se ha encontrado el valor para la llave: ", llave)
        }
      }
      // else implica que la llave ya existe, entonces:
      // 1. Sobreescribimos ?
      // 2. No hacemos nada ?
    }
  }
  return obj;
}