var http = require('http');
const port = 8080;

console.log("App disponible en: http://localhost:" + port);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com'
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'janedoe@example.com'
    },
    {
      id: 3,
      name: 'Bob Smith',
      email: 'bobsmith@example.com'
    }
  ];
  res.end(JSON.stringify(users));
}).listen(port);