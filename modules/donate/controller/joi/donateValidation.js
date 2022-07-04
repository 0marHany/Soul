const joi = require("joi");


module.exports = {
    addUserSchema: {
        body: joi.object().required().keys({
            firstName: joi.string().required(),
            Age: joi.number().required(),
            bloodType: joi.string().required(),
            Gender: joi.string().required(),
            phone: joi.string().required(),
            lastDonate: joi.string().required(),
        })
    },
}