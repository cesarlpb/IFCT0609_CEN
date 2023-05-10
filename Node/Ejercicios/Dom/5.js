/*
La página web modelo contiene tres imágenes. Cada imagen está en un bloque figure con un elemento figcaption para un pie de foto. Al pulsar sobre cualquier imagen se debe mostar su atributo alt en su pie de foto. Si el pie ya está relleno se borrará su contenido y no se escribirá nada.
*/
function ponerPie(fig){
    // ponerPie se llama con this -> y conseguimos el elemento <figure> que ha sido clickado
    // Ej 5
    console.log(fig); // <figure> que ha sido clickado
    let pie = fig.getElementsByTagName("figcaption")[0];
    let pieActual = pie.innerText;
    if(!pieActual){
        let img = fig.getElementsByTagName("img")[0];
        let alt = img.getAttribute("alt"); // texto del alt
        pie.innerText = alt;
    }else{
        pie.innerText = "";
    }
}