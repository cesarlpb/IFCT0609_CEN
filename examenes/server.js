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
        * GET /posts   - devuelve una lista de posts *
      */
    }else if(req.method === 'GET' && req.url === '/posts') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(posts)); // JSON sin formato
      // res.end(JSON.stringify(posts, null, 2)); // JSON con formato de 2 espacios
    /* 
      * POST /posts  - crea un nuevo post *
    */
    }else if(req.method === 'POST' && req.url === '/posts') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        const newPost = JSON.parse(body);
        newPost.id = posts.length + 1; // Añadimos el id en base a los posts existentes en arr posts
        posts.push(newPost);
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(newPost));
      });
    }else{
      res.writeHead(400, {'Content-Type': 'text/html'});
      res.end('<h2>400 No encontrado o método no implementado.</h2>');
    }
  });
}).listen(3000, () => {console.log("Servidor en ejecución en http://localhost:3000")});