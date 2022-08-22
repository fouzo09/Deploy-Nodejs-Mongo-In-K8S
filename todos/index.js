const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Todo = require('./TodoModel');
const PORT = 5000;
require('dotenv').config();


/**
 * Routes
 */
 app
 .get('/', async(req, res)=>{
    const todos = await Todo.find({});
    res.status(200).json(todos);
 })
 .post('/', async(req, res)=>{
   const newTodo = await Todo.create({...req.body});
   res.status(200).json(newTodo);
 })
 .get('/todo/:id', async(req, res)=>{
    const todo = await Todo.find({_id: req.params.id});
    res.status(200).json(todo);
 });


/**
 * Connect to db and run server
 */

const connectToDatabase = async() => {
   await mongoose.connect(process.env.MONGO_URL);
   return mongoose;
};


(async()=>{
   await connectToDatabase().then(async() => {
      console.log('connected to database ........');
      app.listen(PORT);
   });
})();
