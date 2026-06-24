const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


router.post('/register', async (req, res) => {
    const { username, email, password } = req.body || {};

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'username, email and password are required' });
    }

    try {
        // check for existing user by userId or email
        const exists = await Customer.findOne({ $or: [{ userId: username }, 
            { email }] });
        if (exists) {
            return res.status(409).json({ error: 'User with that username or email already exists' });
        }

        const saltRounds = 10;
        const hashPass = await bcrypt.hash(password, saltRounds);

        const customer = new Customer({
            userId: username,
            name: username,
            email,
            passwordHash: hashPass,
            cart: []
        });

        await customer.save();

        return res.status(201).json({ message: 'User registered', userId: customer.userId });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


router.post('/login', async(req, res) => {
    const {userid, email, password} = req.body || {};

    if ((!userid && !email) || !password) {
        return res.status(400).json({ error: 'Please provide (userid or email) and a password' });
    }

    try {

    const querycondition = [];
    if (userid) querycondition.push({userId: userid});
    if (email) querycondition.push({email: email});

    const customer = await Customer.findOne({$or: querycondition});
    if(!customer) {
        return res.status(401).json({error: 'Invalid credentials'});
    }

    // if customer is found, check for the password entered by customer
    const passwordMatching = await bcrypt.compare(password, customer.passwordHash);
    if(!passwordMatching) {
        return res.status(401).json({error: 'Password mismatch'});
    }

    // generate the token here for the customer user
    const tokenPayload = {
        userId: customer.userId,
        email: customer.email
    };

    const token = jwt.sign(
        tokenPayload,
        process.env.JWT_SECRET || 'some default secret chosen by admin',
        { expiresIn: '1h'}
    );


    // this is passing back to the client, the client will then 
    // retrieive the token and store in the local storage/ or maybe cookie
    return res.status(200).json({
        message: 'Loggin successful',
        token,
        user: {
            username: customer.userId,
            email: customer.email
        }
    });
    
    } catch (error) {
        return res.status(500).json({error: error.message});
    };
});

module.exports = router;

