# Ejercicios - parte 2 (Entrarán 3 de los 5 seleccionados de esta lista)

Si no se especifica el tipo de retorno, se admite:
```javascript
  - console.log(datos)
  - alert(datos)
  - document.getElementById("id").innerHTML = datos // usando HTML para ver los resultados
```

## Variables

1. Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.
Tienes que escribir un programa que intercambie el valor de dos variables. Al final la primera variable debe tener el valor de la segunda y la segunda el valor de la primera.

- [Resuelto en `9.js`](../js/ejercicios/1.variables/9.js)

**Idea: Sin modificar valores de variables originales en ningún momento**

```javascript
  // Estos datos NO pueden cambiar:
  const var1 = prompt("Introduce un valor:")
  const var2 = prompt("Introduce otro valor:")
  let nuevoVar1 = var2, nuevoVar2 = var1 // Estos sí podrían cambiar
  console.log("var1:", nuevoVar2)
  console.log("var2:", nuevoVar1)
```
### TODO?:
**En particular, me interesa una variante donde se intercambien datos entre más de dos variables.**

```javascript

  // 2 variables
  dato_1 = 1
  dato_2 = 2
  // dato_1 = 2 y dato_2 = 1

  // 3 variables
  dato_1 = 1
  dato_2 = 2
  dato_3 = 3
  temp = dato_1

  // etc
```

## Condicionales

2. Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio de cada uno.

- [Resuelto en `9.js`](../js/ejercicios/2.condicionales_1/9.js)

3. Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
Si la compra supera los 500 euros le descuenta un 15%

- [Resuelto en `9.js`](../js/ejercicios/3.condicionales_2/9.js)

## Bucle for

4. Se puede hacer con una función. Sumar los números del 1 al 100. Sumar con condiciones, solo los pares, solos los impares. El bucle debe poder sumar a cualquier n que se le indique.

```javascript
function sumar(n, parImpar = "todos"){
  let suma = 0
  for(let i = 0; i <= n; i++){
    if(parImpar == "par" && i % 2 == 0){
      suma += i
    }else if(parImpar == "impar" && i % 2 != 0){
      suma += i
    }else if(parImpar == "todos"){
      suma += i
    }
  }
  return suma
}
```

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

- [Resuelto en `8.1.js` función trianguloIzq()](../js/ejercicios/4.for/8.1.js)

## While - Do while

6. Programa que escriba la hora hasta que el usuario presione una tecla para parar el proceso. Se podría plantear un evento del DOM.

```javascript
    setInterval(function(){
        let date = new Date() 
        let horaActual = date.toLocaleTimeString() // hh:mm:ss
        // document.getElementById("reloj").innerText = horaActual
        console.log(horaActual)
    }, 1000); 
  // Bucle infinito -> while(key != "x")
    // Mostrar hora -> console.log() // document.getElementById("id").innerHTML = hora...
    // Esperar 1 segundo
  // Fin bucle
```
[Ejemplo similar a este ejercicio](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
**No entra**

7. Un script pedirá al usuario que vaya tecleando números hasta llegar al 0, entonces el programa muestra "La suma es " seguido de la suma de los números. Si esta suma es número par el programa se repite y si es impar el programa acaba.

- [Resuelto en `8.js`](../js/ejercicios/5.while/8.js)

## Funciones

8. Calcular el factorial de un número. Ya sea por recursividad o por bucle.

- [Resuelto en `6.js` de dos formas](../js/ejercicios/7.funciones/6.js)

9. Usa el algoritmo de Euclides para diseñar una función que determine el máximo común divisor de dos números. Bueno este algoritmo es bien simple. Para clacular el mcd de A y B:

  Si A = 0 entonces MCD(A,B)=B, ya que el MCD(0,B)=B, y podemos detenernos.  
  Si B = 0 entonces MCD(A,B)=A, ya que el MCD(A,0)=A, y podemos detenernos.  
  Calcula el resto de A/B
  Asigna a A el valor de B
  Asigna a B el resto
  Repite hasta que A o B sean 0.

- [Resuelto en `5.js`](../js/ejercicios/7.funciones/5.js)

10. Calcular el mcm, mínimo común múltiplo.

```javascript

  // 4 y 5 -> 20 porque 4*5=20 y 5*4=20
  // 4, 8, 12, 16, 20
  // 5, 10, 15, 20

  // 6 y 8 -> 24 porque 6*4=24 y 8*3=24
  // 6, 12, 18, 24...
  // 8, 16, 24...

  // 3 y 7 -> 21 porque 3*7=21 y 7*3=21
  // 1 y 17 -> 17 porque 1*17=17 y 17*1=17
  // etc.
  // Se puede calcular con un bucle
  let num1 = parseInt(prompt("Introduce un número: "))
  let num2 = parseInt(prompt("Introduce otro número:" ))
  let mcm = num1 * num2
  // En arr1 -> multiplos de num1
  // En arr2 -> multiplos de num2
  let arr1 = [], arr2 = []
  // múltiplos de num1
  for(let i=1; i<=num2; i++){
    arr1.push(num1 * i)
  }
  // múltiplos de num2
  for(let i=1; i<=num1; i++){
    arr2.push(num2 * i)
  }
  // Lo ideal sería usar el arr mas corto para buscar coincidencia pero usando cualquier también funciona
  // Buscamos el mcm:
  for(let i=0; i<arr1.length; i++){
    let multiplo = arr1[i]
    if(arr2.includes(multiplo)){
      mcm = multiplo
      break
    }
  }
  console.log(num1, num2, "mcm:", mcm)
  // TODO: mejorar este ejercicio con algún algoritmo o con uso de teoremas matemáticos
  // Referencia: https://prometeo.matem.unam.mx/recursos/Bachillerato/DGEE_DGTIC_IMATE/recursos/1_004/index.html
```

## Arrays

11. Fn para ordenar un array alfabéticamente o en orden numérico. Ascendente y descendente. Debe recibir un array y un `param` (`'ASC'`, `'DESC'`) para el sentido de ordenación.

- [Una forma de resolverlo en `5.js`](../js/ejercicios/12.Array/5.js)

## Clases y objetos

12. Hacer una clase `Cuenta` con métodos para `ingresar`, `retirar` `dinero`, `verSaldo`, `imprimir` comprobante.

- [Resuelto en `4.js`](../js/ejercicios/9.clases-y-objetos/4.js)

## DOM / Eventos

13. Vídeo en reproducción. Pausar con un clic en <button>, <body>, <div>, etc.

```html
  <h1>Video</h1>
  <video id="video" src="video.mp4" autoplay muted loop width="auto" height="500"></video>
  <br>
  <button onclick="pausarVideo()">Pausar vídeo</button> 
```

```javascript
  function pausarVideo() {
    const video = document.getElementById("video");
    video.pause();
    console.log("El vídeo está pausado");
  }
```

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

