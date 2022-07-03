// import mongoose
const mongoose = require('mongoose');
// todo list schema
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
})
// 
const Task = mongoose.model('Task', taskSchema);

// exporting schema
module.exports = Task;