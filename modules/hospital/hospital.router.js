const { addHospital,
    updateHospital,
    deleteHospital,
    getData } = require('./controller/hospital');

const router = require('express').Router();

router.post('/hospital', addHospital)
router.get('/hospital', getData)
router.put('/hospital/:id', updateHospital)
router.delete("/hospital/:id", deleteHospital)
module.exports = router