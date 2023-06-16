const http = require('http');
const url = require('url');
const mysql = require('mysql');
const colours = require('./colours.js')

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "objetos" // <--- Colocad la base de datos que usáis
});

const myQuery = (endpoint) => `SELECT * FROM ${endpoint}`

const endpoints = ["albumes", "artistas", "posts", "tracks", "usuarios"]
const formats = ["json", "html", "text"]

// Hay que recibir un parámetro de URL para saber qué formato de respuesta quiere el cliente que solicita los datos

// Conecta a la base de datos
con.connect(function(err) {
  if (err) throw err;
  http.createServer(function (req, res) {
    let params = url.parse(req.url, true)
    let endpoint = req.url.replaceAll("/", "").split("?")[0]
    let esEndpointValido = endpoints.includes(endpoint) // true si es endpoint de endpoints
    let format = params.query.format?.toLowerCase()
    let contentType = "application/json" // por defecto, devolvemos JSON

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if(esEndpointValido){
      con.query(myQuery(endpoint), function (err, result) {
        if (err) throw err;
        console.log(colours.fg.green, `200. URL: ${"/" + endpoint}`)
        
        // Para permitir que me soliciten JSON, HTML, TXT hay que cambiar el content-type con una variable:
        if(formats.includes(format)){
          switch(format){
            case "json":
              contentType = "application/json"
              break;
            case "html":
              contentType = "text/html"
              break;
            case "text":
              contentType = "text/plain"
          }
        }
        
        res.writeHead(200, { 'Content-Type': `${contentType}; charset = UTF-8` })
        
        if(!format || format != "html"){
          // Devolver JSON -> idéntico para TXT
          res.write(JSON.stringify(result, null, 2))
        }else if(format == "html"){
          // Devolver HTML
          res.write(generarTablaHTML(result, endpoint))
        }
        res.end()
      });
    }else if(req.url == "/"){
      console.log(colours.fg.green, `200. URL: ${"/" + endpoint} lista de endpoints`)
      res.writeHead(200, { 'Content-Type': 'text/html; charset = UTF-8' })
      let html = generarEnlacesHTML()
      res.write(html)
      res.end() 
    }else{
      console.error(colours.fg.red, `Error 400. URL: ${"/" + endpoint} no encontrada.`)
      res.writeHead(400, { 'Content-Type': 'text/html; charset = UTF-8' })
      res.write("<h1>Error 400: Bad Request</h1>")
      res.end()
    }
  }).listen(8080, () => { console.log("Servidor en ejecución en http://localhost:8080") })
});

/** Función para generar los enlaces a los endpoints existentes. Leer el array endpoints para crear estas rutas
 * @returns {string} HTML con los enlaces a los endpoints
 */
function generarEnlacesHTML() {
  let baseUrl = "http://localhost:8080"
  let html = ""
  html += "<h1>Endpoints</h1>"
  for(let i = 0; i<endpoints.length; i++){
    let enlace = baseUrl + "/" + endpoints[i] 
    html += `<a href=${enlace} target="_blank">${endpoints[i]}</a><br>`
  }
  // TODO: añadir enlaces a los endpoints por cada formato
  // [ ] HTML
  // [ ] TXT
  // [ ] JSON
  return html
}
/** Función para generar el head de la página HTML
 * @param {String} endpoint nombre del endpoint en la URL -> coincide con el nombre de la tabla en la base de datos en nuestro caso
 * @returns {String} HTML con la cabecera de la página
 */
function generarHeadHTML(endpoint){
  return `
  <!DOCTYPE html>
  <head>
    <meta charset="UTF-8">
    <title>${endpoint}</title>
    <!-- Bootstrap CSS desde CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  </head>
  `
}
/** Función para generar la tabla HTML con los datos de la base de datos usando bucles
 * @param {Array.<Object>} datos array con los datos de la tabla
 * @param {String} endpoint nombre de la tabla en nuestro caso
 * @returns {String} HTML con la tabla de datos
 */
function generarTablaHTML(datos, endpoint){
  let titulos = Object.keys(datos[0]) // los nombres de columnas de la tabla -> al suponer que todos los objetos tienen los mismo campos podríamos usar una clase que los defina en cada caso
  let html = generarHeadHTML(endpoint)
  html += "<body>"
  html += "<div class='container'>"
  html += "<table class='table table-striped'>"  
  html += "<h2>" + endpoint + "</h2>"
  html += "<tr>"
  // bucle para añadir etiquetas de th / encabezados de tabla
  for (let indice in titulos) {
    html += "<th>" + titulos[indice] + "</th>"
  }
  html += "</tr>"

  // bucle para añadir filas de datos
  // devolvemos html de tabla
  datos.forEach((objeto) => {
    html += "<tr>"
      for (let key in objeto){
        html += "<td>" + objeto[key] + "</td>"
      }
    html += "</tr>"
  })
  html += "</table>"
  html += "</div>"
  html += "</body>"
  html += "</html>"
  
  return html
}