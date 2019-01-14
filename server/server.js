var express = require('express')
var bodyParser = require('body-parser')

var { ObjectID } = require('mongodb')

var { mongoose } = require('./db/mongoose')
var { Todo } = require('./modules/todo')
var { User } = require('./modules/user')

var app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((result) => {
        console.log(result)
        res.send(result)
    }).catch((err) => {
        res.status(400).send(err)
    });
})

// app.get('/todos', (res, req) => {
//     Todo.find().then((todos) => {
//         res.send({ todos })
//     }, (err) => {
//         res.status(400).send(err)
//     })
// })

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos })
    }).catch((err) => {
        res.status(400).send({ todos })
    });
})

app.get('/todos/:id', (req, res) => {
    var id = req.params.id

    if (!ObjectID.isValid(id)) {
        return res.status(404).send()
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            res.status(404).send()
        }
        res.send({ todo })
    }).catch((err) => {
        res.status(400).send()
    });
})

app.listen(3000, () => {
    console.log('Started on port 3000');
})

module.exports = {
    app
}