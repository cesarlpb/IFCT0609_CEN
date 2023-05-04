/**
 * 
 * Crea un array booleano con dos valores 'verdadero' y 'falso'. 
 * 
 * Este array te sirve para traduicr los valores true y false. 
 * 
 * Usalo para que el script muestre un alert con el nombre vedadero si un usuario teclea un valor entre 0 y 9 y falso en el caso contrario.
 * 
 * Por ejemplo al teclear 10 deberá devolver falso
 * 
 * si tecleamos del 0 al 9 -> true
 * else -> false
 * 
 */

let num = parseInt(prompt("Introduce un número:"))
let arr = ["falso", "verdadero"]
let estaEnRango = num >= 0 && num <= 9 ? true : false
if( estaEnRango ){
    alert(arr[1]) // "verdadero" -> está en el rango
}else{
    alert(arr[0]) // "falso" -> no está en el rango
}

// Alternativa no recomendada (menos claro)
// alert(arr[ Number(num >= 0 && num <= 9 ? true : false )])