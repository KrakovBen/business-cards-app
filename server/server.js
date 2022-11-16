require('dotenv').config();

const chalk = require('chalk');
const express = require('express');
const app = express();
const router = require('./router/router');
const cors = require('./middlewares/cors');
const logger = require('./logger/loggerService');
// const lodash = require('lodash');
// const arr = [1,2,undefined,3,4,undefined];
const connectToDB = require('./db/dbService')

require('./utils/timeService');

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(express.static('./public'));
app.use(router);

// let evens = lodash.remove(arr, (number)=>{
//     return number % 2 !== 0 && number !== undefined;
// });
// console.log(evens);

const PORT = process.env.PORT || 8181;
const ENV = process.env.ENV;

app.listen(PORT, () => {
    console.log(chalk.yellowBright(`Listening on: http://localhost:${PORT}`));
    connectToDB(ENV);
});