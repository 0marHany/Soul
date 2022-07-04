const mongoose = require('mongoose')

const donerSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Personal_ID: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bloodType: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    diseases: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('doner', donerSchema)