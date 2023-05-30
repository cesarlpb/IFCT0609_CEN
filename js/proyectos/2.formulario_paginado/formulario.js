let btnAnterior = document.getElementById('anterior');
let btnSiguiente = document.getElementById('siguiente');
let btnEnviar = document.getElementById('enviar');

/* Validación de campos */
// Todos los inputs del form:
let inputs = document.querySelectorAll('input');
let validacionesSeccion1 = [false, false, false, false];
let validaciones = {
  nombre: false,
  username: false,
  password: false,
  email: false
}
// Nombre
let inputNombre = inputs[0];
inputNombre.addEventListener('change', (e) => {
  validarCampo(inputNombre, validarNombre);
})

// Validaciones con Regex

// Sección 1
// Nombre: mínimo 3 caracteres
// Username: sin espacios, solo a-z, A-Z, 0-9, _, -, y .
// Contraseña: mínimo 8 caracteres, al menos una mayúscula, un número y un caracter especial ?
// Email: formato de email

// Sección 2
// Dirección: mínimo 10 caracteres
// Ciudad: mínimo 3 caracteres
// País: mínimo 3 caracteres o validar de lista de países
// C.P.: 5 dígitos (en España) ?
// Teléfono: 9 dígitos (en España), se puede permitir que empiecen en +34 o 0034 
// Además, después del +34 
  // Fijos: +34 9 ... o +34 8 ...
  // Móviles: +34 6 ... o +34 7 ...
// Fuente: https://es.wikipedia.org/wiki/N%C3%BAmeros_de_tel%C3%A9fono_de_Espa%C3%B1a

// Sección 3
// Web, Linkedin, Github, CV:
  // Empiecen pos http:// o https://
  // Linkedin: linkedin.com/in/...
  // Github: github.com/...

btnAnterior.addEventListener('click', (e) => { 
  e.preventDefault();
  // Determinar en qué sección estamos o cuál esta activa
  // Cambiar a la anterior sección
  let seccionActiva = seccionActual();
  if(seccionActiva > 1){
    cambiarSeccion(seccionActiva-1)
    ocultarPrevNext();
    // console.log("siguiente", seccionActiva-1);
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
    // console.log("siguiente", seccionActiva+1);
  }
});
btnEnviar.addEventListener('click', (e) => { 
  e.preventDefault();
  console.log("enviar"); 
});

// Funciones
// Botones de navegación
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
  let arr = Object.values(validaciones);
  arr.forEach((validacion) => {
    camposCorrectos += validacion;
  })
  // TODO: cambiar esto para que compruebe en cada sección si los 4 son correctos
  // o al final si TODOS los campos son correctos; creo que así funciona para sección 1 y 2
  // con una pequeña modificación

  // CAMBIAR a 4
  if(camposCorrectos == 1){
    btnSiguiente.classList.remove('disabled');
  }else{
    btnSiguiente.classList.add('disabled');
  }
}

// Validaciones
function validarCampo(input, validacion, errorDiv = "", successDiv = ""){
  // Si no me indican los divs de error y success, los busco por defecto usando los ids
  let prefijo = input.id.split('-')[0];
  if(errorDiv == ""){
    errorDiv = document.getElementById(prefijo+'-error');
  }
  if(successDiv == ""){
    successDiv = document.getElementById(prefijo+'-success');
  }
  let valorActual = input.value;
  let esCampoValido = validacion(valorActual); // esta validación cambiaria en cada campo
  console.log(valorActual)
  if(!esCampoValido){
    successDiv.style.display = 'none';
    errorDiv.style.display = 'block';
    validaciones[input.id] = false;
  }else{
    errorDiv.style.display = 'none';
    successDiv.style.display = 'block';
    // Actualizamos el primer elemento del array de validaciones
    validaciones[input.id] = true;
  }
  console.log("esCampoValido:", esCampoValido)
  ocultarMostrarBtnSiguiente();
}
/**
 * @param {String} valorActual 
 * @returns {Boolean} true si el nombre es válido, false si no lo es
 */
function validarNombre(valorActual){
  return valorActual.length >= 3;
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