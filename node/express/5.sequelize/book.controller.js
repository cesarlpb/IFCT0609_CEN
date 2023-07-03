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

// Añadimos async para poder usar await cuando ejecutemos la función
async function getBooks() {
  return Book.findAll().then(res => {
    // res podría ser null, en ese caso res.map no existe y arroja error
    // por eso usamos res && res.map(...)
    let books = (res && res.map(book => book?.dataValues)) ?? [];
    return books
  }).catch((error) => {
    console.error('No se pudo obtener la lista de Books : ', error);
  });
}

async function getBookById(id) {
  return Book.findOne({
    where: {
        id : id
    }
  }).then(res => {
      return res?.dataValues ?? {}
  }).catch((error) => {
      console.error(`No se ha podido encontrar el Book con id : ${id}`, error);
  });
}

sequelize.sync().then(() => {
   console.log("Tabla 'Books' creada correctamente.");
   // Descomentar si queremos insertar datos de prueba

   // Ejecutamos la función getBooks() para obtener la lista de books
  //  getBooks().then(books => {
  //   console.log(books)
  // }).catch((error) => {
  //   console.error(error);
  // });

  // Ejecutamos la función getBookById() para obtener un book por id
  getBookById(2).then(book => {
    console.log(book)
  }).catch((error) => {
    console.error(error);
  });


    // TODO: GET - pasar a función getBook(id) o getBookById(id)
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

   // TODO: POST - pasar a función createBook()
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

    // TODO: DELETE - pasar a función deleteBook(id)
    // DELETE FROM Books WHERE id = 5
    /*Book.destroy({
      where: {
        id: 5
      }
    }).then(() => {
        console.log("El book se ha borrado correctamente" )
    }).catch((error) => {
        console.error('No se ha podido borrar el book : ', error);
    });*/

    // TODO: PUT - pasar a función updateBook(id, data)
    // UPDATE Books SET title = "Clean Code 5" WHERE id = 2
    // Query que se ejecuta:
    /* UPDATE `Books` SET `title`=?,`updatedAt`=? WHERE `id` = ?
    */

    /*Book.update(
      { title : "Clean Code NEW 2", 
        author: "Robert Cecil Martin NEW 2"
      },
      {
        where: {
          id: 2
      }
    }).then(() => {
      console.log("El book se ha editado correctamente" )
    }).catch((error) => {
      console.error('No se ha podido actualizar el book : ', error);
    });
    */

// Tabla
}).catch((error) => {
   console.error('No se ha podido crear la tabla: ', error);
});