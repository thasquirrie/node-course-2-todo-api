//const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodosApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB servers')
    }

    console.log('Connected to MongoDB servers succesfully')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c34bc0cb476220ef6d9e955')
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })

    // db.collection('Todos').find().count().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })

    db.collection('Users').find({
        name: 'Farayola Lolade'
    }).toArray().then((docs) => {
        console.log('Users')
        console.log(JSON.stringify(docs, undefined, 2))
    })


    //db.close()
})