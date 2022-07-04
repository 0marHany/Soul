
const mongoose = require('mongoose')


const stockSchema = mongoose.Schema({
    booldType: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    donorDetails: {
        type: mongoose.Schema.Types.ObjectId, ref: "doner",
        required: true
    },
    hospitalDetails: {
        type: mongoose.Schema.Types.ObjectId, ref: "hospital",
        required: true
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model('stock', stockSchema)