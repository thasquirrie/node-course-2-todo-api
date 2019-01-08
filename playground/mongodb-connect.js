//const MongoClient = require('mongodb').MongoClient
const MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb://localhost:27017/TodosApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB servers')
    }

    console.log('Connected to MongoDB servers succesfully')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo!', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    db.collection('Users').insertOne({
        name: 'Farayola Sodiq',
        age: 29,
        location: 'Ibadan'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Users', err)
        }

        console.log(JSON.stringify(result.ops, undefined, 2))
    })

    db.close()
})