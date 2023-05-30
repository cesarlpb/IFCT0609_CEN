let btnAnterior = document.getElementById('anterior');
let btnSiguiente = document.getElementById('siguiente');
let btnEnviar = document.getElementById('enviar');

/* Validación de campos */
// Todos los inputs del form:
let inputs = document.querySelectorAll('input');
let validacionesSeccion1 = [false, false, false, false];
// Nombre
let inputNombre = inputs[0];
inputNombre.addEventListener('change', (e) => {
  let valorActual = e.target.value
  let errorDiv = document.getElementById('nombre-error')
  let successDiv = document.getElementById('nombre-success')
  if(valorActual.length < 3){
    successDiv.style.display = 'none';
    errorDiv.style.display = 'block';
    validacionesSeccion1[0] = false;
    console.log(validacionesSeccion1[0])
  }else{
    errorDiv.style.display = 'none';
    successDiv.style.display = 'block';
    // Actualizamos el primer elemento del array de validaciones
    validacionesSeccion1[0] = true;
    console.log(validacionesSeccion1[0])
  }
  ocultarMostrarBtnSiguiente();
})

btnAnterior.addEventListener('click', (e) => { 
  e.preventDefault();
  // Determinar en qué sección estamos o cuál esta activa
  // Cambiar a la anterior sección
  let seccionActiva = seccionActual();
  if(seccionActiva > 1){
    cambiarSeccion(seccionActiva-1)
    ocultarPrevNext();
    console.log("siguiente", seccionActiva-1);
  }
});
btnSiguiente.addEventListener('click', (e) => { 
  e.preventDefault();
  // Determinar en qué sección estamos o cuál esta activa
  // Cambiar a la siguiente sección
  let seccionActiva = seccionActual();
  if(seccionActiva < 3){
    cambiarSeccion(seccionActiva+1)
    ocultarPrevNext();
    console.log("siguiente", seccionActiva+1);
  }
});
btnEnviar.addEventListener('click', (e) => { 
  e.preventDefault();
  console.log("enviar"); 
});

// Funciones
/**
 * Calculamos la sección actual: 1, 2, 3 en este caso.
 * @returns {Number} Número de la sección actual
 */
function seccionActual() {
  let secciones = document.querySelectorAll('section'), seccionActiva = 0;
  // Observación / TODO: para una lista larga si queremos hacer break habría que usar un bucle for
  secciones.forEach((seccion, index) => {
    if (seccion.classList.contains('active')) {
      seccionActiva = index+1;
    }
  });
  return seccionActiva
}
/**
 * Cambia a la sección del param
 * @param {Number} numero de la seccion a la que se quiere cambiar
 */
function cambiarSeccion(nuevaSeccion) {
  let secciones = document.querySelectorAll('section')
  secciones.forEach((seccion, index) => {
    if(index == nuevaSeccion-1) {
      seccion.classList.add('active');
    }else {
      seccion.classList.remove('active');
    }
  });
}
/**
 * Oculta o muestra el botón siguiente según la sección actual
 * No tiene params ni retorna nada
 */
function ocultarPrevNext(){
  let seccionActiva = seccionActual();
  if(seccionActiva == 1){
    btnAnterior.classList.add('disabled');
  }else if(seccionActiva == 3){
    btnSiguiente.classList.add('disabled');
  }else{
    btnAnterior.classList.remove('disabled');
    btnSiguiente.classList.remove('disabled');
  }
}

/**
 * Oculta o muestra el botón siguiente según la sección actual
 * Se llama cada vez que se cambia el contenido de un input en la sección
 * No tiene params ni retorna nada
 */
function ocultarMostrarBtnSiguiente(){
  let camposCorrectos = 0;
  validacionesSeccion1.forEach((validacion) => {
    camposCorrectos += validacion;
  })
  if(camposCorrectos == 1){
    btnSiguiente.classList.remove('disabled');
  }else{
    btnSiguiente.classList.add('disabled');
  }
}

// TODO:
// 1. Validar los campos del formulario -> por secciones y "todo"
// 2. Presentar mensajes de error según validaciones
// 3. Habilitar botón enviar si todo es correcto
// 4. Enviar formulario a un servidor -> como no podemos hacer esto ahora, lo simularemos: 
  // con un console.log
  // con un alert
  // con un mensaje en el DOM -> JSON -> {nombre: "Juan", apellido: "Perez", ...}
    // paso intermedio: la contraseña no se envía, se pasa a un hash primero
  // O podemos colocar una pantalla final (HTML) donde el usuario vea sus datos entregados