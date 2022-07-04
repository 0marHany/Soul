const donateModel = require('../../../model/donate.model')

const adddonate = async (req, res, next) => {
    const {
        firstName,
        Age,
        bloodType,
        Gender,
        lastDonate,
        phone
    } = req.body;
    try {
        const donate = await donateModel.insertMany({
            firstName,
            Age,
            bloodType,
            Gender,
            lastDonate,
            phone
        })
        res.json({ message: 'Done', donate })
    } catch (error) {
        res.json({ error: error.message });
    }
};

const getdonate = async (req, res) => {
    const donate = await donateModel.find({});
    res.json({ donateData: donate })
}

const deletedonate = async (req, res) => {
    await donateModel.deleteMany({ _id: req.params.id })
    res.json({ message: "Done" })
}
module.exports = {
    adddonate,
    deletedonate,
    getdonate
}