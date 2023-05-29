let btnAnterior = document.getElementById('anterior');
let btnSiguiente = document.getElementById('siguiente');
let btnEnviar = document.getElementById('enviar');

btnAnterior.addEventListener('click', (e) => { 
  e.preventDefault();
  // Determinar en qué sección estamos o cuál esta activa
  // Cambiar a la anterior sección
  let seccionActiva = seccionActual();
  cambiarSeccion(seccionActiva-1)
  console.log("anterior", seccionActiva);
});
btnSiguiente.addEventListener('click', (e) => { 
  e.preventDefault();
  // Determinar en qué sección estamos o cuál esta activa
  // Cambiar a la siguiente sección
  let seccionActiva = seccionActual();
  cambiarSeccion(seccionActiva+1)
  console.log("siguiente", seccionActiva);
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
 * @param {Number} numero de la seccion a la que se quiere cambiar
 */
function cambiarSeccion(numero) {
  // cambia a la sección del param
}