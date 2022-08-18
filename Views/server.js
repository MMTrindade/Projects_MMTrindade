const express = require('express');
const app = express ();

app.set ("view engine", "ejs");

app.get("/", function(req, res) {

    res.render("Pages/Webpage");
})

app.use( express.static( "Views" ) );

app.get("/NossaHistoria", function(req, res) {

    res.render("Pages/NossaHistoria");
})

app.get("/Servicos", function(req, res) {

    res.render("Pages/Servicos");
})

app.get("/Contato", function(req, res) {

    res.render("Pages/Contato");
})

app.listen(8080);
console.log("Rodando")
