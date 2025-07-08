require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/e1')

//mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('There is ERROR!!!!! ', (error) => console.error(error))
db.once('open', ()=> {console.log('Has JUst been Connected to database'); 
    console.log('Connected to DB:', mongoose.connection.name);})


app.use(express.json())

const home = require('./routes/homePage')
app.use('/homePage', home)

app.listen(3000, () => console.log('Server Started'))