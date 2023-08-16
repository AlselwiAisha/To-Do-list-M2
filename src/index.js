import './style.css';
import { createToDoList, renderToDoList } from './modules/ul.js';

window.onload = () => {
  const todoList = createToDoList();
  const ulElement = renderToDoList(todoList);
  document.querySelector('#list').appendChild(ulElement);
};