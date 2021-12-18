const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "TEST route of advance express of vercel"});
});

router.get('/main', (req, res) => {
    res.json({message: "TEST main route of advance express of vercel"});
});

module.exports = router;