/*
Crear una función que reciba como parámetro una lista de palabras separadas por coma. 

* La función deberá agrupar las palabras que comienzan por la misma letra en objetos de la forma:

  * key : value o llave : valor -> en objetos de javascript los keys TIENE QUE SER strings * 

  {
    "letra": [lista de palabras],
    "a": ["alma", "amor", "agua"],
    "b": ["barco", "bola", "bolsa"],
    etc... 
  }
* No se debe distinguir entre mayúculas y minúsculas. 
* Las palabras deben mantener su tipo de mayúsculas o minúsculas -> IMPORTANTE: no se modifican las palabras que se reciben.

Un ejemplo de uso podría ser:

agrupar("Avion, avispa, tigre, leon, Tejón, lince, abeja, abejorro"), resultado:

{
  a: 'abeja, abejorro, Avion, avispa', 
  l: 'leon, lince', 
  t: 'Tejón, tigre'
}
*/

function agrupar(palabras){
  // Recibimos palabras separadas por coma, entonces, las pasamos a un array:
  let arr = palabras.split(",");
  arr = arr.map( palabra => palabra.trim() );
  let palabrasAgrupadas = {};
  for(let i = 0; i<arr.length; i++){

    // Tomamos la primera letra de la palabra:
    let palabra = arr[i]; // palabra que iteramos
    let char = palabra[0].toLowerCase(); // primera letra de la palabra de la palabra que iteramos

    // Si no existe la letra en el objeto, la creamos:
    let keys = Object.keys(palabrasAgrupadas);
    if(keys.includes(char)){
      // Si existe, añadimos la palabra al array de palabras:
      palabrasAgrupadas[char].push(palabra);
      // Ordenamos el array de palabras:
      palabrasAgrupadas[char] = palabrasAgrupadas[char].sort(); // NOTA: esta ordenación no es la mejor idea porque estaríamos haciendo un sort cada vez que añadimos un elemento, sería mejor ordenar una vez al final
    }else{
      // Si no existe, creamos el array de palabras:
      palabrasAgrupadas[char] = [palabra];
    }
  }
  // TODO: ordenar los arrays alfabéticamente usando sort() cuando ya hemos acabado el bucle -> escalable
  // TODO (más difícil): otra opción sería añadir el elemento en el array manteniendo el orden alfabético -> escalable
  return palabrasAgrupadas;
}