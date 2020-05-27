const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Create users Schema and model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name Field is required']
    },
    rank: {
        type: String
    }, 
    available: {
        type: Boolean,
        default: false
    }
    // add in geo location
})

const User = mongoose.model('user', UserSchema)

module.exports = User