const http = require('http');

const posts = []

http.createServer((req, res) => {
  // TODO:
  // GET /posts o /api/posts - devuelve una lista de posts
  // POST /posts o /api/posts - crea un nuevo post
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola Mundo');
}).listen(3000, () => {console.log("Servidor en ejecución en http://localhost:3000")});