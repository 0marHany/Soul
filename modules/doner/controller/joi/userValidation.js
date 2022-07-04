const joi = require("joi");


module.exports = {
    addUserSchema: {
        body: joi.object().required().keys({
            firstName: joi.string().required(),
            lastName: joi.string().required(),
            Age: joi.number().required(),
            Personal_ID: joi.string().required(),
            email: joi.string().required(),
            password: joi.string().required(),
            bloodType: joi.string().required(),
            Gender: joi.string().required(),
            Address: joi.string().required(),
            diseases: joi.string().optional(),
        })
    },
    signInSchema: {
        body: joi.object().required().keys({
            email: joi.string().required(),
            password: joi.string().required()
        })
    },
    updateUserSchema: {
        body: joi.object().required().keys({
            firstName: joi.string().optional(),
            lastName: joi.string().optional(),
            password: joi.string().optional()
        })
    }
}