// ======================dependencies
require("dotenv").config()
const express = require("express")
const methodOverride = require("method-override")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const pokemonData = require("./models/pokemon")
const router= require("./controllers/pokedex.js")

// router object

// app object 
const app = express()

//==================MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use("/static",express.static("public"))
app.use("/pokemon/", router)

// //=================ROUTES/ROUTERS
// //Index
// app.get("/pokemon/", (req, res) =>{
//     res.render("index.ejs", {
//         pokeInfo: pokemonData
//     });
// });
// //new
// app.get("/pokemon/new", (req, res) => {
//     res.render("new.ejs");
// });

// //delete
// app.delete("/pokemon/:id", (req, res) => {
//     pokemonData.destroy(req.params.id)

//     res.redirect("/pokemon")
// });

// //update
// app.put("/pokemon/:id", (req, res) => {
//     pokemonData.update(req.params.id, req.body)
//     res.redirect("/pokemon")
// });

// //create
// app.post("/pokemon/new", (req, res) => {
//     req.body = req.body
//     pokemonData.push(req.body)
//     res.redirect("/pokemon")
// });
// //edit
// app.get("/pokemon/:id/edit", (req, res) => {
//     res.render("edit.ejs", {
//         pokemon: pokemonData[req.params.id],
//         index: req.params.id
//     })
// });

// //show
// app.get("/pokemon/:id", (req, res) => {
//     res.render("show.ejs", {
//         pokemon: pokemonData[req.params.id],
//         index: req.params.id
//     });
// });







//============ app listener
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`I am listening on Port: ${PORT}`)
})