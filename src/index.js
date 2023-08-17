import './style.css';
import ToDo from './modules/listfuns.js';

const newtodo = document.querySelector('#add-new-input');
const addBtn = document.querySelector('#add-btn');
const clearBtn = document.querySelector('#clear-btn');
const todo = new ToDo();

/*----------Add new when user press enter---------*/
newtodo.addEventListener('keyup', (e) => {
  e.preventDefault();

  if (e.keyCode === 13 && e.target.value.trim() !== '') {
    todo.addTask(e.target.value);
    e.target.value = '';
  }
});

/*----------Add new when user press the icon---------*/
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (newtodo.value.trim() !== '') {
    todo.addTask(newtodo.value);
  }
  newtodo.value = '';
});

/*----------- clear all completed from to-do list -----------*/
clearBtn.addEventListener('click', () => todo.clearAllCompleted());

/*----------When page opens get to-do list data from localStorage---------------*/
window.onload = () => {
  todo.todoList = JSON.parse(localStorage.getItem('todo-list')) || [];
 if (todo.todoList.length > 0) {
    todo.todoList.forEach((task) => todo.renderTask(task));
  }
};