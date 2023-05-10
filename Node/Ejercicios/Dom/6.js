/*
En este script debes leer todos los elementos tipo imagen de la página y mostrar sus urls en un bloque tipo div cuyo id es fuentes y que ya existe en la página modelo usada para estos ejercicios. El script se ejecutará al pulsar el botón con el texto fuentes
*/
function fuentesImg(){
    // Ej 6 
    let imgs = document.getElementsByTagName("img");
    let fuentes = []
    for(let i = 0; i < imgs.length; i++){
        let img = imgs[i]; // tomamos una img en cada iteración
        let src = img.getAttribute("src"); // enlace a la img
        fuentes.push(src); // añadimos el enlace al arr
    }
    let fuentesDiv = document.getElementById("fuentes");
    fuentesDiv.innerText = fuentes.join("\n") // join() nos junta los elementos de un arr concatenando y coloca el caracter que le pasamos como param como separador entre elementos

    // Todo: hacer un appendChild con un <ul> y un <li> para cada uno de los elementos del arr. Nota: aqui ya no usaríamos innerText sino innerHTML
}    