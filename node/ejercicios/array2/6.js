/*
En este ejercicio debes crear dos arrays para representar dos equipos de trabajo. Al primer array le llamaremos ocupados y al segundo libres. Ambos están llenos con 5 nombres.

Debes crear una función rotar(lst1, lst2) que pase el primer nombre de la lista lst1 a l final de lst2, y luego el primero de la lst2 a l final de lst1.

Para ver que funciona escribe los arrays antes y después de usar esta función.

Por ejemplo: Inicialmente tenemos ocupados: Pedro, Luisa, Juan, Ana y libres Marina, Jose, Alba, Felipe.
Tras llamar a la función de ocupados sale Pedro t entra Marina. Y de libres sale Marina y entra Pedro.
Quedarán en ocupados Luisa, Juan, Ana , Marina y en libres Jose, Alba, Felipe, Pedro.
*/

let ocupados = ["Pedro", "Luisa", "Juan", "Ana"]
let libres = ["Marina", "Jose", "Alba", "Felipe"]

function rotar(ocupados, libres){
    // Primero, borramos los primeros elementos de cada array
    let primerOcupado = ocupados.shift()
    let primerLibre = libres.shift()
    // Luego, añadimos los elementos borrados al final de cada array
    ocupados.push(primerLibre)
    libres.push(primerOcupado)
    return "Listas actualizadas"
}