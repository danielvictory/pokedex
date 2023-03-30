// required
const express = require("express");
require("dotenv").config();
const mO = require("method-override");

// set app
const app = express();
const PORT = process.env.PORT || 4000;

// import model
const pokemon = require("./models/pokemon.js")

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(mO("_method"))

// I for INDEX: GET home page and index
app.get("/", (req, res) => {
    res.send(`
        <h2>Gotta catch 'em all!</h2>
        <h1>Online Pokedex</h1>
        <a href="/pokemon">Open Pokedex</a>
    `)
})

app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {pokemon: pokemon})
})

app.get("/data", (req, res) => {
    res.send(pokemon[150])
})

// N for NEW: GET
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
})

// D for DELETE: DELETE


// U is for Update: PUT


// C is for Create: POST
app.post("/pokemon", (req, res) => {
    pokemon.push(req.body)
    res.redirect("/pokemon")
})

// E is for Edit: GET
app.get("/pokemon/:id/edit", (req, res) => {
    let x = req.params.id
    res.render("edit.ejs", {mon: pokemon[x]})
})

// S is for Show: GET
app.get("/pokemon/:id", (req, res) => {
    let x = req.params.id
    res.render("show.ejs", {mon: pokemon[x]})
})

// Listen
app.listen(PORT, () => {
    console.log(`Gotta catch 'em all (on PORT 3k)!`)
})