const mongoose = require('mongoose')

const donateSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
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
    lastDonate: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('donate', donateSchema)