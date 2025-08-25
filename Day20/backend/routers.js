import User from "./module.js";
import express from 'express';
let thisthatthere = express.Router();

thisthatthere.get('/', async (req, res) => {
    try {
        let users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

thisthatthere.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export { thisthatthere };
