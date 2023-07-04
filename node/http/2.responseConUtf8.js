const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  console.log("Consola del terminal")
  console.log("URL del request:", req.url) // urls que piden los usuarios y el favicon.ico
  // Añadimos en el Head el charset = utf-8 <--- el mismo que usamos en HTML cuando colocamos etiqueta <meta charset='utf-8'>
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write(`
    <html>
        <head>
            <title>Respuesta con UTF-8</title>
        </head>
        <body>
            <p>¡Hola mundo!</p>
            <p>Ahora puedo usar ñ y à Á etc...</p>
            <script>
                console.log("Hola en consola del cliente")
            </script>
        </body>
    </html>
    `);
  res.end();
});

server.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
});
