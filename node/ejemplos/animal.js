class Animal {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
    this.patas = 4;
    this.cola = true;
    this.puedeVolar = false;
    // etc...
  }
  comer() {
    console.log(`${this.nombre} esta comiendo`);
  }
  sonido() {
    console.log("Sonido de animal")
  }
}
// ejemplo de herencia: la clase Perro hereda de la clase Animal, es decir, tiene sus métodos y propiedades. Además, en este caso, el método sonido() 
class Perro extends Animal {
  constructor(nombre, especie, raza) {
    super(nombre, especie);
    this.raza = raza;
  }
  sonido() {
    console.log("Guau guau");
  }
}

class Gato {
  constructor(nombre, especie, raza) {
    this.nombre = nombre;
    this.especie = especie;
    this.raza = raza;
  }
  sonido() {
    console.log("Miau miau");
  }
}

class GatoHeredado extends Animal {
  constructor(nombre, especie, raza) {
    super(nombre, especie, patas, cola); // no necesariamente hay que pasarle todos los parámetros de la clase Animal
    this.raza = raza;
  }
  sonido() {
    console.log("Miau miau");
  }
}

let animal = new Animal().sonido(); // Sonido de animal
animal.nombre = "Pepito";
animal.comer(); // Pepito esta comiendo
animal.especie = "Perro";

let perro = new Perro().sonido(); // Guau guau
perro.nombre = "Pepito 2";
perro.comer(); // Pepito 2 esta comiendo
perro.sonido(); // Guau guau (sobreescribe el método de la clase padre)