//const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodosApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB servers')
    }

    console.log('Connected to MongoDB servers succesfully')

    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //         console.log(result)
    //     })

    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //         console.log(result)
    //     })

    // db.collection('Users').deleteMany({ name: 'Farayola Sodiq' }).then((result) => {
    //         console.log(result)
    //     })

    // db.collection('Users').findOneAndDelete({
    //         _id: new ObjectID('5c34b7035d3c9012e4ba6ae4')
    //     }).then((result) => {
    //         console.log(JSON.stringify(result, undefined, 2))
    //     })
    //db.close()
})