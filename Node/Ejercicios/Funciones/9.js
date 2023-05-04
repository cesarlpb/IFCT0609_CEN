/**
 * 
 * En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bine, el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula.
 * 
 * Por ejemplo si pido miCalificacion(5) la función me dirá tu calificación es Aprobado
 * 
 * 0 - 4 -> suspenso
 * 5 - 7 -> aprobado
 * 7 - 9 -> notable
 * 9 - 10 -> sobresaliente
 */

function convertirNotas(num){
    if(num < 0 || !isFinite(num)){
        alert("El número no es válido")
    }else{
        switch(parseInt(num)){
            case 0:
            case 1:
            case 2: 
            case 4:
                alert("suspenso")
                break;
            case 5:
            case 6:
                alert("aprobado")
                break;
            case 7:
            case 8:
                alert("notable")
                break;
            case 9:
            case 10:
                alert("sobresaliente")
                break;
            default:
                alert("nivel boss")
        }
    }
}