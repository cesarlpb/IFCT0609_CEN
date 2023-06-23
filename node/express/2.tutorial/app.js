const express = require('express');
const app = express();
const router = require('./router');

// Es posible anidar todas las rutas de router en este paso:
app.use('/', router);

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));