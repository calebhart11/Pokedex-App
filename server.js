// ======================dependencies
require("dotenv").config()
const express = require("express")
const methodOverride = require("method-override")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const pokemonData = require("./models/pokemon")
const pokeRouter= require("./controllers/pokedex")

// router object
const router = express.Router()
// app object 
const app = express()

//==================MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use("/static",express.static("public"))
app.use("/pokemon/", pokeRouter)

//=================ROUTES/ROUTERS
//Index
app.get("/pokemon/", (req, res) =>{
    res.render("index.ejs", {
        pokeInfo: pokemonData
    });
});






//============ app listener
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`I am listening on Port: ${PORT}`)
})