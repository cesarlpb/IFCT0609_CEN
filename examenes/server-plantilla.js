/*
* Podéis usar este archivo como plantilla para el ejercicio 3 de la API REST
* Podéis cambiar el resto del código o colocar la solución entre las líneas indicadas
* Importante: aseguraos de que la solución ejecuta correctamente con "node server.js"
*/
const http = require('http');
const cors = require('cors');

const posts = [
  {"id": 1, "title": "Post 1 de ejemplo", "content": "Contenido del post 1", tags: "ejemplo, post, api"},
]

http.createServer((req, res) => {
  cors()(req, res, () => {
    if(req.method === 'GET' && req.url === '/') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h2>Endpoints: GET en "/posts" y POST en "/posts"</h2>');
      /* 
        * GET /posts   - devuelve una lista de posts * (opcional)
      */
    }else if(req.method === 'GET' && req.url === '/posts') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(posts)); // JSON sin formato
      // res.end(JSON.stringify(posts, null, 2)); // JSON con formato de 2 espacios
    /* 
      * POST /posts  - crea un nuevo post *
      * --- Escribir la solución a partir de aquí: ---
    */
    }else if(posts) {
      res.end("Solución aquí")
    }
    //  ------- Escribir la solución hasta aquí --------
    else{
      res.writeHead(400, {'Content-Type': 'text/html'});
      res.end('<h2>400 No encontrado o método no implementado.</h2>');
    }
  });
}).listen(3000, () => {console.log("Servidor en ejecución en http://localhost:3000")});