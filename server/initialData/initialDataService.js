const chalk = require('chalk');
const normalizeCard = require('../cards/helpers/normalizeCard');
const { createCard } = require('../cards/models/cardsAccessDataService');
const data = require('./initialData.json');

const generateInitialCards = async () => {
    const { cards } = data;

    cards.forEach(async (card) => {
        try {
            const userId = "638503e4caa1f3d9dbbcf7bc";
            card = await normalizeCard(card, userId);
            await createCard(card);
            return;
        } catch (error) {
            return console.log(chalk.redBright(error.message));
        }
    })
}

module.exports = generateInitialCards;