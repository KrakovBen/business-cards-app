const { find, findOne, create, remove, update, like, findMyCards } = require('../models/cardsAccessDataService');

const getCards = async () => {
    try {
        const cards = await find();
        return Promise.resolve(cards);
    } catch (error) {
        return Promise.reject(error);
    }
};

const getCard = async (_id) => {
    try {
        const card = await findOne(_id);
        return Promise.resolve(card);
    } catch (error) {
        return Promise.reject(error);
    }
};

const createCard = async (_rawCard) => {
    let card = {..._rawCard};
    card.createdAt = new Date();
    try {
        card = await create(card);
        return Promise.resolve(card);
    } catch (error) {
        return Promise.reject(error);
    }
};

const deleteCard = async (_id) => {
    try {
        const card = await remove(_id);
        return Promise.resolve(card);
    } catch (error) {
        return Promise.reject(error);
    }
};

const updateCard = async (_id, _rawCard) => {
    let card = {..._rawCard};
    try {
        card = await update(_id, _rawCard);
        return Promise.resolve(card);
    } catch (error) {
        return Promise.reject(error);
    }
};

const likeCard = async (_cardId, _userId) => {
    try {
        const card = await like(_cardId, _userId);
        return Promise.resolve(card);
    } catch (error) {
        return Promise.reject(error);
    }
};

const getMyCards = async (_userId) => {
    try {
        const card = await findMyCards(_userId);
        return Promise.resolve(card);
    } catch (error) {
        return Promise.reject(error);
    }
};


module.exports = { getCards, getCard, createCard, deleteCard, updateCard, likeCard, getMyCards };