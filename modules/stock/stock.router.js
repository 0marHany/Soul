const { addStock,
    deleteStock,
    getData, getAllData } = require('./controller/stock');

const router = require('express').Router();

router.post('/stock', addStock)

router.get('/stock', getAllData)
router.get('/stock/:id', getData)

router.delete("/stock/:id", deleteStock)

module.exports = router