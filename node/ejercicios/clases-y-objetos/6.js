/**
 * 
 * Crea una clase que lamaremos Bus. Sus atributos serán:

* capacidad: número máximo de pasajeros             -> Number, int -> const
* pasajeros: número de pasajeros (inicialmente 0)   -> Number, int -> inicia a 0
* conductor: objeto conductor.                        -> Conductor es objeto de clase Conductor

Sus métodos (de Bus)

* subir(pasajeros): aumenta el numero de pasajeros      -> admite positivos
* bajar(pasajeros): disminuye el número de pasajeros    -> admite positivos y no pueden bajar más de los pasajeros actuales
* conductor: asigna un objeto conductor.                -> objeto Conductor

El objeto conductor es de una clase (Conductor) cuyos atributos son:

* nombre: nombre del conductor                      -> se pasa el param en creación del objeto
* licencia: un número que identifica al condcutor.  -> Number, int o podría ser String
Al crear el objeto se asigna también el conductor   -> no inicia vacío

Restricciones para que tenga sentido el ejercicio:
No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.

 */

class Conductor{
  constructor(nombre_ = "Juan", licencia_ = 12345){
    this.nombre = nombre_
    this.licencia = licencia_
  }
  toString(){
    return this.nombre + ", " + this.licencia
    // Si queremos retornar el objeto "string-ificado":
    // return JSON.stringify(new Conductor(this.nombre, this.licencia))
  }
}
class Bus{
  constructor(capacidad_ = 40, pasajeros_ = 0, conductor_ = new Conductor()){
    this.capacidad = capacidad_ 
    console.log(pasajeros_, this.capacidad)
    if(pasajeros_ > this.capacidad){
      pasajeros_ = this.capacidad
    }
    this.pasajeros = pasajeros_
    this.conductor = conductor_
  }
  subir(pasajeros_){
    
    let pasajerosQueSuben = 0
    let maximoPuedenSubir = this.capacidad - this.pasajeros

    if(isNaN(pasajeros_) && !isFinite(pasajeros_)){
      // Este if nos pasa casos no válidos a un caso neutro: sumar cero
      return 0
    }
    // No hemos verificado que no sea NaN
    if(pasajeros_ <= maximoPuedenSubir && pasajeros_ > 0){
      pasajerosQueSuben = pasajeros_
      this.pasajeros += pasajerosQueSuben
      return pasajerosQueSuben
    }else if(pasajeros_ > maximoPuedenSubir){
      pasajerosQueSuben = maximoPuedenSubir
      this.pasajeros += pasajerosQueSuben
      return pasajerosQueSuben
    }else{
      // Este es el caso de números negativos
      return 0
    }
  }
  bajar(pasajeros_){
    let pasajerosQueBajan = 0
    let maximoPuedenBajar = this.pasajeros

    if(isNaN(pasajeros_) && !isFinite(pasajeros_)){
      // Retornamos cero para que el resto del código no se ejecute
      // ya que no interesa que se entre en los bucles (por valor incorrecto)
      return 0
    }

    if(pasajeros_ <= maximoPuedenBajar && pasajeros_ > 0){
      pasajerosQueBajan = pasajeros_
      this.pasajeros -= pasajerosQueBajan
      return pasajerosQueBajan
    }else if(pasajeros_ > maximoPuedenBajar){
      pasajerosQueBajan = maximoPuedenBajar
      this.pasajeros -= pasajerosQueBajan
      return pasajerosQueBajan
    }else{
      // Este es el caso de números negativos
      return 0
    }

  }
  cambiarConductor(nuevoConductor_){
    let esConductor = nuevoConductor_ instanceof Conductor // true si es instancia de clase Conductor y false si no lo es
    if(nuevoConductor_ && esConductor){
      this.conductor = nuevoConductor_ // solo llegamos hasta aqui si el conductor recibido es correcto
      console.log("Nuevo conductor añadido")
    }
    return esConductor
  }
}