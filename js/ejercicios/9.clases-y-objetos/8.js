/*

Para implementar un grupo de alumnos de un curso se crea una lista de objetos alumno. Cada objeto alumno se caracteriza por: 

class Alumno

nombre del alumno       string
número de matrícula     int
calificacion - nota     float

* El objeto tiene un método para poner la calificación: calificar(nota).

Crea el script para gestionar un grupo de 4 alumnos.

Por ejemplo un alumno de nombre "Juan", número de matrícula 124 y su nota la pondríamos como alumno.calificar(5) para ponerle un 5.

*/

class Alumno{
    constructor(nombre_, matricula_){
        this.nombre = nombre_ ?? "nombre del alumno"
        // Opciones para crear una matricula con número en base a la hora o random:
        // Inicia la matricula a un valor de 5 digitos en base de la hora actual en unix time
        // this.matricula = matricula_ ?? parseInt(new Date().getTime().toString().slice(-5) + Math.random()*10) 
        this.matricula = matricula_ ?? parseInt(Math.random()*1e5) // 5 dígitos aleatorios (int)
        this.calificacion = 0.00
    }
    calificar(nota_){
        if(nota_ >= 0 && nota_ <= 10){
            this.calificacion = nota_
        }
    }
}

let alumno1 = new Alumno("Pepe", null)
alumno1.calificar(7.5)
let alumno2 = new Alumno("Juan", null)
alumno2.calificar(8)
let alumno3 = new Alumno("María", 12345)
alumno3.calificar(8.5)
let alumno4 = new Alumno("Carlos", 091345)
alumno4.calificar(6.75)