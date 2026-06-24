const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

const verifyTok = require('../middleware/authMiddleware');

router.get('/', verifyTok, async (req, res) => {
    
    try {
        const authentedUser = req.user.userID;
        const customer = await Customer.findOne({ userId: authentedUser});

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        return res.json(customer.cart);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    /*
    try {
        const customer = await Customer.findOne(
            { userId: req.params.userId });
        if (!customer) 
            return res.status(404).json({ message: 'Customer not found' });
        else 
            return res.json(customer.cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }*/
});

router.post('/add', verifyTok, async (req, res) => {
    try {
        const authentedUser = req.user.userID;
        const item = req.body;
        const customer = await Customer.findOne({ userId: authentedUser});

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        /* 
        const {userId} = req.params;
        const item = req.body;
        let customer = await Customer.findOne
            ({ userId: userId });
        if (!customer) {
            customer = new Customer({ userId, cart: [] });
        }*/

    const existing = customer.cart.find(i => i.productId === Number(item.productId));
    if (existing) {
      existing.quantity += item.quantity || 1;
    } else {
      customer.cart.push({ ...item, quantity: item.quantity || 1 });
    }

    await customer.save();
        return res.json(customer.cart);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


router.delete('/remove/:productId', verifyTok, async (req, res) => {
  try {
    /*
    const { userId, productId } = req.params;
    */
    const {productId} = req.params;
    const authentedUser = req.user.userID;
    const customer = await Customer.findOne({ userId: authentedUser});
    
    if (!customer) return res.status(404).json({ message: 'Customer not found' });

    customer.cart = customer.cart.filter(item => item.productId.toString() !== productId.toString());
    
    await customer.save();
    return res.json(customer.cart);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



module.exports = router;