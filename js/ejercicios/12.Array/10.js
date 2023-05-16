/*
Tienes una lista de objetos con los nombres de los miembros de una familia. Este script debe devolver dos objetos con el nombre y edad del miembro de mayor edad y del de menor edad.

Por ejemplo si la familia está compeusta por Juan: 34, Pepa: 40, Ana: 12 y Luis: 14, lel script dirá "Miembro mayor Pepa de 40  años y Miembro más joven Ana 12 años.

*/

class Miembro{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}
let miembros = [
    new Miembro('Juan', 34),
    new Miembro('Pepa', 40),
    new Miembro('Ana', 12),
    new Miembro('Luis', 14)
]

function encontrarMiembros(miembros){
    let menor = Infinity
    let mayor = -Infinity
    let miembroMenor, miembroMayor;
    for(let i = 0; i<miembros.length; i++){
        let miembro = miembros[i]
        if(miembro.edad < menor){
            menor = miembro.edad // El valor que uso de pivote lo actualizo al valor de la edad del miembro actual que estoy iterando. Entonces, en sucesivas iteraciones, este valor solo se actualiza cuando sea un valor menor
            miembroMenor = new Miembro(miembro.nombre, miembro.edad) // asigno el objeto a esta variable
        }
        if(miembro.edad > mayor){
            mayor = miembro.edad // solo se actualiza cuando sea un valor mayor
            miembroMayor = new Miembro(miembro.nombre, miembro.edad)
        }
    }
    
    let resultado = `
    Miembro mayor ${miembroMayor.nombre} de ${miembroMayor.edad} años y
    Miembro más joven ${miembroMenor.nombre} de ${miembroMenor.edad} años`
    return resultado
}