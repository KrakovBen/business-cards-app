const express = require('express');
const app = express();
const cors = require('cors');

const origin = app.use(cors({origin: ['http://127.0.0.1:5500','http://localhost:3000']}));

module.exports = { origin };
