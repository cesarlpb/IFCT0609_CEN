# Modelo Examen 1 - HTML, CSS, JS

1. ¿Cómo podemos hacer un reloj que se actualice solo en la página web? No hace falta el código aunque se admite, pero sí un razonamiento.

- Primero, haría un elemento en HTML: `<p id="reloj"></p>`
- Segundo, usaría Javascript para crear una tarea que se repite cada segundo y actualiza el valor del campo anterior.
- Tercero, colocaría el código en un `reloj.html` y probaría el resultado.

```js
    setInterval(function(){
        let date = new Date() 
        let horaActual = date.toLocaleTimeString() // hh:mm:ss
        document.getElementById("reloj").innerText = horaActual
    }, 1000); 
```
2. Imaginemos que quiero hacer una calculadora. Necesito recibir datos del usuario usando prompt() pero existe el problema de que los inputs están en un formato incorrecto para realizar operaciones algebraicas. ¿Cómo puedo evitar este problema? No hace falta el código aunque se admite, pero sí un razonamiento.

Primero, crearía un `calculadora.html` donde pido datos al usuario con Javascript.
```js
<script>
    let primerNumero = prompt("Introduce el primer número")
    let segundoNumero = prompt("Introduce el segundo número")
    console.log(primerNumero, segundoNumero)
</script>
```
Segundo, como veo que prompt() me devuelve `String` hago una conversión a `Number` **antes** de realizar las operaciones algebraicas.
```
    primerNumero = Number(primerNumero)
```
Tercero, realizo las operaciones y presento el resultado.
```js
    console.log(primerNumero + segundoNumero) // debe devolver Number
```

3. ¿Cómo puedo colocar un vídeo en reproducción automática en el fondo de mi página web? No hace falta el código aunque se admite, pero sí un razonamiento.

Primero, crearía un archivo HTML `video.html` donde coloco algunos elementos:
```html
    <h1>Portafolio</h1>
    <p>Texto asombroso sobre un dev asombroso.</p>
```
Segundo, añadiría una etiqueta `<video>` para colocar estilos con CSS:
```html
    <video id="video" poster="ruta/a/la/imagen.jpg" playsinline autoplay muted loop>
        <source src="ruta/al/video.mp4" type="video/mp4">
        El reproductor no se pudo mostrar.
    </video>
```    
Tercero, hay que usar CSS para colocar el vídeo por detrás del resto del contenido y que se reproduza automáticamente con `autoplay`.
```css
#video {
    position: fixed;
    right: 0; 
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    z-index: -1; /* importante */
}
```