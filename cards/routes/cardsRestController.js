require('dotenv').config();
const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 8181;
const EndPoint = `http://localhost:${PORT}/cards`;

router.get('/', (req, res) => {
    console.log(`${EndPoint}/`);
    return res.send(`${EndPoint}/`);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`${EndPoint}/${id}`);
    return res.send(`${EndPoint}/${id}`);
});

router.post('/', (req, res) => {
    console.log(`${EndPoint}/`);
    return res.send(`${EndPoint}/`);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`${EndPoint}/${id}`);
    return res.send(`${EndPoint}/${id}`);
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`${EndPoint}/${id}`);
    return res.send(`${EndPoint}/${id}`);
});

router.delete('/:id', (req, res) => {
    const card_id = req.params.id;
    console.log(`in cards DELET!`);
    return res.send(`Card Delete: ${card_id}`);
});

module.exports = router;