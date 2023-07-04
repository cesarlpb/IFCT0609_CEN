//3. Vamos a calcular la raíz cuadrada de un número. Verificamos que no nos pasen un número negativo o algo que no sea un número.

function raizCuadrada(){
    let numero = document.getElementById("ej3").valueAsNumber
    if ( numero < 0 ){
        resultado = "Debes introducir un número positivo."
    } else {
        resultado = Math.sqrt(numero)
    }
    let elemento = document.getElementById("resultado7")
    elemento.innerText = resultado
}