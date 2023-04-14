// Bucle for

// Contar los 10 primero enteros -> del 0 al 9
for(let i = 0; i < 10; i++){
    console.log(i)
}

// Variantes

// Contar del 1 al 10
for(let i = 1; i < 11; i++){
    console.log(i)
}

// Contar del 10 al 20
for(let i = 10; i <= 20; i++){
    console.log(i)
}

// Contar del 10 al 0
for(let i = 10; i > -1; i--){
    console.log(i)
}

// Contar del 10 al 0 v2
for(let i = 10; i >= 0; i--){
    console.log(i)
}

// Contar números pares del 0 al 10
for(let i = 0; i < 11; i=i+2){
    console.log(i)
}

// Contar números impares del 0 al 10
for(let i = 1; i < 11; i=i+2){
    console.log(i)
}

// Contar decenas del 0 al 100
for(let i = 0; i < 101; i=i+10){
    console.log(i)
}

// Sumar los enteros del 1 al 100
let suma = 0
for (let i = 0; i < 101; i++){
    suma = suma + i
}
console.log("suma:", suma)

// Calcular los cuadrados de los números del 1 al 10
for (let i = 0; i<11; i++){
    console.log(i*i)
}

// Calcular los cubo de los números del 1 al 10
for (let i = 0; i<11; i++){
    console.log(i*i*i)
}

// HTML
let elemento = document.getElementById("mydiv")
let html = ""
for (let i = 0; i<10; i++){
    html += "<p>Iteración: " + i + "</p>\n"
}
console.log(html)
elemento.innerHTML = html

//Ejercicio: Hacer 10 párrafos con lorem (10-20 palabras)
