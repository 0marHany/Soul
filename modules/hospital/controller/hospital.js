
const hospitalModel = require('../../../model/hospital.model')
const addHospital = async (req, res) => {
    const { Hospital_name
        , location } = req.body;
    const newHospital = await hospitalModel.insertMany({
        Hospital_name
        , location
    });
    res.json({ message: "Done", data: newHospital });
}

const getData = async (req, res) => {
    const get = await hospitalModel.find({})
    res.json({ message: "Done", get });
}

//login
const authorization = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await donerModel.findOne({ email });
        if (!user) { // if user not found
            res.json({ error: "Email is not correct" })
        }
        else {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                res.json({ message: "login success", data: user })
            }
            else {
                res.json({ error: "password is not correct" })
            }
        }
    } catch (error) {
        res.json({ error: error.message });
    }
}

const updateHospital = async (req, res) => {

    const { Hospital_name } = req.body;

    const Updated = await hospitalModel.findByIdAndUpdate({ _id: req.params.id }, { Hospital_name })
    res.json({ message: "Done", Updated })
}

const deleteHospital = async (req, res) => {
    const deleted = await hospitalModel.deleteMany({
        _id: req.params.id
    })
    res.json({ message: "Succesful", deleted })
}

module.exports = {
    addHospital,
    updateHospital,
    deleteHospital,
    getData,
    authorization
}