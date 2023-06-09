/*

Determinar si el número que teclea el usuario es primo o no. Recordar que un número primo es el que solo puede dividirse por si mismo y por la unidad.


Si el usuario teclea el 3: dirá que 3 es primo. Si teclea el 4 dirá que 4 no es primo.

*/

let num = parseInt(prompt("Introduce un número:"))

// Nos saltamos el 1 y el num porque num / 1 y num / num siempre tienen resto 0
// Miramos entre 2 y la mitad de num (un poco mejor) o entre 2 y num - 1


if(num > 4){
    // En caso de primo, llega a num
    // En caso de no primo, es contador < num
    let contador = 2
    do {
        contador++
    } while ( num % contador !== 0 )
    console.log(contador)
    // contador < num - 1 -> contador = 2 y num = 4  -> 4 % 2 = 0 --> contador != 4
    if( contador == num ){
        alert("Es primo")
    } else {
        alert("No es primo")
    }

} else if ( num == 4 ){
    alert("No es primo")
}
else if( num < 4 && num > 0 ){
    // 1, 2, 3 cuentan como primos
    alert("Es primo")
}

// Tests
/*
1, 2, 3, 4
5, 7
10, 12
37
81
*/