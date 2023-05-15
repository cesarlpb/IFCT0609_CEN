/*
Tenemos dos listas de asistentes a dos cursos: HTML y CSS. Queremos obtener una lsita de los asistentes a ambos cursos. La lista estará ordenada.

Por ejemplo 
html = ['Pedro','Juan','Ana'], y 
css=['Luis','Juan', 'Ana','María'] 
la lista obtenida sería ['Juan', 'Ana'].
*/

let html = ['Pedro','Juan','Ana']
let css = ['Luis','Juan', 'Ana','María']

// TODO: iterar el array más pequeño para acabar antes. Ahora siempre busca en el curso1

function buscarCoincidencias(curso1, curso2){
    let coincidencias = []
    estaEnCurso2 = false
    for(let i = 0; i < curso1.length; i++){
        let persona = curso1[i] // persona en curso1
        estaEnCurso2 = curso2.includes(persona) // true o false
        if(estaEnCurso2){
            // Añadimos persona confirmada en curso2 al array que devolvemos
            coincidencias.push(persona)
        }
    }
    return coincidencias.sort()
}