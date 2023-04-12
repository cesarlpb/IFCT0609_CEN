// arrow functions == forma corta de crear fn

// función -> myFunction() == llamada (call)
//                            invocación (invoke)
//                            callback
// Ejecutas la función

// version estándar:
const suma = function sumar(num1, num2){
    return num1 + num2
}

const suma2 = (num1, num2) => num1 + num2

// llamadas:

suma(2, 3)
suma2(2, 3) // las fn arrow se usan igual

const elevarAlCuadrado = num1 => num1**num1
