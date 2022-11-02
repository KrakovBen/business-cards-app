require('dotenv').config();

const chalk = require('chalk');
const express = require('express');
const app = express();
const router = require('./router/router');

const { origin } = require('./middlewares/cors');

app.use(origin);
app.use(express.json());
app.use(express.static('./public'));

app.use(router);

const PORT = process.env.PORT || 8181;
app.listen(PORT, () => console.log(chalk.yellowBright(`Listening on: http://localhost:${PORT}`)));