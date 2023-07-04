## Ejercicios
Ejercicios de Javascript

**Fuente:** [Enunciados de Ejercicios con soluciones](https://javascript.espaciolatino.com/evaluar/)

1. [Ejercicios de Variables](https://javascript.espaciolatino.com/evaluar/ejercicios_basicos_1.htm)
2. [Ejercicios de Condicionales 1 - bucle if, else, else if](https://javascript.espaciolatino.com/evaluar/condicionales_1.htm)
3. [Ejercicios de Condicionales 2 - ternario y switch](https://javascript.espaciolatino.com/evaluar/condicionales_2.htm)
4. [Ejercicios de bucle For](https://javascript.espaciolatino.com/evaluar/bucles_for.htm)
5. [Ejercicios de bucle While](https://javascript.espaciolatino.com/evaluar/bucles_while.htm)
6. [Ejercicios de bucle Do While](https://javascript.espaciolatino.com/evaluar/bucles_do_while.htm)
7. [Ejercicios de Funciones](https://javascript.espaciolatino.com/evaluar/funciones_inicio.html)
8. [Ejercicios de Arrays](https://javascript.espaciolatino.com/evaluar/arrays_inicio.html)
9. [Ejercicios de Objetos](https://javascript.espaciolatino.com/evaluar/clases-objetos.html)
10. [Ejercicios de DOM](https://javascript.espaciolatino.com/evaluar/dom_basico.html)
11. [Ejercicios de Eventos](https://javascript.espaciolatino.com/evaluar/ejercicios-eventos.html)
12. [Ejercicios de Array](https://javascript.espaciolatino.com/evaluar/arrays_objetos.html)
13. [Ejercicios de String](https://javascript.espaciolatino.com/evaluar/strings-basico.html)
14. [Ejercicios de Date](https://javascript.espaciolatino.com/evaluar/fechas_date.html)

## Ejemplos de Funciones

```js
function recortarDecimales(float, decimales){
    // verificar que decimales es numero y float es numero
    let floatStr = float.toFixed(decimales) // string
    return Number(floatStr)
}
function numFormatoMoneda(num){
    // decimales = 2
    // verificar que no sea NaN
    if(!isNaN(num)){
        return num.toFixed(2)
    }else{
        return "0.00"
    }
}
```