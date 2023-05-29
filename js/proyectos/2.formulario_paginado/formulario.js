let btnAnterior = document.getElementById('anterior');
let btnSiguiente = document.getElementById('siguiente');
let btnEnviar = document.getElementById('enviar');

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