/*
Escribe una función que determina cual de las dos horas que se le pasa como argumento es menor.

Se supone que ambos tiempos son horas de un mismo día y la solución se debe hacer usando el objeto Date.

Por ejemplo menorHora("12:20:00", "11:10:00") debiera de decir que la segunda hora es menor que la primera. 
*/

/**
 * Determina cuál de las dos horas ocurre primero
 * @param {string} hora1 
 * @param {string} hora2 
 * @returns {string} La hora que es menor
 */
function horaMenor(hora1, hora2){
    let f = new Date();
    let fecha = f.getFullYear() + "/" + (f.getMonth() + 1) + "/" + f.getDate();

    let h1 = new Date(`${fecha} ${hora1}`);
    let h2 = new Date(`${fecha} ${hora2}`);

    if(isNaN(h1.valueOf()) || isNaN(h2.valueOf())){
        throw new Error("Alguna hora no es válida");
    }

    if(h1.getTime() < h2.getTime()){
        return "La primera hora es menor";
    }else if(h1.getTime() > h2.getTime()){
        return "La segunda hora es menor";
    }else{
        return "Las horas son iguales";
    }
}