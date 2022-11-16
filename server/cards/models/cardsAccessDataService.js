const DB = process.env.DB || 'mongoDB';
const mongoose = require('mongoose');
const CardSchema = require('./mongoDB/Cards');

const find = async () => {
    if(DB === 'mongoDB'){
        try {
            return Promise.resolve([{cards:'In mongoDB'}]);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const findOne = async (_id) => {
    if(DB === 'mongoDB'){
        try {
            return Promise.resolve(`Card number ${_id}`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const create = async (normalizeCard) => {
    if(DB === 'mongoDB'){
        try {
            const card = new CardSchema(normalizeCard);
            await card.save();
            return Promise.resolve(card);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const remove = async (_id) => {
    if(DB === 'mongoDB'){
        try {
            return Promise.resolve(`Card number ${_id} Deleted!`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const update = async (_id, _card) => {
    if(DB === 'mongoDB'){
        try {
            return Promise.resolve(`Card number ${_id} Updated!`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const like = async (_id_card, _id_user) => {
    if(DB === 'mongoDB'){
        try {
            return Promise.resolve(`Card number ${_id_card} Liked by ${_id_user}!`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const findMyCards = async(userId) => {
    if(DB === 'mongoDB'){
        try {
            return Promise.resolve(`My cards ${userId}!`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
}

module.exports = { find, findOne, create, remove, update, like, findMyCards };