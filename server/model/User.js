const mongoose = require('mongoose')
const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: 8,
    },
    balance:{
        type: Number
    }
    
})



module.exports = User;

