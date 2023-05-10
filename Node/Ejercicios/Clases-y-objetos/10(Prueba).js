//Creamos prop y método para devolver idCliente

/**
 * 
 * En esta ocasión tienes una lista de clientes, cada cliente es un objeto con atributos: 
 * 
 * class Cliente
 * nombre   string
 * email    string
 * telefono string

Se quiere crear una clase Factura para gestionar las facturas emitidas a los clientes. Las propiedades de esta clase son

class Factura

idCliente: número de cliente (su lugar en la lista de clientes) -> int, índice de un array
total: número con el importe total de la factura -> float, toFixed(2)
estado: pagada o pendiente -> string // más opciones

Los métodos serán:

cobrar(): pone el estado en pagada -> cambia estado a pendiente/pagada
imprimir(): imprime los datos de la factura -> console.log o alert, etc.

Para probar crea tres clientes y al menos una factura.
 */

// let contador_cliente = 0

class Cliente{
    // # -> hace privada la propiedad
    // dentro de la clase Cliente sí se puede acceder al dato
    static #idCliente = 0
    constructor(nombre_, email_, telefono_){
        Cliente.#idCliente += 1 // contador autoincremental en automático
        this.id = Cliente.#idCliente
        this.nombre = nombre_ ?? ""
        this.email = email_ ?? ""
        this.telefono_ = telefono_ ?? ""
    }
    // Creamos un método que devuelve el dato actual en #idCliente
    static idCliente(){
        return Cliente.#idCliente
    }
}
class EstadoFactura{
    // static para acceder a estos datos sin instanciar objeto de la clase
    // Symbol para diferenciar que los casos NUNCA pueden ser comparados como iguales
    static pagado = Symbol("PAGADO")
    static pendiente = Symbol("PENDIENTE")
    static noEmitida = Symbol("NO EMITIDA")
    static vencido = Symbol("VENCIDO")
    static otro = Symbol()
    // etc
}
class Factura {
    constructor(idCliente_, total_, estado_){
        this.idCliente = idCliente_ ?? 0 // el id 0 implica que la factura no está asignada por el momento
        if(total_ >= 0 && isFinite(total_) && !isNaN(total_)){
            this.total = parseFloat(total_.toFixed(2)) // es float con solo dos decimales
        }else{
            this.total = 0.00
        }
        this.estado = estado_ ?? EstadoFactura.pendiente

    }
    cobrar(){
        if(this.estado == EstadoFactura.pendiente){
            this.estado = EstadoFactura.pagado
        }
        return this.estado
    }
    imprimir(){
        return new Factura(this.idCliente, this.total, this.estado)
    }
}

// Todo:
// Crear 5 clientes
// Emitir una factura a cada uno
let cliente1 = new Cliente("Pepe Martínez 1", "pepe@martinez.com", "+34 456 987 321")
let factura1 = new Factura(Cliente.idCliente(), 100.00, EstadoFactura.pendiente) // id -> 1
let cliente2 = new Cliente("Pepe Martínez 2", "pepe@martinez.com", "+34 456 987 321")
let factura2 = new Factura(Cliente.idCliente(), 100.00, EstadoFactura.pendiente) // id -> 1
let cliente3 = new Cliente("Pepe Martínez 3", "pepe@martinez.com", "+34 456 987 321")
let factura3 = new Factura(Cliente.idCliente(), 100.00, EstadoFactura.pendiente) // id -> 1
let cliente4 = new Cliente("Pepe Martínez 4", "pepe@martinez.com", "+34 456 987 321")
let factura4 = new Factura(Cliente.idCliente(), 100.00, EstadoFactura.pendiente) // id -> 1
let cliente5 = new Cliente("Pepe Martínez 5", "pepe@martinez.com", "+34 456 987 321")
let factura5 = new Factura(Cliente.idCliente(), 100.00, EstadoFactura.pendiente) // id -> 1


// Crear 5 clientes nuevos
let Cliente1 = new Cliente ("Laura Garcia", "Laura@hotmail.com", "(555-77-99");
let Cliente2 = new Cliente ("Juan Lopez", "juan@hotmail.com", "555-66-88");
let Cliente3 = new Cliente ("Ana Madrid", "ana@madrid.com", "666-22-11")
let Cliente4 = new Cliente ("")
let Cliente5 = new Cliente ()

// Crear 5 Clientes con bucle "for"

let Clientes = [];

 for (let i = 1 ; i <= 5 ; i ++ ) {
    let cliente = new Cliente (`Cliente ${i}`, `email ${i}`, `telefono ${i}`);
    cliente.push(cliente);
     
    // Emitir factura
    const factura = new Factura (cliente.id, Math.random() * 1000, EstadoFactura.pendiente);
    console.log ('Factura ${factura.imprimir()} emitida para {$}cliente.nombre');
 }