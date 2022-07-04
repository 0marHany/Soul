const donerRouter = require('../modules/doner/doner.router');

const hospitalRouter = require('../modules/hospital/hospital.router');

const stockRouter = require('../modules/stock/stock.router');

const requestRouter = require('../modules/request/request.router');

const donateRouter = require('../modules/donate/donate.router');

module.exports = {
    donerRouter,
    hospitalRouter,
    stockRouter,
    requestRouter,
    donateRouter
}