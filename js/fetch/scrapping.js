// Scrapping con JS
// Fuente: https://stackoverflow.com/questions/36631762/returning-html-with-fetch
// Ejemplo de scrapping con fetch()
fetch('https://www.w3schools.com/js/default.asp')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM 
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;

        // Documento completo de HTML
        console.log(doc);
        // Elemento con id main:
        var elementoMain = doc.querySelector('#main');
        console.log(elementoMain)
        var h2 = doc.querySelectorAll('h2'); // array
        // Para sacar un elemento de la lista:
        console.log(h2[0])
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });