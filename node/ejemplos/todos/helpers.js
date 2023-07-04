// Funciones auxiliares para el ejemplo de todos
// Módulo para separar lógica y validaciones de URLs

const allowdMethods = ["GET", "POST", "PUT", "DELETE"];

/**
 * Método para comprobar si la url es válida
 * @param {String} base parte inicial de la url del endpoint
 * @param {String} method método permitido para el endpoint
 * @param {String} url string de url a verificar
 * @returns {Object}
 */
function validarMethodURL(base = "todos", method = "GET", url) {
  // Validar que el método es válido
  if (!allowdMethods.includes(method)) {
    throw new Error(`El método ${method} no es válido`);
  } else {
    let urlSuffix = url.split(`/${base}`)[1]; // /todos o /todos/
    let regex = /\/\d+/; // /todos/1
    let esSuffixValido = urlSuffix == "" || urlSuffix == "/" || regex.test(urlSuffix);
    // Validar que la url es válida en objeto con campos:
    return {
      esGetUrl: url.startsWith("/todos") && esSuffixValido,
      esPostUrl: url == "/todos" || url == "/todos/",
      esPutUrl: url.startsWith("/todos") && esSuffixValido,
      esDeleteUrl: url.startsWith("/todos")
    }
  }
}

module.exports = { validarMethodURL };