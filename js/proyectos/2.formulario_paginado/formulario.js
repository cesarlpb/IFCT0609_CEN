let btnAnterior = document.getElementById('anterior');
let btnSiguiente = document.getElementById('siguiente');
let btnEnviar = document.getElementById('enviar');

/* Validación de campos */
// Todos los inputs del form:
let inputs = document.querySelectorAll('input');
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
// Username
let inputUsername = inputs[1];
inputUsername.addEventListener('change', (e) => {
  validarCampo(inputUsername, validarUsername);
})
// Contraseña
let inputPassword = inputs[2];
inputPassword.addEventListener('change', (e) => {
  validarCampo(inputPassword, validarPassword);
})
// Email
let inputEmail = inputs[3];
inputEmail.addEventListener('change', (e) => {
  validarCampo(inputEmail, validarEmail);
})

// Validaciones con Regex

// Sección 1 - validaciones completas
// Nombre: mínimo 3 caracteres
// Username: sin espacios, solo a-z, A-Z, 0-9, _, -, y .
  // longitud mínima 5 caracteres
  // longitud máxima 15 caracteres
// Contraseña: Al menos una mayúscula, un número y un caracter especial ?
  // longitud mínima 8 caracteres
  // longitud máxima 20 caracteres
// Email: formato de email

// TODO: pensar como podemos hacer un bucle para validar todas las secciones
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

  if(camposCorrectos == 4){
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
  console.log(valorActual, validacion(valorActual))
  if(!esCampoValido && valorActual.length > 0){
    successDiv.style.display = 'none';
    errorDiv.style.display = 'block';
    validaciones[input.id] = false;
  }else if(valorActual.length > 0){
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
/**
 * @param {String} valorActual 
 * @returns {Boolean} true si el nombre es válido, false si no lo es
 */
function validarUsername(valorActual){
  if(valorActual.includes(' ')){
    return false
  }
  // Valida a-z, A-Z, 0-9, _ . -
  // Comprueba que existan SOLO esos caracteres
  let regex = /^[a-zA-Z0-9_.-]*$/;
  let longitudEnRango = valorActual.length >= 5 && valorActual.length <= 15;
  return regex.test(valorActual) && longitudEnRango;
}

/**
 * @param {String} valorActual 
 * @returns {Boolean} true si el nombre es válido, false si no lo es
 */
function validarPassword(valorActual){
  // Longitud entre 8 y 20 caracteres
  // Si la longitud está fuera del rango, no se cumple la validación => return false
  if(valorActual.length < 8 || valorActual.length > 20){
    return false;
  }
  // Al menos una mayúscula y un número
  let contadorMayusculas = 0, contadorNumeros = 0;
  let arr = valorActual.split('');
  arr.forEach((letra) => {
    if(letra == letra.toUpperCase()){
      contadorMayusculas++;
    }
    if(letra == parseInt(letra)){
      contadorNumeros++;
    }
  })
  // En caso de no encontrar mayúsculas, no se cumple la validación => return false
  if(contadorMayusculas == 0){
    return false;
  }
  // En caso de no encontrar números, no se cumple la validación => return false
  if(contadorNumeros == 0){
    return false;
  }
  console.log(valorActual.length, contadorMayusculas, contadorNumeros)
  // Al menos un caracter especial, hay dos formas de hacerlo:
  // 1. Validamos los caracteres especiales que vamos a permitir:
  // let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?ñÑ`´¨çÇ]/;
  // o más simple pero sin personalizar caracteres permitidos:
  // let regex = /\W/;
  // 2. Validamos que no es una expresión alfanumérica, es decir, que falle este regex:
  let regex = /^[a-zA-Z0-9]*$/;
  return !regex.test(valorActual);
}

function validarEmail(valorActual){
  let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]*$/; 
  return regex.test(valorActual);
}

function validarDireccion(valorActual){
  let regex = /^[a-zA-Z0-9-ºª\s]*$/;
  let longitudEnRango = valorActual.length >= 10 && valorActual.length <= 200;
  return regex.test(valorActual) && longitudEnRango;
}

function validarCiudad(valorActual){
  let regex = /^[a-zA-Z\s]*$/;
  let longitudEnRango = valorActual.length >= 3 && valorActual.length <= 100;
  let estaEnLista = ciudades.includes(valorActual.toUpperCase().split(" ")[0]); // "CONGO (Rep. Democrática del)" -> CONGO
  return regex.test(valorActual) && longitudEnRango && estaEnLista;
}

function validarCiudad(valorActual){
  let regex = /^[a-zA-Z\s]*$/;
  let longitudEnRango = valorActual.length >= 3 && valorActual.length <= 100;
  return regex.test(valorActual) && longitudEnRango;
}

function validarCodigoPostal(valorActual){
  let regex = /^[0-9]{5}$/; // 5 dígitos en España
  return regex.test(valorActual);
}

function validarTelefono(valorActual){
  let tlf = valorActual.replace(/\s/g, ''); // Eliminamos los espacios en blanco
  tlf = tlf.replace(/\(/g, ''); // Eliminamos el símbolo (
  tlf = tlf.replace(/\)/g, ''); // Eliminamos el símbolo )
  tlf = tlf.replace(/\-/g, ''); // Eliminamos el símbolo -
  let regex = /^(?:\+34\s?)?[0-9]{9}$/; // 9 dígitos en España
  return regex.test(valorActual);
}

const ciudades = [
  "AFGANISTÁN",
  "ALBANIA",
  "ALEMANIA",
  "ANDORRA",
  "ANGOLA",
  "ANTIGUA Y BARBUDA",
  "ARABIA SAUDÍ",
  "ARGELIA",
  "ARGENTINA",
  "ARMENIA",
  "ARUBA",
  "AUSTRALIA",
  "AUSTRIA",
  "AZERBAIYÁN",
  "BAHAMAS",
  "BAHRÉIN",
  "BANGLADESH",
  "BARBADOS",
  "BELARRÚS",
  "BELICE",
  "BENÍN",
  "BOLIVIA",
  "BOSNIA-HERZEGOVINA",
  "BOTSUANA",
  "BRASIL",
  "BRUNÉI",
  "BULGARIA",
  "BURKINA FASO",
  "BURUNDI",
  "BUTÁN",
  "BÉLGICA",
  "CABO VERDE",
  "CAMBOYA",
  "CAMERÚN",
  "CANADÁ",
  "CATAR",
  "CHAD",
  "CHILE",
  "CHINA",
  "CHIPRE",
  "COLOMBIA",
  "COMORAS",
  "CONGO",
  "CONGO (Rep. Democrática del)",
  "COREA (Rep. de)",
  "COSTA RICA",
  "CROACIA",
  "CUBA",
  "CURAZAO",
  "CÔTE D'IVOIRE",
  "DINAMARCA",
  "DOMINICA",
  "ECUADOR",
  "EGIPTO",
  "EL SALVADOR",
  "EMIRATOS ÁRABES UNIDOS",
  "ERITREA",
  "ESLOVAQUIA",
  "ESLOVENIA",
  "ESPAÑA",
  "ESTADO DE LA CIUDAD DEL VATICANO",
  "ESTADO DE PALESTINA",
  "ESTADOS UNIDOS",
  "ESTONIA",
  "ESWATINI",
  "ETIOPÍA",
  "FILIPINAS",
  "FINLANDIA",
  "FIYI",
  "FRANCIA",
  "GABÓN",
  "GAMBIA",
  "GEORGIA",
  "GHANA",
  "GRANADA",
  "GRECIA",
  "GUATEMALA",
  "GUINEA",
  "GUINEA BISSAU",
  "GUINEA ECUATORIAL",
  "GUYANA",
  "HAITÍ",
  "HONDURAS",
  "HUNGRÍA",
  "INDIA",  
  "INDONESIA",
  "IRAK",
  "IRLANDA",
  "IRÁN",
  "ISLANDIA",
  "ISRAEL",
  "ITALIA",
  "JAMAICA",
  "JAPÓN",
  "JORDANIA",
  "KAZAJSTÁN",
  "KENIA",
  "KIRGUISTÁN",
  "KIRIBATI",
  "KUWAIT",
  "LAOS",
  "LESOTO",
  "LETONIA",
  "LIBERIA",
  "LIBIA",
  "LIECHTENSTEIN",
  "LITUANIA",
  "LUXEMBURGO",
  "LÍBANO",
  "MACEDONIA DEL NORTE",
  "MADAGASCAR",
  "MALASIA",
  "MALAUI",
  "MALDIVAS",
  "MALTA",
  "MALÍ",
  "MARRUECOS",
  "MARSHALL (Islas)",
  "MAURICIO",
  "MAURITANIA",
  "MICRONESIA (ESTADOS FEDERADOS DE)",
  "MOLDOVA",
  "MONGOLIA",
  "MONTENEGRO",
  "MOZAMBIQUE",
  "MYANMAR",
  "MÉXICO",
  "MÓNACO",
  "NAMIBIA",
  "NAURU",
  "NEPAL",
  "NICARAGUA",
  "NIGERIA",
  "NORUEGA",
  "NUEVA ZELANDA",
  "NÍGER",
  "OMÁN",
  "PAKISTÁN",
  "PANAMÁ",
  "PAPÚA NUEVA GUINEA",
  "PARAGUAY",
  "PAÍSES BAJOS",
  "PERÚ",
  "POLONIA",
  "PORTUGAL",
  "REINO UNIDO",
  "REP. CENTROAFRICANA",
  "REP. CHECA",
  "REP. DOMINICANA",
  "RUANDA",
  "RUMANIA",
  "RUSIA",
  "SALOMÓN (Islas)",
  "SAMOA",
  "SAN CRISTÓBAL Y NIEVES",
  "SAN MARINO",
  "SAN MARTÍN",
  "SAN VICENTE Y LAS GRANADINAS",
  "SANTA LUCÍA",
  "SANTO TOMÉ Y PRÍNCIPE",
  "SENEGAL",
  "SERBIA",
  "SEYCHELLES",
  "SIERRA LEONE",
  "SINGAPUR",
  "SIRIA",
  "SOMALIA",
  "SRI LANKA",
  "SUDÁFRICA",
  "SUDÁN",
  "SUDÁN DEL SUR",
  "SUECIA",
  "SUIZA",
  "SURINAM",
  "TAILANDIA",
  "TANZANIA",
  "TAYIKISTÁN",
  "TIMOR-LESTE",
  "TOGO",
  "TONGA",
  "TRINIDAD Y TOBAGO",
  "TURKMENISTÁN",
  "TÚNEZ",
  "TÜRKIYE",
  "UCRANIA",
  "UGANDA",
  "URUGUAY",
  "UZBEKISTÁN",
  "VANUATU",
  "VENEZUELA",
  "VIETNAM",
  "YEMEN",
  "YIBUTI",
  "ZAMBIA",
  "ZIMBABUE",
]

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