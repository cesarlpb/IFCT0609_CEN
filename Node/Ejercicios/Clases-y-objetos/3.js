/*

En esta propuesta debes crear una clase de nombre piedra (con class o con function) con dos 

Propiedades: 
    masa, volumen 
Método: densidad 

    que calcule este valor (masa/volumen). Luego instancia al menos un objeto de esta clase, dale un valor a su masa y a su volumen y ejecuta el método densidad.

Por ejemplo objeto oro, masa de la muestra 194 gr y volumen 10 cc. Densidad deberá devolver 19,4.

*/

/*
let piedra1 = {
    "masa" : 1.00,
    "volumen" : 0.1,
    "densidad" : function(){
        return this.masa / this.volumen
    }
}
*/

class Piedra {
    "masa" = 0;
    "volumen" = 1;
    densidad(){
        return (this.masa / this.volumen).toFixed(2).replace(".", ",")
    }
}
let piedra = new Piedra()
let masa = Number(prompt("Introduce la masa de la piedra en gramos:"))
let volumen = Number(prompt("Introduce el volumen de la piedra en cc"))

piedra.masa = masa
piedra.volumen = volumen

alert("La densidad es: " + piedra.densidad() + " g/cc")
