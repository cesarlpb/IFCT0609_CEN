/*
Crea un array bidimensional para almacenar nombre y calificación de un grupo de asistentes a un curso. Una vez creado rellenalo con al menos 4 elementos y luego ordénalos por orden crecientes de las calificaciones. 

Por ejemplo: Juan 5,Luisa 7, Ana 4, Pedro 3. 

Al ordenarlo DESC debe quedar: Luisa 7, Juan 7, Ana 4, Pedro 3.  

En orden ASC en las notas: Pedro 3, Ana 4, Juan 7, Luisa 7.

*/

let arr = [["Juan", 5], ["Luisa", 7], ["Ana", 4], ["Pedro", 3]]
/*
asc -> ascendente  -> de menor a mayor o en orden alfabético
desc-> descendente -> de mayor a menor o en orden alfabético inverso
*/

// Algoritmo para ordenar las notas:
// 5, 7, 4, 3
// 5 como pivote -> 7, 4, 3 -> 5, 4, 3, 7
// 5 como pivote -> 5, 4, 3 -> 4, 3, 5
// 4 como pivote -> 4, 3 -> 3, 4
// 3, 4, 5, 7

// Usando sort()
// sort() modifica el array original y ordena ascendente por defecto
// toSorted() devuelve un nuevo array ordenado y asc por defecto SIN modificar el array original

// TODO: colocar validaciones o condiciones en las cuales no se ordena el array

function ordenar(arr, orden = "asc", indice = 1){
    // indice = 0 -> ordenar por nombre
    // indice = 1 -> ordenar por nota
    if(indice == 0 && orden == "asc"){
        return arr.sort() // orden alfabético
    }else if(indice == 0 && orden == "desc"){
        return arr.sort().reverse() // orden alfabético inverso
        // Primero se ordena alfabéticamente y luego se invierte el orden del array
    }else if(indice == 1 && orden == "asc"){
        // a-b -> ascendente
        return arr.sort((a, b) => a[indice] - b[indice])
    }else if(indice == 1 && orden == "desc"){
        // b-a -> descendente
        return arr.sort((a, b) => b[indice] - a[indice])
    }
}

/*

// if clause
if(indice != 0 && indice != 1){
    return "valor de índice incorrecto"
}
if(orden != "asc" && orden != "desc"){
    return "valor de orden incorrecto"
}

... Lógica de ordenación...

if(indice == 0){
    if(orden == "asc"){ ... }
    else if(orden == "desc"){ ... }
}
else if(indice == 1){
    if(orden == "asc"){ ... }
    else if(orden == "desc"){ ... }
}
else { "valor incorecto"}
*/