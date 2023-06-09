/*
Esta funcion debe determinar si el año de una determinada fecha es bisiesto o no. Recuerda un año es bisiesto si es múltiplo de 4, excepto el primer año del siglo (1500, 1600...) que solo lo será es divisible por 400

esBisiesto('1984/1/1') // true
esBisiesto('1985/1/1') // false
esBisiesto('1600/1/1') // true
esBisiesto('1800/1/1') // false
*/

/**
 * Calcula si el año de una fecha es bisiesto
 * @param {string} año yyyy
 * @returns true o false
 */
function esBisisesto(año_){
    let f = new Date(`${año_}/1/1`);
    if(isNaN(f.valueOf())){
        throw new Error("El año no es válido");
    }
    let año = f.getFullYear();
    if(año % 100 == 0){
        return año % 400 == 0;
    }else{
        return año % 4 == 0;
    }
  }
  
  document.write("1984 es bisiesto? " + esBisisesto('1984') + "<br/>"); // true
  document.write("1985 es bisiesto? " + esBisisesto('1985') + "<br/>"); // false
  document.write("1600 es bisiesto? " + esBisisesto('1600') + "<br/>"); // true
  document.write("1800 es bisiesto? " + esBisisesto('1800') + "<br/>"); // false
  