const { Sequelize, DataTypes } = require("sequelize");

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
    timezone: 'Europe/Madrid', // Escritura, usamos UTC +2:00 o Europe/Madrid (no hace falta estar pendientes del cambio de hora)
  },
);

const Book = sequelize.define("Books", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(500),
    defaultValue: "No hay una descripción disponible para este libro.",
  },
  release_date: {
    type: DataTypes.DATEONLY,
  },
  subject: {
    type: DataTypes.INTEGER,
  }
});

sequelize.sync().then(() => {
   console.log("Tabla 'Books' creada correctamente.");
}).catch((error) => {
   console.error('No se ha podido crear la tabla: ', error);
});