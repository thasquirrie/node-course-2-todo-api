var express = require('express')
var bodyParser = require('body-parser')

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


app.listen(3000, () => {
    console.log('Started on port 3000');
})