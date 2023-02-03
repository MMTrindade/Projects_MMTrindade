const express = require('express');
const app = express ();

app.set ("view engine", "ejs");

app.get("/", function(req, res) {

    res.render("Pages/Home");
})

app.use( express.static( "Views" ) );

app.get("/Sobre", function(req, res) {

    res.render("Pages/Sobre");
})

app.get("/Servicos", function(req, res) {

    res.render("Pages/Servicos");
})

app.get("/Contato", function(req, res) {

    res.render("Pages/Webpage");
})


app.listen(8080);
console.log("Rodando")
