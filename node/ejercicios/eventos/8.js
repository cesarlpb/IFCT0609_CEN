/*
En esta página existen tres bloques ocultos. Debes crear un evento de teclado para que actúe cuando el usuario pulsa una tecla. 

* Si pulsa la tecla 1 se abre el bloque con id ficha1, 
* Si pulsa 2 se abre el bloque ficha2 y 
* Si pulsa 3 se abre el de ficha3.
*/

// Colocamos el listener al body para poder teclear desde cualquier lugar de la página (siempre que el cursor esté en el <body>):
let body = document.getElementsByTagName("body")[0];
body.addEventListener("keydown", escribirTecla);

function escribirTecla(e) {
  console.log("código de tecla:", e.code); // 'Digit2'
  console.log("tecla:", e.key) // '2'
  if(e.key == "1"){
    let ficha = document.getElementById("ficha1");
    ficha.classList.remove("oculto");
    ficha.classList.add("visible");
    window.scrollTo(0, window.scrollY + 100);
  }else if(e.key == "2"){
    let ficha = document.getElementById("ficha2");
    ficha.classList.remove("oculto");
    ficha.classList.add("visible");
    window.scrollTo(0, window.scrollY + 100);
  }else if(e.key == "3"){
    let ficha = document.getElementById("ficha3");
    ficha.classList.remove("oculto");
    ficha.classList.add("visible");
    window.scrollTo(0, window.scrollY + 100);
  }
}

// Todo: añadir un poco de scrollY para que el elemento se pueda ver en la página al presentarlo como visible.