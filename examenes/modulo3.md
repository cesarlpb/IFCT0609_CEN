## Examen del Módulo 3 - Node, React y Express

Cuestionario: link

### Parte 1. Preguntas tipo test

1. ¿Qué es Node.js?
a) Un servidor web
b) Un lenguaje de programación
c) Un entorno de ejecución de JavaScript del lado del servidor
d) Un editor de texto

2. ¿Cuál de las siguientes opciones es un marco de desarrollo para Node.js?
a) Angular
b) Express
c) jQuery
d) Django

3. ¿Qué se utiliza para instalar paquetes en Node.js?
a) npm
b) git
c) pip
d) Powershell

4. ¿Cuál de las siguientes opciones es un marco de desarrollo para aplicaciones web en Node.js?
a) Angular
b) Express
c) React
d) Vue.js

5. ¿Qué es Express.js?
a) Una base de datos
b) Un lenguaje de programación
c) Un marco de desarrollo de aplicaciones web en Node.js
d) Un servidor de aplicaciones

6. ¿Cuál es una forma correcta de iniciar un proyecto de Express.js?
a) `npm init`
b) `express init`
c) `npm express create`
d) `create-express-app`

7. ¿Cuál es el comando para iniciar un servidor en Express.js?
a) `node server.js`
b) `start server.js`
c) `express server.js`
d) `npm start`

8. ¿Cuál de las siguientes opciones es una biblioteca de interfaz de usuario de JavaScript?
a) Node.js
b) Express.js
c) React.js
d) MongoDB

9. ¿Qué es React.js?
a) Un lenguaje de programación
b) Un marco de desarrollo de aplicaciones web en Node.js
c) Un lenguaje de consultas para bases de datos
d) Una biblioteca de interfaz de usuario de JavaScript

10. ¿Cuál es la forma correcta de crear un componente en React.js?
a) `React.createComponent()`
b) `createComponent()`
c) `React.component()`
d) `function Componente(){ return (<div>Contenido</div>)}`

11. ¿Cuál de las siguientes opciones es un enfoque popular para el enrutamiento en React.js?
a) Express.js
b) React Router DOM
c) Angular Router
d) Vue Router

12. ¿Qué se utiliza para manejar el estado en React.js?
a) Redux
b) Express
c) npm
d) El hook useState()

13. ¿Cuál de las siguientes opciones se utiliza para renderizar elementos en React.js?
a) `ReactDOM.render()`
b) `React.render()`
c) `render()`
d) `return (<div>contenido</div>)`

14. ¿Cuál de las siguientes opciones es una forma de pasar datos de un componente padre a un componente hijo en React.js?
a) Props
b) State
c) Render
d) DOM

15. ¿Cuál de las siguientes opciones se utiliza para realizar solicitudes HTTP en React.js?
a) fetch()
b) get()
c) request()
d) send()

16. ¿Cuál de las siguientes opciones es un método del ciclo de vida de un componente de React.js que se ejecuta después de que el componente se haya montado en el DOM?
a) El hook useEffect()
b) `componentDidMount()`
c) `componentWillUpdate()`
d) `componentDidUpdate()`

17. ¿Cuál de las siguientes opciones es una biblioteca de animación popular para React.js?
a) Redux
b) Lodash
c) React Spring
d) Express

18. ¿Cuál de las siguientes opciones se utiliza para agregar estilos CSS en React.js?
a) style 
b) CSS.js
c) React.css()
d) CSS-JS Modules

19. ¿Qué es JSX en React.js?
a) Un lenguaje de consultas para bases de datos
b) Un formato de archivo de imagen
c) Una extensión de sintaxis para JavaScript que permite escribir HTML en JavaScript
d) Un marco de pruebas unitarias

20. ¿Cuál de las siguientes opciones es una forma de manejar eventos en React.js?
a) addEventListener()
b) event.on()
c) onClick()
d) eventListener()

21. ¿Cuál de las siguientes opciones se utiliza para crear una aplicación de React.js desde cero?
a) `create-react-app`
b) `start-react-app`
c) `react-init`
d) `npm init react-app`

22. ¿Cuál de las siguientes opciones se utiliza para dividir la aplicación de React.js en componentes más pequeños y reutilizables?
a) State
b) Props
c) JSX
d) Hooks

23. ¿Cuál de las siguientes opciones se utiliza para actualizar el estado de un componente en React.js?
a) setState()
b) updateState()
c) changeState()
d) modifyState()

24. ¿Qué comando se utiliza para ejecutar un archivo de Node.js desde la línea de comandos?
a) execute
b) run
c) start
d) node

25. ¿Cuál de las siguientes opciones describe correctamente la arquitectura de módulos en Node.js?
a) Los módulos de Node.js son archivos JavaScript que se pueden importar y exportar utilizando las palabras clave import y export.
b) Los módulos de Node.js son funciones globales que se pueden utilizar en cualquier parte de una aplicación Node.js.
c) Los módulos de Node.js son archivos binarios que se pueden ejecutar directamente en el sistema operativo.
d) Los módulos de Node.js son archivos JavaScript que encapsulan código reutilizable y se pueden importar y exportar utilizando el sistema de módulos de Node.js.

26. ¿Cuál de las siguientes opciones se utiliza para importar un módulo en Node.js?
a) require()
b) import()
c) load()
d) include()

27. ¿Cómo es posible realizar una acción previa o aplicar lógica antes de dar un response en un endpoint?
a) No es posible
b) Usando un middleware
c) Haciendo una llamada adicional
d) Usando un servidor

28. ¿Cuál de las siguientes opciones se utiliza para iniciar un servidor en Node.js?
a) start()
b) run()
c) listen()
d) open()

29. ¿Cuál de las siguientes opciones se utiliza para manejar rutas en Express.js?
a) app.route()
b) app.get()
c) app.post()
d) app.path()

30. ¿Cuál de las siguientes opciones se utiliza para enviar datos desde el cliente al servidor en una solicitud POST en Express.js?
a) req.body
b) req.params
c) req.query
d) req.headers

**React funcional ->** `function Component(props){ return <></>}`

### Parte 2. Preguntas de desarrollo

1. Usando Node crea un endpoint que devuelva todos los registros de un objeto en formato JSON. Este endpoint debe devolver todos los elementos de una lista si no se recibe parámetro “id” y solo un objeto o el primero que encuentre en la lista si recibe id. ¿Cómo podríamos añadir un filtro a la lista para buscar por un campo de los objetos del array?

- package.json -> npm init -y (automático) o npm init
- `npm install express`
- `npm node app.js`

**Solución de Nuria:**

```js
const express = require('express');
const app = express();

// Datos de ejemplo
const lista = [
  { id: 1, nombre: 'Objeto 1', campo: 'valor1' },
  { id: 2, nombre: 'Objeto 2', campo: 'valor2' },
  { id: 3, nombre: 'Objeto 3', campo: 'valor3' }
];

// Endpoint para obtener registros
app.get('/registros', (req, res) => {
  const { id, nombre, campo } = req.query; // como tiene el campo "campo" -> campo == "valor1"
  console.log(id, campo, req.query)
  if (id) {
    // Buscar por ID
    const objeto = lista.find(item => item.id === parseInt(id));
    if (objeto) {
      res.json(objeto);
    } else {
      res.status(404).json({ error: 'Objeto no encontrado' });
    }
  } else if (campo) {
    // Filtrar por campo
    const resultados = lista.filter(item => item?.campo === campo);
    res.json(resultados);
  } 
  // else if (nombre)
  else {
    // Obtener todos los registros
    res.json(lista);
  }
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
```

2. Usando **React**, crea un formulario para que un usuario pueda crear un post. El post puede tener campos como título, contenido (texto) y etiquetas. Este post se podrá editar y revisar antes de enviar el formulario. Una vez creado el post, se debe poder enviar haciendo click. Si falta algún campo debe salir una aviso acorde y cuando se reciba el post correctamente en el backend, debemos notificar al usuario sobre esto.

- [Solución en rama examen-3-cen](https://github.com/cesarlpb/learn-react/tree/examen-3-cen)
- **Release (descarga ZIP):** **Release (descarga ZIP):** https://github.com/cesarlpb/IFCT0609_CEN/releases/download/examen-3-cen/examen-3.zip

Ejemplo para un Tweet:

```js
  const handleTextArea = (e) => {
    console.log(e.target.value)
  }

      <form>
        <TextArea 
        rows={4} 
        maxLength={150} 
        placeholder='🐦¿Qué está pasando?🐦'
        onChange={handleTextArea}
        />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "5px", alignItems: "center"}}>
        <p style={{color:"white"}}>Abre consola y escribe algo :)</p>
        <Button type="primary">Tuit! <LiaKiwiBirdSolid/></Button>
        </div>
      </form>
```

---

3. Siguiendo el ejercicio anterior, se debe recibir el post creado en un endpoint, método POST, de Node. Este endpoint debe notificar sobre la creación del post en el response. Además, el endpoint enviará cualquier información necesaria para que el usuario pueda ver ese post creado. Adicionalmente, el usuario debería poder editar el post una vez creado. Este ejercicio depende del anterior y debe ir acorde al mismo para funcionar.

[Solución de Node](./server.js)

**Release (descarga ZIP):** https://github.com/cesarlpb/IFCT0609_CEN/releases/download/examen-3-cen/examen-3.zip