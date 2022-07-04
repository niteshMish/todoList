const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.CONNECT);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connectiong to db'));

db.once('open',function(){
    console.log('successfully connected to data base');
})

module.exports = db;