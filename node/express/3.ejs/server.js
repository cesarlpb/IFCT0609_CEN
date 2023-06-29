const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  const mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012, alt: "Sammy", url: "https://doimages.nyc3.digitaloceanspaces.com/sammy-normal.png"},
    { name: 'Tux, the penguin, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque! ', organization: "Linux", birth_year: 1996, alt: "Tux", url: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tux.jpg"},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013, alt: "Docker", url: "https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2014/05/homepage-docker-logo.png"}
  ];
  const tagline = "No programming concept is complete without a cute animal mascot.";
  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Servidor en ejecución en http://localhost:8080/');