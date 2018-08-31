`use strict`;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todoFunctions = require('./server/todoFunctions');
const portNumber = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/todos', ({ query: { from, to } }, res) => {
  return res.send(todoFunctions.getTodos());
});

app.post('/todos', ({ body }, res) => {
  try {
    const newTodo = todoFunctions.addTodo(body);
    res.status(201).send(newTodo);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.put('/todos/:id', ({ body, params: { id } }, res) => {
  try {
    const updatedTodo = todoFunctions.updateTodo(id, body);
    res.send(updatedTodo);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.delete('/todos/:id', ({ params: { id } }, res) => {
  todoFunctions.deleteTodo(id);
  res.send();
});

// Create link to Angular build directory
var distDir = __dirname + '/dist/angular-exercise';
app.use(express.static(distDir));

app.listen(portNumber, () =>
  console.log(`Web Server Started on port ${portNumber}`)
);
