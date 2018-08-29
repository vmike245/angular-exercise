`use strict`;
const uuid = require('uuid/v4');
let todos = [];

const getTodos = () => {
  return todos;
};

const addTodo = ({ name }) => {
  if (!name) {
    throw new Error('Name is required field');
  }
  const newTodo = { name, id: uuid() };
  todos = [...todos, newTodo];
  return newTodo;
};

const updateTodo = (id, { name }) => {
  if (!name) {
    throw new Error('Name is a required field');
  }
  const todoToUpdate = todos.find(todo => todo.id === id);
  todoToUpdate.name = name;
  return todoToUpdate;
};

const deleteTodo = id => {
  todos = todos.filter(todo => todo.id !== id);
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
