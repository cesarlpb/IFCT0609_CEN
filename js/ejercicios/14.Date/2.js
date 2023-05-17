/*
Vamos a por el tradicional ejercicio donde el ordenador te va a saludar con un buenos días, buenas tardes o buenas noches según la hora del día. 
* De 6 de la mañana 12 del medio día serán buenos días,  
* a partir de las 12 hasta las 20h serán buensa tardes 
* y a partir de las 20h hasta las 6 de la madrugada serán buenas noches.

Por ejemplo entro en mi página a las 10am, la página me mostraría "Buenos días", pero si entro a las 14:30 me dirá Buenas tardes y si llego a las 11 de la noche a la 1 de la madrugada me dirá Buenas noches. 
*/

let fecha = new Date()
let hora = fecha.getHours() // 0 - 23 
let minutos = fecha.getMinutes() // 0 - 59

// TODO: hacer que los minutos y las horas se muestren con dos dígitos siempre usando un método de string
if(hora >= 6 && hora < 12){
    alert(`Son las ${hora}:${minutos} h. Buenos días`)
}else if(hora >= 12 && hora < 20){
    alert(`Son las ${hora}:${minutos} h. Buenas tardes`)
}else{
    alert(`Son las ${hora}:${minutos} h. Buenas noches`)
}
