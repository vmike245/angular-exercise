`use strict`;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todoFunctions = require('./server/todoFunctions');
const loginFunctions = require('./server/loginFunctions');
const portNumber = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/api/todos', ({ query: { from, to } }, res) => {
  return res.send(todoFunctions.getTodos());
});

app.post('/api/todos', ({ body }, res) => {
  try {
    const newTodo = todoFunctions.addTodo(body);
    res.status(201).send(newTodo);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get('/api/todos/:id', ({ params: { id } }, res) => {
  try {
    const todo = todoFunctions.getTodo(id);
    res.send(todo);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.put('/api/todos/:id', ({ body, params: { id } }, res) => {
  try {
    const updatedTodo = todoFunctions.updateTodo(id, body);
    res.send(updatedTodo);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.delete('/api/todos/:id', ({ params: { id } }, res) => {
  todoFunctions.deleteTodo(id);
  res.send();
});

app.post('/api/login', ({ body }, res) => {
  try {
    const hash = loginFunctions.login(body);
    res.cookie('user', hash)
    res.send();
  } catch (error) {
    res.status(401).send(error.message);
  }
});

// Create link to Angular build directory
var distDir = __dirname + '/dist/angular-exercise';
app.use(express.static(distDir));

app.listen(portNumber, () =>
  console.log(`Web Server Started on port ${portNumber}`)
);
