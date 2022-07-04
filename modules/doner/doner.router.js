const { addUser,
    updateUser,
    deleteUser,
    authorization, getUser } = require('./controller/doner');

const router = require('express').Router();
const validationResult = require('../../common/validateRequest');
const { addUserSchema, updateUserSchema, signInSchema } = require('./controller/joi/userValidation');


router.post("/doner", validationResult(addUserSchema), addUser)
router.post("/donerLogin", validationResult(signInSchema), authorization)

router.put('/doner/:id', validationResult(updateUserSchema), updateUser)

router.delete("/doner/:id", deleteUser)

router.get("/doner", getUser)

module.exports = router;