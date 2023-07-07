// HTML
function generarLorem() {
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec enim vel metus bibendum feugiat. Aliquam id consequat urna. Nullam eget libero risus. Etiam sodales ligula quis magna eleifend lobortis. Duis eget massa in justo ultrices varius a a velit. Sed nec turpis diam. Praesent id magna ut ipsum faucibus interdum at at sem. In in tellus velit. Ut non dui euismod, volutpat justo nec, bibendum leo. Pellentesque ultrices odio at ipsum ultricies, vel malesuada mauris ullamcorper. Sed blandit eget nunc id viverra. Nunc placerat enim non arcu pretium, eu accumsan mi eleifend.";
  
    let palabras = lorem.split(" ");
    let resultado = "";
  
    for (let i = 0; i < 20; i++) {
      resultado += palabras[i] + " ";
    }
  
    return resultado;
  }
  
  