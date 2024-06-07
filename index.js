const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT||5000
app.use(cors())

const data = require('./data/chefData.json')
const beefdata = require('./data/beefRecipes.json')
const chickendata = require('./data/chickenRecipe.json')
const vegetablesdata = require('./data/vegetableRecipe.json')
const dessertdata = require('./data/dessertrecipe.json')
const latestRecipe = require('./data/latestRecipe.json')

app.get('/data',(req,res)=>{
    res.send(data)
})

app.get('/beefrecipe',(req,res)=>{
    res.send(beefdata)
})
app.get('/chickenrecipe',(req,res)=>{
    res.send(chickendata)
})
app.get('/vegetablesrecipe',(req,res)=>{
    res.send(vegetablesdata)
})
app.get('/dessertrecipe',(req,res)=>{
    res.send(dessertdata)
})
app.get('/data/:id',(req,res)=>{
    const id = req.params.id 
    const required_id = data.find(data => data.id === id)
    res.send(required_id)
})
app.get('/latestrecipe',(req,res)=>{
    res.send(latestRecipe)
})
app.listen(port,()=>{
    console.log(`Dragon API is running`)
})