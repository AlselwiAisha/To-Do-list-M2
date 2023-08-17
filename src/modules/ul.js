 /*---------- function to add all events to buttons in list---------*/
export default function addEventListeners(liElement, todoObj) {
  const dscr = liElement.querySelector('.task-description');
  const checkbox = liElement.querySelector('.completed-checkbox');
  const trash = liElement.querySelector('.trash-icon');

  /*-----------Event when checke change-----------*/
  checkbox.addEventListener('change', function () {
    dscr.style.textDecoration = this.checked ? 'line-through' : 'none';
    todoObj.updateTask(liElement);
  });

   /*-----------Event when user need to update task-----------*/
   dscr.addEventListener('focus', function () {
    liElement.style.backgroundColor = '#ffeea8';
    this.style.cursor = 'text';
  });

   /*----------Event when user completes update task-----------*/
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

   /*----------Event when user clicks remove button-----------*/
  trash.addEventListener('click', () => {
    todoObj.removeTask(liElement);
  });
}