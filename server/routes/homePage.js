const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/fakeData', async(req, res) => {
    try {
        const sampleProducts = [
            {name: 'sample 1', description: "good prod", price: 33.1, image: "img1.jpg"},
            {name: 'sample 2', description: "not that good prod", price: 33.2, image: "img2.jpg"},
            {name: 'sample 3', description: "extremely well prod", price: 33.3, image: "img3.jpg"},              
        ];

        //await Product.insertMany(sampleProducts);
        await Product.insertMany(req.body);
        
        res.status(200).send('Fake Fake products created successufully!!!!');

    } catch (err) {
        res.status(500).send(err.message);
        }
    }
)

router.get('/', (req, res) => {
    res.send("quick");
})

module.exports = router;