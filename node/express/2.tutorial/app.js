const express = require('express');
const app = express();

app.get('/', function(req, res){
   res.send("Hola mundo desde express");
});

app.listen(3000);