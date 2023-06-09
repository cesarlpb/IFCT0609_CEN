/*

Un servicio de atención al ciente tiene establecido turnos semanales para sus empleados de manera que cada día de la semana se encarga del servicio  una persona: lunes - María, Martes - Luis, Miércoles - Antonia, Jueves - Pedro, Viernes - Marisa.

Usa un array para almacenar los datos del servicio. En este array cada elemento será un par día : nombre.

Crea una función que responda con el nombre de la persona encargada del servicio sabiendo el día. Si el día no existe deberá decir que no hay servicio. Los nombres de los días deben ir en minúsculas.

Si le pido servicio('Lunes') me debería decir "Este día se encarga María" y si le pido servico(Miércoles") me daría Antonia.

*/

function servicio(dia){
    let cuadrante = [
        ["lunes", "María"],
        ["martes", "Luis"],
        ["miércoles", "Antonia"],
        ["jueves", "Pedro"],
        ["viernes", "Marisa"]
    ]
    for(let i = 0; i<cuadrante.length; i++){
        let arr = cuadrante[i] 
        if(dia.toLowerCase() == arr[0]){
            return arr[1]
        }
    }
    return "Día sin servicio"
}