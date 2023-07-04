class Nota{
  static notas = [];
  constructor(id, titulo, texto, prioridad, fecha){
    this.id = id;
    this.titulo = titulo;
    this.texto = texto;
    this.prioridad = prioridad;
    this.fecha = fecha;
  }
  static seed(){
    Nota.notas.push(new Nota(1, "Comprar pan", "Comprar pan en el supermercado", "", "2023-06-23"))
    Nota.notas.push(new Nota(2, "Comprar leche", "Comprar leche en el supermercado", "normal", "2023-06-23"))
    Nota.notas.push(new Nota(3, "Comprar huevos", "Comprar huevos en el supermercado", "urgente", "2023-10-22"))
  }
}
// Exportamos el módulo
exports.Nota = Nota;
exports.notas = Nota.notas;