// Declaraciones de variables globales
let num1 = Number (prompt("Introduce el primer numero:"))
let num2 = Number (prompt("Introduce el segundo numero:"))
let mensaje = ""


// El caso del igual podria ignorarse
if(num1 > num2) {
    mensaje = "num1 es mayor que num2";
} else if(num2 > num1) {
    mensaje = "num2 es mayor que num1";
} else {
    mensaje = "num1 y num2 son iguales";
}

console.log(mensaje);

// Método 2: Ternario

// Usando las mismas variables

isNaN(numero1) || isNaN(numero2) ? mensaje = "los numeros son incorrectos" : null
numero1 > numero2 ? mensaje = `${numero1} es mayor que ${numero2}` : null
numero2 > numero1 ? mensaje = `${numero2} es mayor que ${numero1}` : null
numero1 == numero2 ? mensaje = "los numeros son iguales " : null

console.log(mensaje)
