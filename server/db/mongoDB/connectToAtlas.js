const mongoose = require('mongoose');
const chalk = require('chalk');
const DB_NAME = config.get("DB_NAME");
const DB_PASSWORD = config.get("DB_PASSWORD");

mongoose.connect(`mongodb+srv://${DB_NAME}:${DB_PASSWORD}@cluster0.uvtnvb7.mongodb.net/business_card_app`)
.then( ()=>{ console.log(chalk.magentaBright('Connected to monogDB Atlas'))})
.catch((error)=> console.log(chalk.redBright.bold(`monogDB error: ${error}`)));