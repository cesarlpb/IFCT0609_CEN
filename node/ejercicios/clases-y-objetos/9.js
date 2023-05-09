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

let contador_cliente = 0

class Cliente{
    constructor(nombre_, email_, telefono_){
        this.id = ++contador_cliente
        this.nombre = nombre_ ?? ""
        this.email = email_ ?? ""
        this.telefono_ = telefono_ ?? ""
    }
}
class EstadoFactura{
    constructor(){
        this.pagado = "PAGADO"
        this.pendiente = "PENDIENTE"
    }
}
class Factura {
    constructor(idCliente_, total_, estado_){
        this.idCliente = idCliente_ ?? 0 // el id 0 implica que la factura no está asignada por el momento
        if(total_ >= 0 && isFinite(total_) && !isNaN(total_)){
            this.total = parseFloat(total_.toFixed(2)) // es float con solo dos decimales
        }else{
            this.total = 0.00
        }
        this.estado = estado_ ?? new EstadoFactura().pendiente

    }
    cobrar(){
        let estadoFactura = new EstadoFactura()
        if(this.estado == estadoFactura.pendiente){
            this.estado = estadoFactura.pagado
        }
        return this.estado
    }
    imprimir(){
        return new Factura(this.idCliente, this.total, this.estado)
    }
}