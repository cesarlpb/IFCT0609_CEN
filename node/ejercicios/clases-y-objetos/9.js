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
    static contador_cliente = 0
    constructor(nombre_, email_, telefono_){
        Cliente.contador_cliente += 1 // contador autoincremental en automático
        this.id = Cliente.contador_cliente
        this.nombre = nombre_ ?? ""
        this.email = email_ ?? ""
        this.telefono_ = telefono_ ?? ""
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