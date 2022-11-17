const  Router  = require("express");
const express = require("express")
const pokemonData = require("../models/pokemon")

// router object
const router = express.Router()
// app object 
const app = express()


//=================ROUTES/ROUTERS
//Index
router.get("/pokemon/", (req, res) =>{
    res.render("index.ejs", {
        pokeInfo: pokemonData
    });
});
//show
router.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {
        pokemon: pokemonData.getOne(req.params.id),
        index: req.params.id
    });
});

module.exports = router