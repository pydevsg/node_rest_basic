const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000
var restaurants = require('./routes/route.js')
app.use('/',restaurants);
app.listen(PORT,()=> console.log(`Listening on Port ${PORT}`))