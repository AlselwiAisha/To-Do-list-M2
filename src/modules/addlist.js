export default class ToDo {
    constructor() {
        this.todoList = [];
    }

    renderTask(task) {
        const liElement = document.createElement('li');
        liElement.classList.add('list-item');
        liElement.setAttribute('value', task.index);
        liElement.setAttribute('draggable', 'true');

        liElement.innerHTML = `
        <input class="completed-checkbox" type="checkbox">
        <input class="task-description" type="text" name="${task.index}" value="${task.description}">
        <i class="fa fa-trash trash-icon" aria-hidden="true"></i>
        `;

        addEventListeners(liElement, this);

        liElement.querySelector('.completed-checkbox').checked = task.completed;

        liElement.style.textDecoration = task.completed ? 'line-through' : 'none';
        document.querySelector('#list').appendChild(liElement);
    }
    
}