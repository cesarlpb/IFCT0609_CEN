//5. Tenemos un objeto coche con tres propiedades: brand (marca es un string), year (año es un string) y color (string). Vamos a verificar que para un objeto de este tipo los campos sean de los tipos correctos y no estén en blanco.

// correcto:
let coche = {
    brand: "Ford",
    year: "2010",
    color: "marrón"
}
// incorrecto:
let coche2 = {
    brand: null,
    year: 2010,
    color: undefined
}