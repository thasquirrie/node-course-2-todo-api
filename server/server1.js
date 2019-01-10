var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongod://localhost/27017/TodosApp')

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
})

var newTodo = new Todo({
    text: 'Tidy up the room',
    completed: true,
    completedAt: 865
})

newTodo.save().then((result) => {
    console.log('Saved todo', result)
}).catch((err) => {
    console.log('Unable to save todo', err)
});