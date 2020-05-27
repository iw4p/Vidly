const express = require('express')
const router = express.Router()
const User = require('../models/users')

router.get('/vidly', function(req, res, next) {
    res.send({type:'Get'})
})

router.post('/vidly', function(req, res, next) {
    User.create(req.body).then(function(users){
            res.send(users)
    }).catch(next)
})


router.put('/vidly/:id', function(req, res, next) {
    res.send({type:'Put'})
})

router.delete('/vidly/:id', function(req, res, next) {

    res.send({type:'Delete'})
})


module.exports = router