
const mongoose = require('mongoose')

const hospitalSchema = mongoose.Schema({
    Hospital_name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model('hospital', hospitalSchema)