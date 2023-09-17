const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));  

db.once('open', () => {
    console.log('Connected To Database: MongoDB');
})

module.exports = db;