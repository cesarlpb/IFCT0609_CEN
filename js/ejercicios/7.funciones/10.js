/**
 * 
 * Escibe una función que devuelva el siglo al que correponde un año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200....
 * 
 * Por ejemplo si le pido siglo(1910) me dirá siglo 20
 * 
 * del 1 al 99  ->  1
 * 100 - 199    ->  2
 * 200 - 299    ->  3
 * ...
 * 1900 - 1999 -> 20
 * 2000 - 2099 -> 21
 * etc... 
 * 
 */

function calcularSigloPositivo(año){
    if(año < 0 || !isFinite(año)){
        return NaN
    }
    return parseInt(año / 100) + 1
}

// En formato a.C antes del siglo 1 y d.C después
function calcularSigloPositivoYNegativo(año){
    if(!isFinite(año)){
        return NaN
    }
    if( año>=0 ){
        return parseInt(año / 100) + 1 + " d.C."
    }else{
        return parseInt(Math.abs(año) / 100) + 1 + " a.C."
    }
}