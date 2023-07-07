const http = require('http');

const posts = [
  {"id": 1, "title": "Post 1 de ejemplo", "content": "Contenido del post 1", tags: "ejemplo, post, api"},
]

http.createServer((req, res) => {
  // TODO:
  // GET /posts   - devuelve una lista de posts
  // POST /posts  - crea un nuevo post
  if(req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h2>Endpoints: GET en "/posts" y POST en "/posts"</h2>');
  }else if(req.method === 'GET' && req.url === '/posts') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(posts, null, 2));
  }
}).listen(3000, () => {console.log("Servidor en ejecución en http://localhost:3000")});