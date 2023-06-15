const http = require('http');
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

// Conecta a la base de datos
con.connect(function(err) {
  if (err) throw err;
  http.createServer(function (req, res) {
    let esEndpointValido = endpoints.includes(req.url.replaceAll("/", "")) // true si es endpoint de endpoints
    let url = req.url
    let endpoint = req.url.replaceAll("/", "")
    if(esEndpointValido){
      con.query(myQuery(endpoint), function (err, result) {
        if (err) throw err;
        console.log(colours.fg.green, `200. URL: ${url} endpoint: ${endpoint}`)
        res.writeHead(200, { 'Content-Type': 'text/html; charset = UTF-8' })
        // TODO: hacer bucle para generar tabla con los datos y devolvemos HTML
        // TODO: permitir que me puedan solicitar HTML, JSON o TXT
        
        // Devolver JSON
        // res.write(JSON.stringify(result, null, 2))
        
        // Devolver HTML
        res.write(generarTablaHTML(result, endpoint))
        res.end()
      });
    }else if(req.url == "/"){
      console.log(colours.fg.green, `200. URL: ${url} lista de endpoints`)
      res.writeHead(200, { 'Content-Type': 'text/html; charset = UTF-8' })
      let html = generarEnlacesHTML()
      res.write(html)
      res.end() 
    }else{
      console.error(colours.fg.red, `404. URL: ${url} no encontrada`)
      res.writeHead(404, { 'Content-Type': 'text/html; charset = UTF-8' })
      res.write("<h1>Error 404: No encontrado</h1>")
      res.end()
    }
  }).listen(8080, () => { console.log("Servidor en ejecución en http://localhost:8080") })
});

/**
 * Función para generar los enlaces a los endpoints existentes. Leer el array endpoints para crear estas rutas
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
  return html
}
function generarTablaHTML(datos, endpoint){
  let titulos = Object.keys(datos[0]) // los nombres de columnas de la tabla -> al suponer que todos los objetos tienen los mismo campos podríamos usar una clase que los defina en cada caso
  let html = "<table>"  
  html += "<h2>" + endpoint + "</h2>"
  html += "<tr>"
  // bucle para añadir etiquetas de th / encabezados de tabla
  for (let indice in titulos) {
    html += "<th>" + titulos[indice] + "</th>"
  }
  html += "</tr>"
  // bucle para añadir filas de datos
  // bucle
  html += "</table>"
  // devolvemos html de tabla
  return html
}