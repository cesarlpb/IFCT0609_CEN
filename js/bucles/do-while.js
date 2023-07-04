// Do while

// Nos garantiza una ejecución

// Contar del 1 al 10
let i = 0
while(i<10){
    console.log(i)
    i++
}
// i = 10

// Garantiza una ejecución
do {
    console.log("La i vale " + i + " desde do-while")
    i++
  }
  while (i<=12); 
// i = 13

// No se ejecuta:
while(i<15){
    console.log("La i vale " + i + " desde while")
    i++
}

console.log("i:", i)