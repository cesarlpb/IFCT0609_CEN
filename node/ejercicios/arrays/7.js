/**
 * 
 * La función tiene como único parámetro la letra que se quiere comprobar. Debe funcionar igual con mayúsculas y con minúsculas y por supuesto usando arrays.

Solo se aceptan letras internacionales (sin acentos)

Por ejemplo esVocal('A') dirá true, mientras que esVocal("z") dirá false.

àáäãAa...
esVocal("A") true
esVocal("a") true
esVocal("à") false o no responde
 */

function esVocal(char){
    let vocales = ["a", "e", "i", "o", "u"]
    if(char.length == 1){
        for(let i = 0; i<vocales.length; i++){
            if(vocales[i] == char.toLowerCase()){
                return true
            }
        }
        return false
    }else if(char.length > 1){
        return "Solo se espera un caracter"
    }else{
        return "El char esta vacío"
    }
}