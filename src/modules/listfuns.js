import Task from './task.js';
import addEventListeners from './ul.js';

export default class ToDo {
  constructor() {
    this.todoList = [];
  }

  /* -------------Function to create list in html file------------*/
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
    /* -----------Call function to add all events to buttons in list---------*/
    addEventListeners(liElement, this);

    liElement.querySelector('.completed-checkbox').checked = task.completed;
    document.querySelector('#list').appendChild(liElement);
    liElement.querySelector('.task-description').style.textDecoration = task.completed ? 'line-through' : 'none';
  }

  /* ----------Function to update indexes after remove data----------*/
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

  /* ----------Function to add new to-do ----------*/
  addTask(description) {
    const task = new Task(this.todoList.length + 1, description);
    this.todoList.push(task);
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
    this.renderTask(task);
  }

  /* -----------Function to remove item from to-do list---------*/
  removeTask(liElement) {
    const taskIndex = liElement.value - 1;
    this.todoList.splice(taskIndex, 1);
    liElement.remove();

    /* ---call function to update indexes---*/
    this.updateIndexes();
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }

  /* -----------function to update a task----------*/
  updateTask(liElement) {
    const taskDesc = liElement.querySelector('.task-description').value;
    const chkState = liElement.querySelector('.completed-checkbox').checked;
    const taskIndex = liElement.value - 1;
    this.todoList[taskIndex].description = taskDesc;
    this.todoList[taskIndex].completed = chkState;
    /* ---------Update the task in localStorage----------*/
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }

  /* ------------remove all completed tasks---------------*/
  clearAllCompleted() {
    this.todoList = this.todoList.filter((task) => !task.completed);
    document.querySelectorAll('.draggable-item').forEach((item) => {
      if (item.querySelector('.completed-checkbox').checked) {
        item.remove();
      }
    });

    /* ---call function to update indexes---*/
    this.updateIndexes();

    /* ------------Remove all completed tasks---------------*/
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }
}