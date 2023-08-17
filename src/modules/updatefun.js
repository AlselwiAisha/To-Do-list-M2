/* -----------function to update a task----------*/
export default function updateTask(liElement, todoList) {
  const taskDesc = liElement.querySelector('.task-description').value;
  const chkState = liElement.querySelector('.completed-checkbox').checked;
  const taskIndex = liElement.value - 1;
  todoList[taskIndex].description = taskDesc;
  todoList[taskIndex].completed = chkState;
  /* ---------Update the task in localStorage----------*/
  localStorage.setItem('todo-list', JSON.stringify(todoList));
}
