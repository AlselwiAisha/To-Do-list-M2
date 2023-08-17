export default function addEventListeners(liElement, todoObj) {
  const dscr = liElement.querySelector('.task-description');
  const checkbox = liElement.querySelector('.completed-checkbox');
  const trash = liElement.querySelector('.trash-icon');

  checkbox.addEventListener('change', function () {
    dscr.style.textDecoration = this.checked ? 'line-through' : 'none';
    todoObj.updateTask(liElement);
  });

  dscr.addEventListener('focus', function () {
    liElement.style.backgroundColor = '#ffeea8';
    this.style.cursor = 'text';
  });

  dscr.addEventListener('focusout', function () {
    liElement.style.backgroundColor = 'transparent';
    this.style.cursor = 'default';
    if (this.value.trim() === '') {
      todoObj.removeTask(liElement);
    } else {
      todoObj.updateTask(liElement);
    }
  });

  dscr.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  });

  trash.addEventListener('click', () => {
    todoObj.removeTask(liElement);
  });
}