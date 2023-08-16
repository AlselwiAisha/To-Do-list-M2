import Task from './task.js';

export function createToDoList() {
  const todoList = [];

  for (let i = 0; i < 5; i += 1) {
    if (i === 1) todoList.push(new Task(i, ` To Do ${i + 1}`, true));
    else todoList.push(new Task(i, `To Do ${i + 1}`, false));
  }

  return (todoList);
}

export function renderToDoList(taskList) {
  const ulElement = document.createElement('ul');

  taskList.forEach((task) => {
    const liElement = document.createElement('li');
    const isChecked = 'unchecked';
    liElement.innerHTML = `
        <div>
            <input type="checkbox" ${isChecked}>
            ${task.description}
        </div>
        <i class="fa fa-trash icon" aria-hidden="true"></i>
        `;
    ulElement.appendChild(liElement);
  });

  return ulElement;
}