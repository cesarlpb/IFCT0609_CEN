/**
 * 
 * Usa el algoritmo de Euclides para diseñar una función que determine el máximo común divisor de dos números. Bueno este algoritmo es bien simple. Para clacular el mcd de A y B:

if()...

    Si A = 0 entonces MCD(A,B)=B, ya que el MCD(0,B)=B, y podemos detenernos.  

if else ()...

    Si B = 0 entonces MCD(A,B)=A, ya que el MCD(A,0)=A, y podemos detenernos.  

else

    Calcula el resto de A/B
    Asigna a A el valor de B
    Asigna a B el resto
    Repite hasta que A o B sean 0.

    Si me piden el MCD(10, 5) tendré 5 como solución, y el MCD( 24, 9) será 1, y el MCD(12,20) será 4

    MCD(10, 5)  ->  5 
    MCD( 24, 9) ->  1
    MCD(12,20)  ->  4
    MCD(0,B)    ->  B
    MCD(A,0)    ->  A
    MCD(0,0) undefined
 */

    let num1 = parseInt(prompt("Introduce el primer número:"))
    let num2 = parseInt(prompt("Introduce el segundo número:"))
    
    if( num1 >= 0 && num2 >= 0 && num1 + num2 > 0 ){
        alert(mcd(num1, num2))
    }else{
        alert("Los números deben ser positivos y no pueden ser ambos cero a la vez")
    }
    
    function mcd(num1, num2){
        // MCD(0,B)    ->  B
        if (num1 == 0){
            return num2 // no es cero porque se ha validado en la línea 33 que ambos números no puedan ser cero a la vez
        }
        // MCD(A,0)    ->  A
        if (num2 == 0){
            return num1
        }
    
        /*
        Calcula el resto de A/B
        Asigna a A el valor de B
        Asigna a B el resto
        Repite hasta que A o B sean 0.
        */
       do{
        let resto = num1 % num2
        num1 = num2
        num2 = resto
        console.log(num1, num2, resto) 
       }while( num1 != 0 && num2 != 0 )
       
       return num1 == 0 ? num2 : num1
    }