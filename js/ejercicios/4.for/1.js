/*
Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.  

input => Number -> int
hacemos la cuenta desde 0 hasta el número

Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5  
*/ 

let num = parseInt(prompt("Introduce un número para contar:"))

if(num > 0){
    for(let i = 0; i <= num; i++){
        console.log(i)
    }
} else if (num <0){
    for(let i = 0; i >= num; i--){
        console.log(i)
    }
} else {
    alert("El dato introducido no es correcto")
}
