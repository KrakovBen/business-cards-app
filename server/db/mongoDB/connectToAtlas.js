const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.connect('mongodb+srv://mongo_test:goDrozmezxy6jyqki!@cluster0.uvtnvb7.mongodb.net/business_card_app')
.then( ()=>{ console.log(chalk.magentaBright('Connected to monogDB Atlas'))})
.catch((error)=> console.log(chalk.redBright.bold(`monogDB error: ${error}`)));