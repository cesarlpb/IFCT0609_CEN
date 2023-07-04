// 1. Función para calcular la división de dos número verificando que el divisor no sea cero.

function division(dividendo, divisor){
    if (divisor != 0){
        return dividendo / divisor
    } else {
        return "El divisor es cero. No se puede dividir."
    }
}

//document.getElementById("resultado5").innerText = division(1, 0) // Infinity
//document.getElementById("resultado5").innerText = division(0, 0) // NaN
document.getElementById("resultado5").innerText = division(10, 5) // 2
