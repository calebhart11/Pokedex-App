
const express = require("express")
const pokemonData = require("../models/pokemon")

// router object
const router = express.Router()
// app object 
const app = express()


//=================ROUTES/ROUTERS
//Index
router.get("/", (req, res) =>{
    res.render("index.ejs", {
        pokeInfo: pokemonData
    });
    res.redirect("/pokemon")
});

//new
router.get("/new", (req, res) => {
    res.render("new.ejs");
});

//delete
router.delete("/:id", (req, res) => {                          // writing a function that deletes a soda when accessing the form on show.ejs
        pokemonData.splice(req.params.id, 1)
    res.redirect("/pokemon")
});

//update
router.put("/:id", (req, res) => {
    req.body = {
        ...req.body,
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed

        }

    }
    pokemonData[req.params.id] = req.body
    res.redirect("/pokemon")
});

//create
router.post("/new", (req, res) => {
    req.body = {
        ...req.body,
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed
        }
    }
    pokemonData.push(req.body),
     function(pokemon) {                            
        pokemonData.push(pokemon)
    }
    console.log(req.body)
    res.redirect("/pokemon")
});
//edit
router.get("/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        pokemon: pokemonData[req.params.id],
        index: req.params.id
    })
});

//show
router.get("/:id", (req, res) => {
    res.render("show.ejs", {
        pokemon: pokemonData[req.params.id],
        index: req.params.id,
        getOne: function(index) {                                    // writing a function that will gather one piece of the data by its index when invoked
            return pokemonData[index]
        },
    });
});
module.exports = router