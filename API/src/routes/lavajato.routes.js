const express = require('express');
const router = express.Router();
const Lavajato = require('../models/lavajato');

router.get('/home', async (req, res) => {
    try {
        let lavajato = await Lavajato.find({})

        for(let lavajato of lavajato) {
            
        }
    }
    catch {
        res.json({ error: true, message: err.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const lavajato = await Lavajato.find({})
        res.json({ error: false, lavajato})
    }
    catch (err) {
        res.json({ error: true, message: err.message })
    }
})

module.exports = router