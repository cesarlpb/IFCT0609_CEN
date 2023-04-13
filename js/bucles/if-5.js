//5. Tenemos un objeto coche con tres propiedades: brand (marca es un string), year (año es un string) y color (string). Vamos a verificar que para un objeto de este tipo los campos sean de los tipos correctos y no estén en blanco.

// variables globales: coche y coche2

// correcto:
let coche = {
    brand: "Ford",
    year: "2010",
    color: "marrón"
}
// incorrecto:
let coche2 = {
    brand: null,
    year: "2010",
    color: undefined
}

function comprobarCoche(obj){
    let mensaje5Local = "" // variable local
    
    // Comprobamos brand
    if (obj.brand && typeof(obj.brand) == 'string'){
        mensaje5Local = "brand correcto"
    } else {
        mensaje5Local = "brand incorrecto"
    }

    // Comprobamos year
    if (obj.year && typeof(obj.year) == 'string'){
        mensaje5Local += "\nyear correcto"
    } else {
        mensaje5Local += "\nyear incorrecto"
    }

    // Comprobamos color
    if (obj.color && typeof(obj.color) == 'string'){
        mensaje5Local += "\ncolor correcto"
    } else {
        mensaje5Local += "\ncolor incorrecto"
    }
    return mensaje5Local
    console.log("No existo.")
}

const mensaje5Global = comprobarCoche(coche) // variable global
console.log(mensaje5Global) 

const mensaje5Global2 = comprobarCoche(coche2) // otra variable global 
console.log(mensaje5Global2) 