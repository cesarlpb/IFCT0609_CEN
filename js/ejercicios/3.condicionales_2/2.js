/**
 * 
 * El usuario debe entrar un número y su cuadrado. Si es correcto el script enviará un mensaje ede acierto en caso contrario dirá que se produjo un error.

 * Se trata de usar el if resumido (cond?true:false)

 * Por ejemplo si teclea 3 y 9 el resutlado es Correcto. Si tecleo 3 8, el resultado será Error
 */

// Método 1

let numero = Number(prompt("Introduce primer número:"))
let cuadrado = Number(prompt("Introduce el cuadrado:"))

if(isNaN(numero) || isNaN(cuadrado)){
    alert("Alguno de los números no es correcto")
}else{
    if(cuadrado == numero * numero){
        alert("Es correcto")
    }else{
        alert(`No es correcto. El cuadrado de ${numero} es ${numero**2}`)
    }
}

// Método 2: ternario

isNaN(numero) || isNaN(cuadrado) 
    ? alert("Alguno de los números no es correcto") 
    : cuadrado == numero * numero 
        ? alert("Es correcto") 
        : alert(`No es correcto. El cuadrado de ${numero} es ${numero**2}`)