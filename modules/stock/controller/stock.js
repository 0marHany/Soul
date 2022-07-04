
const stockModel = require('../../../model/stock.model')

const addStock = async (req, res) => {
    const { booldType, stock, donorDetails, hospitalDetails } = req.body;
    const newLink = await stockModel.insertMany({
        booldType,
        stock,
        donorDetails,
        hospitalDetails
    });
    res.json({ message: "Done", data: newLink });
}

const getData = async (req, res) => {
    const get = await stockModel.findById({ _id: req.params.id }).populate("hospitalDetails").populate("donorDetails")
    res.json({ message: "Done", data: get, });
}

const getAllData = async (req, res) => {
    const get = await stockModel.find().populate("hospitalDetails").populate("donorDetails")
    res.json({ message: "Done", data: get, });
}

const deleteStock = async (req, res) => {
    const deleted = await stockModel.deleteMany({
        _id: req.params.id
    })
    res.json({ message: "Succesful", deleted })
}

module.exports = {
    addStock,
    deleteStock,
    getData,
    getAllData
}