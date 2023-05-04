/*
En este script deberás crear un array para guardar los nombres de los días de la semana, empezando por 0 para el domingo. Para comprobar el funcionamiento pide al usuario un número entre 0 y 6 y devuelve el nombre del día. Se supone que el dato tecleado estará entre 0 y 6

Si tecleo el número 4 me deberá decir que el día de la semana es jueves

0 -> domingo
1 -> lunes
etc

*/

let arr = [
    "Domingo", "Lunes", "Martes", 
    "Miércoles", "Jueves", "Viernes", "Sábado"
]

let indice = parseInt(prompt("Introduce un número del 0 al 6:"))
if( indice >=0 && indice < arr.length ){
    alert(arr[indice])
}else{
    alert("El índice no es correcto")
}