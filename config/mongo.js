const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('Successful connection to MongoDB');
        } else {
            console.log('Error when trying to connect to MongoDB');
        }
    })
}

module.exports = dbConnect