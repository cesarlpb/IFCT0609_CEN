// fetch -> https://www.geeksforgeeks.org/javascript-fetch-method/

// GET
// Peticion para "conseguir" un recurso (objeto con datos -> enlaces)

// GET de toda la lista

// fetch -> https://www.geeksforgeeks.org/javascript-fetch-method/
// Usamos este API: https://jsonplaceholder.typicode.com/guide/

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
        let todoId = document.getElementById("todoId").value
        if (todoId == "" || todoId == "0"){
            todoId = "1"
        }
        
        let elemento = document.getElementById("todo")
    
        if(todoId > 0 && todoId <= 200){
            // El endpoint cuando pedimos un recurso acaba en /id -> id == número, empieza en 1
            // concatenamos el id al final -> 1, 2, ..., 200
            let response = fetch("https://jsonplaceholder.typicode.com/todos/" + todoId)
            response.then(response => response.json())
                .then(json => elemento.innerText = JSON.stringify(json) )
        } else {
            elemento.innerText = "El id no es válido. Debe estar entre 1 y 200."
        }
    }
    
    // POST
    // Enviar un objeto y recibir una respuesta
    // - Crear un recurso nuevo (una entrada en un blog, un post, etc.)
    // - Editar un recurso
    
    function crearTodo(){
        let titulo = document.getElementById("titulo").value;                   // texto - string
        let idUsuario = document.getElementById("idUsuario").valueAsNumber;     // Number
        let estaCompletado = document.getElementById("estaCompletado").checked; // Boolean
        
        let elemento = document.getElementById("nuevoTodo") // <p> donde escribimos el resultado de la petición
    
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
              title: titulo,            // título - title -> String
              userId: idUsuario,        // userId - número -> Number
              completed: estaCompletado,// completed - si esta completado -> Boolean
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => elemento.innerText = JSON.stringify(json));
    }


    // PUT
    // Editar, accion de "colocar" o "poner" valores nuevos en un recurso existente
function editarTodo(){
        let todoId = document.getElementById("todoId2").value
        let titulo = document.getElementById("titulo2").value
        let estaCompletado = document.getElementById("estaCompletado2").checked // checkbox
        let userId = document.getElementById("userId2").valueAsNumber
      
        let elemento = document.getElementById("editarTodo");
      
        fetch('https://jsonplaceholder.typicode.com/todos/' + todoId, {
          method: 'PUT',
          body: JSON.stringify({
            id: todoId,
            title: titulo,
            completed: estaCompletado,
            userId: userId,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => elemento.innerText = JSON.stringify(json));
      }

      // PATCH
      // reemplaza o parchea el objeto original por una version actualizada con tarea adicional
     /*
- Muy parecido a PUT
- Añadimos bucle if para verificar que datos vamos a editar con patch
- Enviamos solamente lo que vayamos a editar
*/

function editarParcialTodo(){
        let todoId = document.getElementById("todoId3").value
        let titulo = document.getElementById("titulo3").value
        let estaCompletado = document.getElementById("estaCompletado3").checked // checkbox
        let userId = document.getElementById("userId3").valueAsNumber
      
        let elemento = document.getElementById("editarParcialTodo");
      
        let objeto = {}
       
        // Hay que validar que los campos que actualizamos no están en blanco en el formulario
        if (titulo) {
          objeto = { id: todoId, title: titulo }
        } else if (estaCompletado) {
          objeto = { id: todoId, completed: estaCompletado }
        } else if (userId) {
          objeto = { id: todoId, userId: userId }
        }
        // Habría 4 casos más: 3 combinaciones de 2 campos y todos los campos a la vez
      
        fetch('https://jsonplaceholder.typicode.com/todos/' + todoId, {
          method: 'PATCH',
          body: JSON.stringify(objeto),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => elemento.innerText = JSON.stringify(json));
      }
      
      function borrarTodo(){
        let todoId = document.getElementById("todoId4").value
        let elemento = document.getElementById("borrarTodo");
      
        fetch('https://jsonplaceholder.typicode.com/todos/' + todoId, {
          method: 'DELETE',
        })
        .then((response) => response.json())
        .then((json) => {
          if (JSON.stringify(json) == "{}"){
            elemento.innerText = "El todo con id " + todoId + " se ha borrado."
          } else {
            elemento.innerText = JSON.stringify(json)
          }
        });
      }