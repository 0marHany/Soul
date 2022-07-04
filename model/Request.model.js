
const mongoose = require('mongoose')

const RequestSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Sex: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    BloodType: {
        type: String,
        required: true
    },

},
    {
        timestamps: true
    })

module.exports = mongoose.model('Request', RequestSchema)