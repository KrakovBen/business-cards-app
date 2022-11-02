require('dotenv').config();
const express = require('express');
const { handleError } = require('../../utils/errorHandler');
const { getCards, getCard, createCard, deleteCard, updateCard, likeCard, getMyCards } = require('../service/cardService');
const router = express.Router();
const PORT = process.env.PORT || 8181;
const EndPoint = `http://localhost:${PORT}/cards`;

router.get('/', async (req, res) => {
    try {
        const cards = await getCards();
        return res.send(cards);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.get('/my-cards', async (req, res) => {
    const userId = '12345';
    try {
        const card = await getMyCards(userId);
        return res.send(card);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const card = await getCard(id);
        return res.send(card);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const card = await createCard(req.body);
        return res.send(card);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const card = await deleteCard(id);
        return res.send(card);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const card = await updateCard(id, req.body);
        return res.send(card);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const userId = "12345";
    try {
        const card = await likeCard(id, userId);
        return res.send(card);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

module.exports = router;