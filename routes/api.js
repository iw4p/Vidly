const express = require('express')
const router = express.Router()

router.get('/vidly', function(req, res) {
    res.send({type:'Get'})
})

router.post('/vidly', function(req, res) {
    res.send({type:'Post'})
})


router.put('/vidly/:id', function(req, res) {
    res.send({type:'Put'})
})

router.delete('/vidly/:id', function(req, res) {

    res.send({type:'Delete'})
})


module.exports = router