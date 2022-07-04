const express = require('express');
const mongoose = require('mongoose')
const {
    donerRouter,
    hospitalRouter,
    stockRouter, requestRouter, donateRouter
} = require('./router/allRouter');
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(cors({ origin: '*' }))

app.use(
    donerRouter,
    hospitalRouter,
    stockRouter, requestRouter, donateRouter
)
mongoose.connect('mongodb+srv://mohamed:mohamed123@cluster0.3an63.mongodb.net/Project')
app.listen(process.env.PORT || 4000)