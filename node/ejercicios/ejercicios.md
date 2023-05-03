## Ejercicios
Ejercicios de Javascript

**Fuente:** [Enunciados de Ejercicios con soluciones](https://javascript.espaciolatino.com/evaluar/)

- [Ejercicios de Variables](https://javascript.espaciolatino.com/evaluar/ejercicios_basicos_1.htm)
- [Ejercicios de Condicionales 1 - bucle if, else, else if](https://javascript.espaciolatino.com/evaluar/condicionales_1.htm)
- [Ejercicios de Condicionales 2 - ternario y switch](https://javascript.espaciolatino.com/evaluar/condicionales_2.htm)
- [Ejercicios de bucle For](https://javascript.espaciolatino.com/evaluar/bucles_for.htm)

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