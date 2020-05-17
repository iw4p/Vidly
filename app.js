const express = require('express')
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/usergo')
mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use('/api', routes)

app.use(function(err, req, res , next){
    console.log(err)
}) 

app.listen(process.env.port || 4000, function() {
    console.log(`app is listening on port ${process.env.port || 4000}`)
})
