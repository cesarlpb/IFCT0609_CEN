// Leemos lista del archivo users.json
// Devolvemos un user en el endpoint a partir del id que nos pasan por la URL
// Ejemplo:
// localhost:8080/users/id -> id = 1, 2, 3...

const http = require('http');
const fs = require('fs');
const url = require('url'); // Permite leer datos de URL en el endpoint

const port = 8080;
const filename = "./users.json"

console.log("App disponible en: http://localhost:" + port + "/users/1");

http.createServer(function (req, res) {
  
    const urlActual = url.parse(req.url, true) // true es para que podamos usar el string codificado correctamente
    const userId = parseInt(urlActual.pathname.split("/")[2]) // tomamos el tercer elemento de este array

    // Comprobamos que el userId es un número (entero)
    if( !isNaN(userId) ){
        fs.readFile(filename, (err, users) => {
            if (err){
                console.log("El archivo no se ha encontrado");
                console.error(err);
                res.writeHead(500); // Error interno del servidor == algo fue mal
                res.end("500. Error interno del servidor.")
            }
            else {
                res.writeHead(200, {'Content-Type': 'application/json'});
                users = JSON.parse(users) // de bytes a JSON
                const user = users.find(u => u.id === userId) // filtrado por id en la lista (array) -> Ej: rehacer con un bucle for
                res.end(JSON.stringify(user));
                console.log("Solicitud de con id " + userId + " correcta") // informativo
            }
          });
    } else {
        res.writeHead(400) // Error en la petición del client
        res.end("400. Solicitud incorrecta o recurso no encontrado")
    }

}).listen(port);