const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT||5000
app.use(cors())

const data = require('./data/chefData.json')

app.get('/data',(req,res)=>{
    res.send(data)
})

app.listen(port,()=>{
    console.log(`Dragon API is running`)
})