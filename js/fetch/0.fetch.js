// fetch -> https://www.geeksforgeeks.org/javascript-fetch-method/
// Creamos una variable para guardar la respuesta de este endpoint
let response = fetch("https://jsonplaceholder.typicode.com/todos/1")
// Este response es un Promise (objeto)
response.then(response => response.json())
        .then(json => { console.log(json)})
                // función -> myFunction() == llamada (call)
                //                            invocación (invoke)
                //                            callback
                // Ejecutas la función

