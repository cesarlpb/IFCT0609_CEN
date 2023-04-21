/**
 * En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.
 * 
 * 40 y 60 km/h => pasa
 * 
 * si esta fuera del intervalo => no pasa / descalificado
 * 20 => no pasar
 * 80 => no pasar
 * 
 * Ejemplo si recorre 100 km en 4 horas, ha ido a una velocidad de 100/4 que son 25km/h. Estaría descalificado.
 * 
 * Ejemplo si recorre 100 km en 2 horas, ha ido a una velocidad de 100/2 que son 50km/h. Estaría apto.
 */

let kilometros = Number(prompt("Introduce los km recorridos:")) // km
let horas = Number(prompt("Introduce el tiempo en horas:"))    // h
// velocidad => km / h 
if (horas > 0){
    let velocidad = kilometros / horas
    if ( velocidad >= 40 && velocidad <= 60 ){
        alert("El conductor ha pasado el tramo correctamente.")
    }
    else {
        alert("El conductor está descalificado!")
    }
} else {
    alert("El tiempo en horas no puede ser cero o negativo")
}

// En este programa no hemos validado que los datos que recibimos sean número