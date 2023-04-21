const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>Ejemplo de servidor Node.js</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>Bienvenido al servidor Node.js</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
}).listen(5000);
console.log ("http://localhost:5000")



