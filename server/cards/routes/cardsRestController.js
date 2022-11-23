require('dotenv').config();
const express = require('express');
const { handleError } = require('../../utils/errorHandler');
const normalizeCard = require('../helpers/normalizeCard');
const { getCards, getCard, createCard, deleteCard, updateCard, likeCard, getMyCards } = require('../models/cardsAccessDataService');
const validateCard = require('../validations/cardValidationService');
const router = express.Router();

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
        let card = req.body;
        const { error } = validateCard(card);
        if (error) return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

        card = await normalizeCard(card);
        card = await createCard(card);
        return res.status(201).send(card);
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
    try {
        let card = req.body;
        const cardId = req.params.id;
    
        const { error } = validateCard(card);
        if (error)
          return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
    
        card = await normalizeCard(card);
        card = await updateCard(cardId, card);
        return res.send(card);
      } catch (error) {
        return handleError(res, error.status || 500, error.message);
      }
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const userId = "637e8e0f56021a127704e2e5";
    try {
        const card = await likeCard(id, userId);
        return res.send(card);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

module.exports = router;