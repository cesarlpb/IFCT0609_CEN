# Ejercicios - parte 2 (Entrarán 3 de los 5 seleccionados de esta lista)

## Variables

1. Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.
Tienes que escribir un programa que intercambie el valor de dos variables. Al final la primera variable debe tener el valor de la segunda y la segunda el valor de la primera.

**En particular, me interesa una variante donde se intercambien datos entre más de dos variables.**

## Condicionales

2. Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio de cada uno.

3. Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
Si la compra supera los 500 euros le descuenta un 15%

## Bucle for

4. Se puede hacer con una función. Sumar los números del 1 al 100. Sumar con condiciones, solo los pares, solos los impares. El bucle debe poder sumar a cualquier n que se le indique.

5. Se trata de dibujar un triángulo con asteriscos. El usuario teclea un valor entero, el programa escribirá con asteriscos tantas líneas como diga ese número. Cada línea estará formada por una serie de asteriscos tan larga como diga el número de línea en el que está.

Para separar una línea de la siguiente en console o en alerta debes usar `"\n"`. En este ejercicio usa console.log.

Le tecleamos el valor `5`. El resultado será:

```
  *
  **
  ***
  ****
  *****
```

## While - Do while

6. Programa que escriba la hora hasta que el usuario presione una tecla para parar el proceso. Se podría plantear un evento del DOM.

7. Un script pedirá al usuario que vaya tecleando números hasta llegar al 0, entonces el programa muestra "La suma es " seguido de la suma de los números. Si esta suma es número par el programa se repite y si es impar el programa acaba.

## Funciones

8. Calcular el factorial de un número. Ya sea por recursividad o por bucle.

9. Usa el algoritmo de Euclides para diseñar una función que determine el máximo común divisor de dos números. Bueno este algoritmo es bien simple. Para clacular el mcd de A y B:

  Si A = 0 entonces MCD(A,B)=B, ya que el MCD(0,B)=B, y podemos detenernos.  
  Si B = 0 entonces MCD(A,B)=A, ya que el MCD(A,0)=A, y podemos detenernos.  
  Calcula el resto de A/B
  Asigna a A el valor de B
  Asigna a B el resto
  Repite hasta que A o B sean 0.

10. Calcular el mcm, mínimo común múltiplo.

## Arrays

11. Fn para ordenar un array alfabéticamente o en orden numérico. Ascendente y descendente. Debe recibir un array y un `param` (`'ASC'`, `'DESC'`) para el sentido de ordenación.

## Clases y objetos

12. Hacer una clase `Cuenta` con métodos para `ingresar`, `retirar` `dinero`, `verSaldo`, `imprimir` comprobante.

## DOM / Eventos

13. Vídeo en reproducción. Pausar con un clic en <body>

## Array, String, Date

14. Fn para calcular la diferencia en días, semanas, meses, años entre dos fechas. Recibe dos fechas o string de fecha (ambas opciones) y devuelve las diferencias en objeto.

```javascript
  let fecha1 = new Date(2023, 04, 18)
  let fecha2 = new Date(2023, 04, 17)
  calcularDiferencia(fecha1, fecha2){
    // código
  }
  // output
  {
    dias: 1,
    semanas: 0,
    meses: 0,
    años: 0
  }
```

