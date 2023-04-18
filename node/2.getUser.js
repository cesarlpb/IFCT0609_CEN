const http = require('http');
const port = 8080;

console.log("App disponible en: http://localhost:" + port);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  const user =   {
    id: 1, 
    name: 'John Doe', 
    email: 'johndoe@example.com'
};
  res.end(JSON.stringify(user));
}).listen(port);