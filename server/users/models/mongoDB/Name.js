const mongoose = require('mongoose');

const NameSchema = mongoose.Schema({
    first: {
        type: String,
        minLength: 2,
        required: true
    },
    last: {
        type: String,
        minLength: 2,
        required: true
    }
})

module.exports = NameSchema;