/**
 * En este caso, también usando el operador ternario o if reducido, un visitante a la página deberá teclear su edad, si es igual o mayor de 18 recibirá el mensaje de "Entra" en caso contario deberá decirle los años que tiene que estperar para entrar
 * 
 * Si le digo que tengo 19 años me dirá "Puedes entrar", si le digo que tengo 14 años me dirá "Espera 4 años"
 */

// Método 1

let edad = Number(prompt("Introduce tu edad:"))

if(!isNaN(edad)){
    if( edad>=18 ){
        alert("Puedes entrar")
    } else {
        alert(`Dentro de ${18-edad} año(s) podrás entrar`)
    }
} else {
    alert("El dato no es correcto")
}

// Método 2

!isNaN(edad) 
    ? edad >= 18 
        ? alert("Entra") 
        : alert(`Podrás entrar dentro de ${18-edad} año(s)`) 
    : alert("El dato no es correcto")

// Nota: se puede personalizar el uso del plural o singular "años" o "año" con un ternario en el texto