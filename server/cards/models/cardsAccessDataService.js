const config= require('config');
const DB = config.get("DB");
const mongoose = require('mongoose');
const CardSchema = require('./mongoDB/Cards');

const getCards = async () => {
    if(DB === 'mongoDB'){
        try {
            const getCards = mongoose.model('card', CardSchema);
            const cards = await getCards.find();
            return Promise.resolve(cards);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const getCard = async (id) => {
    if(DB === 'mongoDB'){
        try {
            const getCard = mongoose.model('card', CardSchema);
            let card = await getCard.findById(id);
            if (!card) card = 'Could not fint this id in DataBase';
            return Promise.resolve(card);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const createCard = async (normalizeCard) => {
    if(DB === 'mongoDB'){
        try {
            const createCard = mongoose.model('card', CardSchema)
            const card = new createCard(normalizeCard);
            await card.save();
            return Promise.resolve(card);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const deleteCard = async (_id) => {
    if(DB === 'mongoDB'){
        try {
            const deleteCard = mongoose.model('card', CardSchema);
            let card = await deleteCard.findByIdAndDelete(_id);
            if (!card) card = "Could not find this Card ID";
            return Promise.resolve(card);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const updateCard = async (_id, normalizeCard) => {
    if(DB === 'mongoDB'){
        try {
            const updateCard = mongoose.model('card', CardSchema);
            let card = await updateCard.findByIdAndUpdate(_id, normalizeCard, {new: true});
            if (!card) throw new Error(`Could not find this id - ${_id}`)
            return Promise.resolve(card);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const likeCard = async (_id_card, _id_user) => {
    let msg = "";
    if(DB === 'mongoDB'){
        try {
            const likeCard = mongoose.model('card', CardSchema);
            let card = await likeCard.findById(_id_card);

            if (!card) throw new Error('Could not find this card ID');

            if(!card.likes.length) {
                card.likes.push(_id_user);
                await likeCard.findByIdAndUpdate(card._id, {likes: card.likes});
                return Promise.resolve(`${_id_user} Like`);
            }

            const index = card.likes.findIndex(id => id === _id_user);
            if (index === -1) {
                card.likes.push(_id_user);
                await likeCard.findByIdAndUpdate(card._id, {likes: card.likes});
                return Promise.resolve(`${_id_user} Like`);
            }

            card.likes.pop(index);
            await likeCard.findByIdAndUpdate(card._id, {likes: card.likes});
            return Promise.resolve(`${_id_user} unLike`);

            // if (!card) {
            //     throw new Error('Could not find this card ID');
            // } else {
            //     if(!card.likes.length) {
            //         card.likes.push(_id_user);
            //         msg = `${_id_user} Like`;
            //     } else {
            //         const index = card.likes.findIndex(id => id === _id_user);
            //         if (index === -1) {
            //             card.likes.push(_id_user);
            //             msg = `${_id_user} Like`;
            //         } else {
            //             card.likes.pop(index);
            //             msg = `${_id_user} unLike`;
            //         }
            //     }
            //     await likeCard.findByIdAndUpdate(card._id, {likes: card.likes});
            // }

            // return Promise.resolve(msg);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const getMyCards = async(userId) => {
    if(DB === 'mongoDB'){
        try {
            const getCard = mongoose.model('card', CardSchema);
            let card = await getCard.findOne({_id: userId});
            if (!card) card = 'Could not fint this id in DataBase';
            return Promise.resolve(card);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
}

module.exports = { getCards, getCard, createCard, deleteCard, updateCard, likeCard, getMyCards };