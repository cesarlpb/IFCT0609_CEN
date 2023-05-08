/*
Crea una clase Ficha, con su constructor, que se usará para almacenar el número de kilómetros recorridos por una persona en cada sesión de ejercicios. Las propiedades de la clase serán

nombre      ->  string, no debería estar vacío
sesiones    ->  Number[], float, >0
numSesiones ->  Number, int, >0

El nombre es el de la persona, en los sesiones se almacenará el numero de kilometros recorridos en cada sesión y numsesiones contien el númeor de sesiones anotadas.

Tiene dos métodos:
* anotar: anota los kilómetros
* media: calcula la media de kilómetros recorridos

---

* Cada persona tendrá su ficha construída con esta clase.
* Si ejecuto anotar(8), anotar(10), anotar(6), en las sesiones se anotarán 8, 10, 6.
* Si escribo media() devolverá 8 ((8+10+6)/3).
* En la solución se usa el camino má primitivo posible: arrays y bucles básicos
*/

class Ficha{
    
    constructor(nombre_ = "", sesiones_ = [], numSesiones_ = 0){
        // Convenio: añadimos _ al final de los params
        // para SABER que son params
        this.nombre = nombre_
        this.sesiones = sesiones_
        this.numSesiones = numSesiones_
        // Nota: esto SIEMPRE es -> this.propiedad = parámetro (que recibimos/asignamos al crear el objeto)
    }
    anotar(kilometros){
        if(kilometros > 0 && !isNaN(kilometros)){
            this.sesiones.push(kilometros) // usamos push para añadir el dato al array en el siguiente índice SIN saltarnos índices
            console.log(`${kilometros} km anotados`)
        }else{
            alert("El recorrido en kilómetros no puede ser negativo y debe ser numérico")
        }
    }
    media(){
        let arr = this.sesiones // array con los kilómetros
        let suma = 0
        if(arr.length){
            for(let i = 0; i < arr.length; i++){
                suma += arr[i]
            }
            let media = "Media: " + (suma / arr.length).toFixed(2)
            alert(media)
            return parseFloat((suma / arr.length).toFixed(2)) // devuelve float
        }
    }
}

