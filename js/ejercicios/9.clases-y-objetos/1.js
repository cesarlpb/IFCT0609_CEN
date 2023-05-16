/*
Para comenzar vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. 

El curso contiene tres materias: Ingles, programación y HTM, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. 

El script imprimirá el nombre y la media de sus calificaciones

*/

let notasAlumno = {
    "nombre" : "Pepe",
    "ingles" : 7.5,
    "programacion" : 8,
    "html" : 9
}
let notaMedia = (notasAlumno.ingles + notasAlumno.programacion + notasAlumno.html) / 3
let mensaje = `Alumno: ${notasAlumno.nombre}
Nota media: ${notaMedia.toFixed(1)}
`
console.log(mensaje)