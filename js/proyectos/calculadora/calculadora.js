function escribir(div){
  console.log(div.innerText)
  // Escribir en el display con id="resultado"
  let tecla = div.innerText 
  let resultado = document.getElementById("resultado")
  let mensaje = "Máximo 10 caracteres"
  if(resultado.innerText.length <10){
    if(resultado.innerText == "0"){
      resultado.innerText = ""
    }
    if(tecla == "," && !resultado.innerText.includes(",")){
      resultado.innerText += tecla // concatenar la coma
    }else if(tecla != ","){
      resultado.innerText += tecla
    }
  }else{
    alert(mensaje)
  }
}
function borrar(){
  // Borrar el display con id="resultado"
  document.getElementById("resultado").innerText = "0"
  console.log("Borrado")
}
function cambiarSigno(){
  console.log("Cambio de signo")
  let resultado = document.getElementById("resultado")
  let esNumero = parseFloat(resultado.innerText) == resultado.innerText
  if(esNumero){
    resultado.innerText = -1 * parseFloat(resultado.innerText)
  }
}
function porcentaje(){
  console.log("Porcentaje")
  let resultado = document.getElementById("resultado")
  let esNumero = parseFloat(resultado.innerText) == resultado.innerText
  if(esNumero){
    resultado.innerText = parseFloat(resultado.innerText) / 100
  }
}
function calcular(){
  // Calcular el display con id="resultado"
  let resultado = document.getElementById("resultado")
  console.log(resultado.innerText)
  let expresion = resultado.innerText
                  .replaceAll("÷","/")
                  .replaceAll("×","*")
                  .replaceAll(",",".")
  console.log(expresion)
  let valorCalculado = math.evaluate(expresion)
  resultado.innerText = valorCalculado
  console.log("Calculado")
}
// TODO:
// Resetear valor si ya hay un resultado
// Reducimos tamaño de fuente ?
  // Adaptar el máximo de caracteres
// Botones +/- y %

// Estilos:
  // Ancho de la calc en pantallas md y sm
  // Bordes
  // Colores de active y hover? 