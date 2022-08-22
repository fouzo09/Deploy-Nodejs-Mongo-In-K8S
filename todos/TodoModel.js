const mongoose = require('mongoose');
const { Schema } = mongoose;

 const todoSchema = new Schema({
    title:  String, 
    content: String,
    date: { type: Date, default: Date.now }
});
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;