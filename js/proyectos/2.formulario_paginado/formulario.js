// Habilitar los botones de navegación
// Cambiar el display de none a block según el click en cada botón

let btnAnterior = document.getElementById('anterior');
let btnSiguiente = document.getElementById('siguiente');
let btnEnviar = document.getElementById('enviar');

btnAnterior.addEventListener('click', (e) => { 
  e.preventDefault();
  console.log("anterior");
});
btnSiguiente.addEventListener('click', (e) => { 
  e.preventDefault();
  console.log("siguiente");
});
btnEnviar.addEventListener('click', (e) => { 
  e.preventDefault();
  console.log(enviar); 
});