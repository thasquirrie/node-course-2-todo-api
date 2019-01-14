const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/modules/todo')
const { User } = require('./../server/modules/user')

// var id = '5c3c0144975589278cd93090'

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {

//     return console.log('Id not found')
// })

// Todo.findById(id).then((todo) => {
//     console.log('Todo', todo)
// }).catch((e) => {
//     console.log(e)
// })

var id = '5c3717e6b7b4ef162029b049'

User.find({
    _id: id
}).then((users) => {
    console.log('Users', users)
}).catch((err) => {
    console.log(e)
});

User.findOne({
    _id: id
}).then((user) => {
    console.log('User', user)
}).catch((err) => {
    console.log(e)
});

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find user')
    }
    console.log('User', user)
}).catch((err) => {
    console.log(e)
});