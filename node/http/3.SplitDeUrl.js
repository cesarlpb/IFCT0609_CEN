const http = require('http');
const url = require('url');
const port = 8080;

const server = http.createServer((req, res) => {
  
  let params = url.parse(req.url, true).query; // parámetros de URL
  console.log("params:", JSON.stringify(params)) // objeto que contiene los datos de la URL

  let año = params.year  // year en URL y año en el programa
  let mes = params.month 
  let dia = params.day;

  console.log("URL del request:", req.url) // urls que piden los usuarios y el favicon.ico
  
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write(`
    <html>
        <head>
            <title>Params de URL</title>
        </head>
        <body>
          <h2>Params de URL</h2>
            <ul>
              <li>Año: ${año}</li>
              <li>Mes: ${mes}</li>
              <li>Día: ${dia}</li>
            </ul>

            <p>Fecha: ${dia}, de ${mes} del ${año}</p>
        </body>
    </html>
    `);
  res.end();
});

server.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
  console.log(`Prueba con: http://localhost:8080/?year=2023&month=abril&day=martes%2018`)
  console.log(`http://localhost:8080/?year=2023&month=abril&day=martes%2018&algo=dadadad`) // el param 'algo' se ignora en el programa
});
