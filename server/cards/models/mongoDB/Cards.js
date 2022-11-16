const mongoose = require('mongoose');
const imageSchema = require('./Images');
const addressSchema = require('./Address');

const defualtString = {
    type: String,
    trim: true,
    minLength: 2,
    required: true
}

const CardSchema = mongoose.Schema({
    title: defualtString,
    subtitle: defualtString,
    description: defualtString,
    phone: {
        type:String,
        match: RegExp(/^[0][5][0|2|3|4|5|8|9]{1}[-]{0,1}[0-9]{7}$/g)
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        match: RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    },
    web: {
        type: String,
        match: RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/g)
    },
    image: imageSchema,
    address: addressSchema,
    bizNumber: {
        type: Number,
        minLength: 9,
        maxLength: 9,
        require: true
    },
    createdAt: {
        type: Date,
        defualt: new Date()
    },
    user_id: mongoose.Types.ObjectId,
    likes: [String]
});

module.exports = mongoose.model("card", CardSchema);
// module.exports = CardSchema;