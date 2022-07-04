const donerModel = require('../../../model/doner.model')
const bcrypt = require("bcrypt");

const addUser = async (req, res, next) => {
    const {
        firstName,
        lastName,
        Age,
        Personal_ID,
        email,
        password,
        bloodType,
        Gender,
        Address,
        diseases, } = req.body;

    const user = await donerModel.findOne({ email });
    if (user) {
        res.json({ error: "email is already exist" })
    } else {
        bcrypt.hash(password, 12, async function (err, hash) {
            if (err) throw new Error(err);
            const user = await donerModel.insertMany({
                firstName,
                lastName,
                Age,
                Personal_ID,
                email,
                password: hash,
                bloodType,
                Gender,
                Address,
                diseases
            })
            try {
                res.json({ message: 'Done', user })
            } catch (error) {
                res.json({ error: error.message });
            }
        });
    }
}
const getUser = async (req, res) => {
    const user = await donerModel.find({});
    const userData = [user.firstName, user.lastName, user.bloodType, user.Age, user.Personal_]
    res.json({ userData: user })
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

const updateUser = async (req, res) => {

    const { firstName, lastName, password } = req.body

    await donerModel.findByIdAndUpdate({ _id: req.params.id }, { firstName, lastName, password })
    res.json({ message: "Done" })
}

const deleteUser = async (req, res) => {
    await donerModel.deleteMany({ _id: req.params.id })
    res.json({ message: "Done" })
}
module.exports = {
    addUser,
    updateUser,
    deleteUser,
    authorization,
    getUser
}