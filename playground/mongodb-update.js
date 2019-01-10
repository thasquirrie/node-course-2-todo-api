//const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodosApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB servers')
    }

    console.log('Connected to MongoDB servers succesfully')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c36e38d181113cb4f019ad7')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2))
    // })

    db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5c36e2d50836e7145c10b0ab')
        }, {
            $set: {
                name: 'thasquirrie'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(JSON.stringify(result, undefined, 2))
        })
        //db.close()
})