
const RequestModel = require('../../../model/Request.model')
const addRequest = async (req, res) => {
    const { Name, Sex, Age, BloodType } = req.body;
    try {
        const newRequest = await RequestModel.insertMany({
            Name, Sex, Age, BloodType
        });
        res.json({ message: "Done", data: newRequest });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const getData = async (req, res) => {
    const get = await RequestModel.find({})
    res.json({ message: "Done", get });
}

const updateRequest = async (req, res) => {

    const { Name, Sex, Age, BloodType } = req.body;

    const Updated = await RequestModel.findByIdAndUpdate({ _id: req.params.id }, { Name, Sex, Age, BloodType })
    res.json({ message: "Done", Updated })
}

const deleteRequest = async (req, res) => {
    const deleted = await RequestModel.deleteMany({
        _id: req.params.id
    })
    res.json({ message: "Succesful", deleted })
}

module.exports = {
    addRequest,
    updateRequest,
    deleteRequest,
    getData
}