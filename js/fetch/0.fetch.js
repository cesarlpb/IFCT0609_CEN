// fetch -> https://www.geeksforgeeks.org/javascript-fetch-method/

// GET
// petición para "conseguir" un recurso (objeto con datos -> enlaces, img, JSON con objetos, etc.)

// GET de toda la lista
// Colocamos el código en una función para llamarla haciendo clic en el botón
function pedirListaTodos(){
    // GET de lista
    // Creamos una variable para guardar la respuesta de este endpoint
    let response = fetch("https://jsonplaceholder.typicode.com/todos")
    let elemento = document.getElementById("listaTodos")
    // Este response es un Promise (objeto)
    response.then(response => response.json())
            //.then(json => console.log(json))  // escribir el JSON por consola
            .then(json => elemento.innerText = JSON.stringify(json))    
}

// GET de un recurso

function pedirUnTodo(){
    // El endpoint cuando pedimos un recurso acaba en /id -> id == número, empieza en 1
    let response = fetch("https://jsonplaceholder.typicode.com/todos/1")
    let elemento = document.getElementById("todo")
    response.then(response => response.json())
        .then(json => elemento.innerText = JSON.stringify(json) )
}

// POST
// Enviar un objeto y recibir una respuesta
// - Crear un recurso nuevo (una entrada en un blog, un post, etc.)
// - Editar un recurso


