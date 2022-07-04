const joi = require("joi");


module.exports = {
    RequestSchema: {
        body: joi.object().required().keys({
            Name: joi.string().required(),
            Sex: joi.string().required(),
            Age: joi.number().required(),
            BloodType: joi.string().required(),
        })
    },
}