const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

router.get('/:userId', async (req, res) => {
    try {
        const customer = await Customer.findOne(
            { userId: req.params.userId });
        if (!customer) return res.status(404).json(
            { message: 'Customer not found' });
            res.json(customer.cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/:userId/add', async (req, res) => {
    try {
        const {userId} = req.params;
        const item = req.body;
        let customer = await Customer.findOne
            ({ userId: userId });
        if (!customer) {
            customer = new Customer({ userId, cart: [] });
        }

    const existing = customer.cart.find(i => i.productId === item.productId);
    if (existing) {
      existing.quantity += item.quantity || 1;
    } else {
      customer.cart.push({ ...item, quantity: item.quantity || 1 });
    }

    await customer.save();
    res.json(customer.cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.delete('/:userId/remove/:productId', async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const customer = await Customer.findOne({ userId });
    if (!customer) return res.status(404).json({ message: 'Customer not found' });

    customer.cart = customer.cart.filter(item => item.productId.toString() !== productId);
    await customer.save();
    res.json(customer.cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;