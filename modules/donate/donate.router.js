const { adddonate,
    deletedonate,
    getdonate } = require('./controller/donate');

const router = require('express').Router();
const validationResult = require('../../common/validateRequest');
const { addUserSchema } = require('./controller/joi/donateValidation');


router.post("/donate", validationResult(addUserSchema), adddonate)

router.get('/donate', getdonate)

router.delete("/donate/:id", deletedonate)

module.exports = router;