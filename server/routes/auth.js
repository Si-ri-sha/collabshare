const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const newUser = new User({ name, email, password});
    await newUser.save();
    res.status(201).json({message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({message: 'Error registering user' });
  }
});

//Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email});
    if (!user) return res.status(400).json({ message: 'Invalid credentials'});

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'invalid credentials'});

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIN : '1h' });
    res.status(200).json({ token });
 catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
});

module.exports = router;
  
    


