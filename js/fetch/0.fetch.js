// fetch -> https://www.geeksforgeeks.org/javascript-fetch-method/

// GET
// petición para "conseguir" un recurso (objeto con datos -> enlaces, img, JSON con objetos, etc.)

// GET de toda la lista
// probad

function pedirListaTodos(){
    // + añadir document... listaTodos
}
// GET de un recurso
// Creamos una variable para guardar la respuesta de este endpoint
let response = fetch("https://jsonplaceholder.typicode.com/todos/1")
// Este response es un Promise (objeto)
response.then(response => response.json())
        .then(json => { console.log(json)})
                // función -> myFunction() == llamada (call)
                //                            invocación (invoke)
                //                            callback
                // Ejecutas la función

// POST
// Enviar un objeto y recibir una respuesta
// - Crear un recurso nuevo (una entrada en un blog, un post, etc.)
// - Editar un recurso


