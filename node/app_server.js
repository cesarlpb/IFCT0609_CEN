const http = require("http");
const PORT = 3001
http.createServer(function(req, res){
  res.end("Hola desde node desde el puerto " + PORT)
}).listen(PORT, () => console.log("Servidor en localhost:" + PORT));
