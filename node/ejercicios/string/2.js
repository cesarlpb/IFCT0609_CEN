/*
En esta ocasión se trata de crear una función que reciba como argumento una frase con letras y números. La función debe devolver la suma de todos los dígitos contenidos en la frase

Al ejecutar cambiaCars("Estamos a 7 días de navidad y faltan 10 días para fin del año 2022"), deberá devolver el número 14 (7+1 + 0 +2+0+2+2)
*/

function sumarNums(string){
    let suma = 0, arr = [...string]
    arr.map(char => {
        let num = parseInt(char)
        if(!isNaN(num)) {
            suma += num // sumamos solo si el número no es NaN
        }
    })
    return suma
}