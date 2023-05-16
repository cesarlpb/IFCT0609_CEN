/*
En este input no se deben aceptar valores que sean numéricos. Todo lo que esté entre 0 y 9 no se deben aceptar. Diseña un manejador de eventos para evitar que en el control se anoten números.
*/

let input = document.getElementById("letras");
input.addEventListener("input", (event) => {
    let valor = event.target.value; // string
    // Vemos los valores:
    console.log("valor introducido:", valor);
    let caracteres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "_", "$", "ñ"];
    for(let i = 0; i<valor.length; i++){
        let char = valor[i]
        
        if(caracteres.includes(char)){
            let indice = caracteres.indexOf(char)
            valor = valor.replace(caracteres[indice], "")
            // Observación: cuando son dígitos -> se puede usar el mismo dígito para hacer el replace porque cada dígito coincide con su propio valor e índice en el array.
            
            // -> En el caso general, hay que usar índice <-
        }
    }
    input.value = valor // sin dígitos
    // Hemos eliminado los digitos:
    console.log("valor modificado:", valor)
});