const Sequelize = require("sequelize");
require('dotenv').config() // <-- Hay que crear un archivo .env con los datos

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
   {
     host: 'localhost',
     dialect: 'mysql',
     dialectOptions: {
       useUTC: false, // Lectura, no usamos UTC sino UTC +2:00
     },
     timezone: '+2:00', // Escritura, usamos UTC +2:00
   },
 );

sequelize.authenticate().then(() => {
   console.log('La conexión se ha establecido correctamente.');
}).catch((error) => {
   console.error('No se ha podido conectar a la base de datos: ', error);
});