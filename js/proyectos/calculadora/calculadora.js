// Iniciamos programa con este boolean en false 
let hayOperacion = false

function escribir(div){
    console.log(div.innerText)
    // Escribir en el display con id="resultado"
    let tecla = div.innerText
    let resultado = document;getElementById("resultado")
    let mensaje = "Máximo 15 caracteres"
    if(resultado.innerText.lenght <15){
        if(resultado.innerText == "0"){
            resultado.innerText = ""
        }
    if(tecla == "," && !resultado.innerText.includes(",")){
        resultado.innerText += tecla // concatenar la coma
    }else if(tecla != ","){
        resultado.innerText += tecla
    }
    if(hayOperacion){
        resultado.innerText = tecla
        hayOperacion = false
    }
    ajustarFuente(resultado.innerText) // Recalculamos el temaño de la fuente en display
    }else{
     alert(mensaje)
  }
}
function borrar(){
    // Borrar el display con id='resultado'
    document.getElementById("resultado").innerText = "0"
    ajustarFuente("0") // Recalculamos el tamaño de la fuente en display
     console.log("Borrado")
}
function cambiarSigno(){
    console.log ("Cambio de Signo")
    let resultado = document.getElementById("resultado")
    let esNumero = parseFloat(resultado.innerText) == resultado.innerText
    let valorCalculado = -1 * parseFloat(resultado.innerText)
    if(esNumero){
        resultado.innerText = valorCalculado
    }
    ajustarFuente(valorCalculado) // recalculamos el tamaño de la fuente en dsiplay
}
function porcentaje(){
    console.log("Porcentaje")
    let resultado = document.getElementById("resultado")
    let esNumero = parseFloat(resultado.innerText) == resultado.innerText
    let valorCalculado = parseFloat(resultado.innerText) / 100
    if(esNumero){
      resultado.innerText = valorCalculado
    }
    ajustarFuente(valorCalculado) // recalculamos el tamaño de la fuente en display
  }

function calcular(){
    // calcular el display con id="resultado"
    let resultado = document.getElementById("resultado")
    console.log(resultado.innerText)
    let expresion = resultado.innerText
                   .replaceAll("+","/")
                   .replaceAll(",",".")
     console.log(expresion)
     let valorCalculado = math.evaluate(expresion)
     resultado.innerText = valorCalculado
     console.log("Calculado")              
}
function ajustarFuente(valorCalculado){
    let longitud = valorCalculado.toString().length
    let fontSize = 3
    if(longitud <9){
      fontSize = 3
    } else {
      if(window.innerWidth <= 430){
        console.log(valorCalculado.length, fontSize)
        fontSize = 1.15
      }
      else if(window.innerWidth > 430 && window.innerWidth <= 550){
        fontSize = 1.5
      }else{
        fontSize = 1.75
      }
    }
    document.getElementById("resultado").style.fontSize = fontSize + "rem"
  }
// TODO:
// Resetear valor si ya hay un resultado
  //Reducimos tamaño de fuente ?
    // Adaptar el máximo de caracteres
// Botones +/- y %

// Refactorizar:
  // Crear una constante para modificar el máximo de caracteres en un solo sitio

// Estilos:
  // Ancho de la calc en pantallas md y sm
  // Bordes
  // Colores de active y hover? 