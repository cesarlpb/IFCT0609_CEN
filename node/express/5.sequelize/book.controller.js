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
   // Descomentar si queremos insertar datos de prueba
   /*Book.create({
      title: "Clean Code 5",
      author: "Robert Cecil Martin",
      description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.",
      release_date: "2021-12-14",
      subject: 3
    }).then(res => {
        console.log(res) // resultado dek query
    }).catch((error) => {
        console.error('No se ha podido crear el nuevo libro: ', error);
    });*/

    // SELECT * FROM Books
    /*Book.findAll().then(res => {
      let books = res && res.map(book => book?.dataValues) ?? []
      console.log(books)
    }).catch((error) => {
      console.error('Failed to retrieve data : ', error);
    });
    */

    // SELECT * FROM Books WHERE id = 1
    /*Book.findOne({
      where: {
          id : "1"
      }
    }).then(res => {
        console.log(res?.dataValues ?? {})
    }).catch((error) => {
        console.error('No se ha podido encontrar el id : ', error);
    });*/

    // DELETE FROM Books WHERE id = 5
    Book.destroy({
      where: {
        id: 5
      }
    }).then(() => {
        console.log("El book se ha borrado correctamente" )
    }).catch((error) => {
        console.error('No se ha podido borrar el book : ', error);
    });

}).catch((error) => {
   console.error('No se ha podido crear la tabla: ', error);
});