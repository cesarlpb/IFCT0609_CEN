/*

Construye una clase usando function para implementar una cuenta de efectivo. Poseerá dos propiedades: nombre del titular y saldo. Además debe tener dos métodos: ingresar() y retirar(). El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo lo reduce. No se puede sacar más de lo que exista en el saldo.

A los métodos los invocaremos con las llamadas ingresar(1000) o retirar(100) Tras ingresar el saldo será 1000 y trs retirar el saldo será 900.
*/

class Cuenta{
    
    "balance" = 0
    "nombre" = ""
    "email" = "" 

    ingresar(cantidad){
        if(cantidad >= 0){
            this.balance += cantidad
            return "Balance: " + this.balance.toFixed(2) + " €"
        }else{
            return "No se puede ingresar esa cantidad"
        }
        
    }
    retirar(cantidad){
        if(cantidad < this.balance && cantidad >=0){
            this.balance -= cantidad
            return "Balance: " + this.balance.toFixed(2) + " €"
        }else if(cantidad > this.balance){
            return "No se puede retirar una cantidad mayor al balance"
        }else{
            return "No se puede retirar esa cantidad"
        }
    }
    leerBalance(){
        return "El balance de su cuenta es: " + this.balance.toFixed(2) + " €"
    }
    editarPerfil(){
        let nombre = prompt("Ingrese o edite su nombre.\nNombre actual: " + this.nombre)
        let email = prompt("Ingrese su email:\nEmail actual: " + this.email)
        this.nombre = nombre
        this.email = email
        return "Perfil actualizado correctamente"
    }
    verPerfil(){
        console.log(`
        Nombre:\t${this.nombre} 
        Email:\t${this.email}
        `)
        return `Nombre:\t${this.nombre}\nEmail:\t${this.email}`
    }
}
