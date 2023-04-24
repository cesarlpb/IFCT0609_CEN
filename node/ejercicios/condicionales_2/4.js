/**
 * En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

 * Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.
 * 
 * "carne" o "pescado" o "verdura"
 * 
 * "carne"      => bebida = "vino tinto"
 * "pescado"    => bebida = "vino blanco"
 * "verdura"    => bebida = "agua"
 * 
 * Por ejemplo he pedido carne, el ejercicio mostrará "¿Desea beber vino tinto?" -> Sí o No
 * 
 * "pollo"      => se le vuelve a preguntar // while
 * "verdura"    => "agua"
 */

// Método 1: if

let eleccionMenu = "" 
let aceptaBebida = false
const opcionesMenu = ["carne", "pescado", "verdura"]
const opcionesBebidas = ["vino tinto", "vino blanco", "agua"]

/* Lógica del while:
 * opcionesMenu.includes(eleccionMenu) ==> true cuando eleccionMenu está en array opcionesMenu == carne, pescado o verdura
 * !true = false ==> sales del while
 * !false =  true ==> sigues en el bucle => sigue preguntando
 */
while( !opcionesMenu.includes(eleccionMenu) ){
    eleccionMenu = prompt("Elija una de las opciones el menú:\ncarne\npescado\nverdura")
    eleccionMenu = eleccionMenu.toLowerCase()
}

if( eleccionMenu == opcionesMenu[0] ){
    aceptaBebida = confirm(`¿Quieres ${opcionesBebidas[0]}?`)
}
if( eleccionMenu == opcionesMenu[1] ){
    aceptaBebida = confirm(`¿Quieres ${opcionesBebidas[1]}?`)
}
if( eleccionMenu == opcionesMenu[2] ) {
    aceptaBebida = confirm(`¿Quieres ${opcionesBebidas[2]}?`)
}

alert(aceptaBebida ? "Ha aceptado la bebida" : "No ha aceptado la bebida")

// Sería posible pasar lo anterior a 1 o 2 línea usando solo el índice del array
/*
// Si queremos reducir esos bucles if para usar índice:

let indice = opcionesMenu.indexOf(eleccionMenu)
aceptaBebida = confirm(`¿Quieres ${opcionesBebidas[indice]}?`)

// En principio no sería necesario verificar que no esté en la lista
// porque ya se hizo eso en el while

// indexOf devuelve -1 si no encuentra el elemento en la lista o array
*/