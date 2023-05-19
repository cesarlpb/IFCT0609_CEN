import preguntar from ('./prompt');

preguntar('Ingrese el primer número: ')
  .then((num1) => {
    return preguntar('Ingrese el segundo número: ')
      .then((num2) => {
        return preguntar('Ingrese el tercer número: ')
          .then((num3) => {
            const suma = Number(num1) + Number(num2) + Number(num3);
            const promedio = suma / 3;
            console.log(`La suma de los números es: ${suma}`);
            console.log(`El promedio de los números es: ${promedio}`);
          });
      });
  });