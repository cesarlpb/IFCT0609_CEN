// método o propiedad estática -> se puede llamar sin instanciar nuevo objeto de la clase
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  pitar() {
    console.log("Pip!!!")
  }
  static pitar2() {
    console.log("Pip 2!!!")
  }
}