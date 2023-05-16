/*
Escribe una función recursiva que cuente el número de veces que un carácter dado aparece en una cadena. La función recibe como argumentos la cadena y el carácter buscado.

Por ejemplo contarLetra("Hoy es martes" , 'e') devolverá 2 porque hay dos letras e en la cadena.
*/

// Para resolverlo con recursión hay que plantear casos sucesivos cada vez más pequeños
// En cada llamada, vamos quitando un caracter al string hasta que sea un string vacío ""
// En este caso, el caso más pequeño es cuando la cadena está vacía, en ese caso devolvemos 0
function contarLetra(string, char){
    if(string.length === 0) return 0
    return (string[0] === char ? 1 : 0) + contarLetra(string.slice(1), char)
}
