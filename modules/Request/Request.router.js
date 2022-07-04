const { addRequest,
    updateRequest,
    deleteRequest,
    getData } = require('./controller/Request');

const router = require('express').Router();

const validationResult = require('../../common/validateRequest');
const { RequestSchema } = require('./controller/joi/requestValidation');

router.post('/Request', validationResult(RequestSchema), addRequest)
router.get('/Request', getData)
router.put('/Request/:id', validationResult(RequestSchema), updateRequest)
router.delete("/Request/:id", deleteRequest)
module.exports = router