const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '${VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
})

UserSchema.methods.toJSON = function() {
    var user = this
    var userObject = user.toObject()

    return _.pick(userObject, ['id', 'email'])
}

UserSchema.methods.generateAuthToken = function() {
    var user = this
    console.log(this)
    var access = 'auth'
    var token = jwt.sign({ _id: user._id.toHexString(), access }, 'bigdad').toString()

    user.tokens.push({ access, token })

    return user.save().then(() => {
        return token
    })
}

var User = mongoose.model('User', UserSchema)

module.exports = {
    User
}


//var UserSchema = new mongoose.Schema({
//     email: {
//         required: true,
//         trim: true,
//         type: String,
//         minlength: 1,
//         unique: true,
//         validate: {
//             validator: validator.isEmail,
//             message: '${VALUE} is not a valid email'
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 6
//     },
//     tokens: [{
//         access: {
//             type: String,
//             required: true
//         },
//         token: {
//             type: String,
//             required: true
//         }
//     }]
// })

// UserSchema.methods.generateAuthToken = function() {
//     var user = this
//     var access = 'auth'
//     var token = jwt.sign({ _id: user._id.toHexString(), access }, 'bigdad').toString()

//     // user.tokens = user.tokens.concat([{ acess, token }])
//     user.tokens.push({ access, tokens })
//     return user.save().then(() => {
//         return token
//     })
// }

// var User = mongoose.model('User', UserSchema)