/*

Un artículo tiene un nombre, un proveedor y un precio. Y un proveedor tiene un nombre, email y telefono. 

Se pide definir una clase (Proveedor) para implementar el objeto proveedor y otra (Articulo) para el obejto artículo. Este objeto tiene los siguientes atributos o propiedades:

class Articulo

proveedor: un objeto proveedor -> class Proveedor
nombre: una cadena -> string
precio: un número  -> float

Y métodos:

* telefono(): devuelve un objeto con el nombre y telefono del proveedor

Por su parte el objeto proveedor tiene como propiedades

class Proveedor

nombre: cadena de texto -> string
email: un email         -> string
teléfono: una cadena de dígitos -> string // código de país, regional, puede empezar por +, etc... 

Puedes implementarlo con create, function o con class

---

Por ejemplo podríamos tener un artículo monitor que vale 200€ y el proveedor es TecnoShop, con email: tcn@tecno.com y telefono 1234567.

Si hacemos articulo.telefono() nos dará  nombre y teléfono del proveedor: Teléfono de TenoShop es 1234567
*/

class Proveedor{
    constructor(nombre_, email_, telefono_){
        // Usamos el operador || (o lógico) para inicializar las propiedades a un valor que no sea undefined -> si no recibimos nada, por defecto son string vacío
        
        // este ternario comprueba si el dato que nos pasan es null o undefined y pone un valor por defecto:
        // nombre_ = nombre_ == null || nombre_ == 'undefined' ? "TecnoShop" : nombre_
        // el operador nullish coalescence: ?? hace lo mismo en este caso (para null o undefined):
        this.nombre = nombre_ ?? "Tecnoshop"
        this.email = email_ ?? "tcn@tecno.com"
        this.telefono = telefono_ ?? "123456789"
    }
}

class Articulo{
    constructor(proveedor_, nombre_, precio_){
        // no hemos validado que recibimos Proveedor
        if(proveedor_ instanceof Proveedor){
            // proveedor_ es una instancia de la clase Proveedor
            this.proveedor = proveedor_
        }else{
            // asigno proveedor por defecto
            this.proveedor = new Proveedor("TecnoShop", "tcn@tecno.com", "123456789")
        }
        this.nombre = typeof(nombre_) == 'string' ? nombre_ : ""
        this.precio = !isNaN(Number(precio_)) ? Number(precio_) : 0.00
    }
    telefono(){
        return this.proveedor // objeto de tipo Proveedor
    }
}