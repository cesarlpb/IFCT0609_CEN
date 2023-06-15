const http = require('http');

let endpoints = ["albumes", "artistas", "posts", "tracks", "usuarios"]
// Códigos de color para consola:
const red = "\x1b[31m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";

http.createServer(function (req, res) {
  let esEndpointValido = endpoints.includes(req.url.replaceAll("/", "")) // true si es endpoint de endpoints
  let url = req.url
  let endpoint = req.url.replaceAll("/", "")
  if(esEndpointValido){
    console.log(green, `200. URL: ${url} endpoint: ${endpoint}`)
    res.writeHead(200, { 'Content-Type': 'text/html; charset = UTF-8' })
    res.write(`<h1>${endpoint}</h1>`)
    res.end()
  }else if(req.url == "/"){
    console.log(green, `200. URL: ${url} lista de endpoints`)
    res.writeHead(200, { 'Content-Type': 'text/html; charset = UTF-8' })
    let html = generarHTML()
    res.write(html)
    res.end() 
  }else{
    console.error(red, `404. URL: ${url} no encontrada`)
    res.writeHead(404, { 'Content-Type': 'text/html; charset = UTF-8' })
    res.write("<h1>Error 404: No encontrado</h1>")
    res.end()
  }
}).listen(8080, () => { console.log("Servidor en ejecución en http://localhost:8080") })

function generarHTML() {
  let baseUrl = "http://localhost:8080"
  let html = ""
  html += "<h1>Endpoints</h1>"
  for(let i = 0; i<endpoints.length; i++){
    let enlace = baseUrl + "/" + endpoints[i] 
    html += `<a href=${enlace} target="_blank">${endpoints[i]}</a><br>`
  }
  return html
}