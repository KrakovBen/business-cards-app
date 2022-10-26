require('dotenv').config();
const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 8181;
const EndPoint = `http://localhost:${PORT}/users`;

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

router.post('/login', (req, res) => {
    console.log(`${EndPoint}/`);
    return res.send(`${EndPoint}/login`);
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
    const user_id = req.params.id;
    console.log(`in user DELET!`);
    return res.send(`User Delete: ${user_id}`);
});

module.exports = router;