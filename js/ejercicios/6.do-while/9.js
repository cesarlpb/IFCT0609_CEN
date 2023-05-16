/**
 * 
 * Escribir un script usando el bucle do while para pedir que el usuario escriba dos números. 
 * Si el primero es mayor que el segundo el programa volverá a pedir que se escriban los números. 
 * Si el primero es menor que el segundo el programa acaba y dice "Numeros en orden creciente"
 * 
 * Verificar que los dos números estén en orden creciente, es decir, de menor a mayor
 * 
 * Si tecleo pimero un 12 y luego un 9, volverá a pedirme que escriba los datos. Si escribo un 12 y luego un 20 me dirá "Numeros ordenados"
 * 
 * 1, 2, 3, ... 
 * 
 */

let num1, num2, estanOrdenados = false;
do {
    num1 = parseInt(prompt("Introduce el primer número:"))
    num2 = parseInt(prompt("Introduce el segundo número:"))
    estanOrdenados = num2 > num1 ? true : false;
} while( !estanOrdenados )

if(estanOrdenados){
    alert("Números ordenados")
}
