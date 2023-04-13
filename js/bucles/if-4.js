//4. Mirando la hora actual, vamos a comprobar si es horario laboral. Horario laboral: 9 AM a 6 PM.

function comprobarHorarioLaboral(){
    
    // Mirar que hora es:
    let date = new Date()
    let horaActual = date.getHours()
    
    // Comprobar si es horario laboral
    // Horario laboral es entre las 9 y las 18 h
    let mensaje = ""

    if( horaActual >= 9 && horaActual <= 18 ){
        mensaje = "Es horario laboral"
    } else {
        mensaje = "No es horario laboral :)"
    }

    let elemento = document.getElementById("resultado8")
    elemento.innerText = mensaje
}

function comprobarHorarioLaboral2(){
    let date = new Date()
    let horaActual = date.getHours();
    let minutosActuales = date.getMinutes();
    let mensaje = ""
    //Horario: 9 a 17.30
    if ( horaActual >= 9 && horaActual < 18){
        if ( horaActual == 17 && minutosActuales >= 30 ){
            mensaje = "Puedes salir :)"
        }
        else {
            mensaje = "Aún no :("
        }
    } else {
        mensaje = "No es horario laboral"
    }
    console.log(mensaje)
    let elemento = document.getElementById("resultado8")
    elemento.innerText = mensaje
}