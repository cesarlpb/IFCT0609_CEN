/**
 * 
 * Diseña una función que calcule el factorial de un número, usa una función recursiva (que se llama a si misma). Recuerda que el factorial de un número es el resultado de multiplicar cada número por el anterior hasta llegar a 1. Y el factorial de 0 es por definición 1
 * 
 * Si escribo factorial(3) obtendré 3*2*1 = 6
 * 
 * factorial(0) = 1
 * factorial(1) = 1
 * factorial(2) = 2
 * factorial(3) = 6
 * factorial(4) = 24
 * factorial(5) = 120
 * 
 */

// Método 1: usando un bucle for
// También se podría hacer con while o do while

function factorialConFor(num){
    let resultado = 1
        if( num < 0 || isNaN(Number(num)) || !isFinite(num) ){
            return 0
        }
        else {
        for(let i = num; i >0; i--){
            resultado *= i
        }    
        }
        return resultado
    }

// Método 2: usando recursividad

function factorial(num){
    if(num == 1 || num == 0){
        return 1
    }
    // Estas condiciones son para
        // - números negativos
        // - strings (nos lo podemos ahorrar porque isFinite devuelve false para NaN, string y Infinity)
        // - 1/0 o Infinity 
    if ( num < 0 || isNaN(Number(num)) || !isFinite(num)){ 
        return 0 
    }
    return num * factorial(num-1)
}