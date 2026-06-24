require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors') // require cross origin resources sharing 
const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost/e1')

// this will now allow security access for your frontend running on port 5173
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

const cartRoutes = require('./routes/cartRoutes');
app.use('/cart', cartRoutes);

mongoose.connect(process.env.DATABASE_URL_ATLAS);
const db = mongoose.connection
db.on('error', (error) => console.error('There is an error connecting to DB:', error));
db.once('open', ()=> {console.log('Has JUst been Connected to database'); 
    console.log('Connected to DB:', mongoose.connection.name);})



const home = require('./routes/homePage')
app.use('/homePage', home)

const authRoutes = require('./routes/auth');
app.use('/reg', authRoutes);

app.listen(3000, () => console.log('Server Started'))