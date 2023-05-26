function escribir(div){
  console.log(div.innerText)
  // Escribir en el display con id="resultado"
  let tecla = div.innerText 
  let resultado = document.getElementById("resultado")
  if(resultado.innerText == "0"){
    resultado.innerText = ""
  }
  if(tecla == "," && !resultado.innerText.includes(",")){
    resultado.innerText += tecla // concatenar la coma
  }else if(tecla != ","){
    resultado.innerText += tecla
  }
}
function borrar(){
  // Borrar el display con id="resultado"
  document.getElementById("resultado").innerText = "0"
  console.log("Borrado")
}
function cambiarSigno(){
  console.log("Cambio de signo")
}
function porcentaje(){
  console.log("Porcentaje")
}
function calcular(){
  console.log("Calcular")
}