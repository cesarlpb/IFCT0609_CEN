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

async function createBook(newBook) {
  // Truncamos el campo description a 500 caracteres
  if(newBook?.dataValues?.description?.length > 500) {
    newBook.dataValues.description = newBook.dataValues.description.substring(0, 500);
  }
  return Book.create(newBook?.dataValues).then(res => {
    return res ?? {} // Nos devuelve el objeto creado -> nos ahorramos 1 query para comprobar si existe
  }).catch((error) => {
    console.error('No se ha podido crear el nuevo libro: ', error);
  });
}

async function deleteBook(id){
  return Book.destroy({
    where: {
      id: id
    }
  }).then(res => {
    return res ?? {} // Devuelve el número de elementos borrados
  }).catch((error) => {
    console.error(`No se ha podido eliminar el Book con id : ${id}`, error);
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
  // getBookById(2).then(book => {
  //   console.log(book)
  // }).catch((error) => {
  //   console.error(error);
  // });

  // Ejecutamos la función createBook() para crear un nuevo book
    // Primero, con el método build() creamos una instancia de Book -> aún no se guarda en la db, solo crea el nuevo objeto usando la clase Book de Sequelize
  // const newBook = Book.build({
  //   title: "Clean Code NEW NEW NEW",
  //   author: "Pepe",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus pellentesque magna, eget feugiat ligula aliquet mattis. Etiam bibendum, massa vitae pharetra pharetra, elit ante mollis nisl, ac laoreet ex ante at diam. Donec vehicula massa ut ante accumsan, nec rhoncus mi molestie. Quisque porta enim in mi vestibulum, at tincidunt ante suscipit. Integer placerat dolor id lacus sagittis ultricies sed in odio. Sed fringilla felis ut felis lobortis hendrerit. Etiam varius faucibus porttitor. Sed quis imperdiet eros. Nullam consequat neque nec pretium feugiat. Donec sapien ipsum, tristique eu odio nec, ullamcorper vestibulum ipsum. Praesent dignissim posuere ex vel varius. Cras aliquet luctus vehicula. Aenean varius luctus dapibus.",
  //   release_date: "2023-07-03",
  //   subject: 1
  // });
  // createBook(newBook).then(res => {
  //   console.log(res?.dataValues)
  // }).catch((error) => {
  //   console.error(error);
  // });

  // Ejecutamos la función deleteBook() para eliminar un book por id
  deleteBook(7).then(res => {
    console.log(res)
  }).catch((error) => {
    console.error(error);
  });
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