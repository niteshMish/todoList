const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://todo_list:nitesh1@#$@cluster0.2isgn.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connectiong to db'));

db.once('open',function(){
    console.log('successfully connected to data base');
})

module.exports = db;