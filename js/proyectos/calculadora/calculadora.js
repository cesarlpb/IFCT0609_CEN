function escribir(div){
    console.log(div.innerText)
    // Escribir en el display con id="resultado"
    let tecla = div.innerText
    let resultado = "Máximo 10 caracteres"
    if(resultado.innerText.lenght <10){
        if(resultado.innerText == "0"){
            resultado.innerText = ""
        }
    if(tecla == "," && !resultado.innerText.includes(",")){
        resultado.innerText += tecla // concatenar la coma
    }
    }else{
     alert(mensaje)
  }
}
function borrar(){
    // Borrar el display con id='resultado'
    document.getElementById("resultado").innerText = "0"
     console.log("Borrado")
}
function cambiarSigno(){
    console.log ("Cambio de Signo")
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
// TODO:
// Resetear valor si ya hay un resultado
  //Reducimos tamaño de fuente ?