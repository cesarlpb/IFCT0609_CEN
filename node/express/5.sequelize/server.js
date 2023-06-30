const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'nombre_base_de_datos',
 'usuario_base_de_datos',
 'contraseña_base_de_datos',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
   console.log('La conexión se ha establecido correctamente.');
}).catch((error) => {
   console.error('No se ha podido conectar a la base de datos: ', error);
});