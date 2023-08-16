import Task from './task.js';
import addEventListeners from './ul.js';

export default class ToDo {
  constructor() {
    this.todoList = [];
  }

  renderTask(task) {
    const liElement = document.createElement('li');
    liElement.classList.add('draggable-item');
    liElement.setAttribute('value', task.index);
    liElement.setAttribute('draggable', 'true');

    liElement.innerHTML = `
        <div>
        <input class="completed-checkbox" type="checkbox">
        <input class="task-description" type="text" name="${task.index}" value="${task.description}">
       </div>
        <i class="fa fa-trash icon trash-icon" aria-hidden="true"></i>
        `;
    addEventListeners(liElement, this);
    liElement.querySelector('.completed-checkbox').checked = task.completed;

    document.querySelector('#list').appendChild(liElement);
    liElement.querySelector('.task-description').style.textDecoration = task.completed ? 'line-through' : 'none';
  }

  updateIndexes() {
    document.querySelectorAll('.draggable-item')
      .forEach((item, index) => {
        item.setAttribute('value', index + 1);
        item.querySelector('.task-description').setAttribute('name', index + 1);
      });

    this.todoList.forEach((task, index) => {
      task.index = index + 1;
    });
  }

  addTask(description) {
    const task = new Task(this.todoList.length + 1, description);
    this.todoList.push(task);
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
    this.renderTask(task);
  }

  removeTask(liElement) {
    const taskIndex = liElement.value - 1;
    this.todoList.splice(taskIndex, 1);
    liElement.remove();
    this.updateIndexes();
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }

  updateTask(liElement) {
    const taskDesc = liElement.querySelector('.task-description').value;
    const chkState = liElement.querySelector('.completed-checkbox').checked;
    const taskIndex = liElement.value - 1;
    this.todoList[taskIndex].description = taskDesc;
    this.todoList[taskIndex].completed = chkState;
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }

  clearAllCompleted() {
    this.todoList = this.todoList.filter((task) => !task.completed);
    document.querySelectorAll('.draggable-item').forEach((item) => {
      if (item.querySelector('.completed-checkbox').checked) {
        item.remove();
      }
    });

    this.updateIndexes();
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }
}