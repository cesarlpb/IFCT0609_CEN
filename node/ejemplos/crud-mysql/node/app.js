const http = require('http');

http.createServer(function (req, res) {
  console.log("Consola del servidor")
  // TODO: colocar un switch para manejar las rutas
  if(req.url == "/albumes"){
    res.writeHead(200, { 'Content-Type': 'text/html; charset = UTF-8' })
    res.write("<h1>Albumes</h1>")
    res.end()
  }else{
    res.writeHead(200, { 'Content-Type': 'text/html; charset = UTF-8' })
    let html = generarHTML()
    res.write(html)
    res.end() 
  }
}).listen(8080, () => { console.log("Servidor en ejecución en http://localhost:8080") })

function generarHTML() {
  let arr = ["albumes", "artistas", "posts", "tracks", "usuarios"]
  let baseUrl = "http://localhost:8080"
  let html = ""
  html += "<h1>Endpoints</h1>"
  for(let i = 0; i<arr.length; i++){
    let enlace = baseUrl + "/" + arr[i] 
    html += `<a href=${enlace} target="_blank">${arr[i]}</a><br>`
  }
  return html
}