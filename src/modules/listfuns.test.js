// Import the necessary modules

import ToDo from './listfuns.js';
import { updateTask } from './updatefun.js';

// Create an instance of the ToDo class
const todo = new ToDo();

// Describe the test suite for ToDo List CRUD functionalities
describe('ToDo-List: All CRUD Functionalities', () => {
  document.body.innerHTML = `<section class="container"> 
    <section class="title">
       <h1>To Do list</h1>
       <div class="list-title">
           <h2>Today's To Do</h2>
           <div class="list-icon"><i class="fa fa-refresh icon" aria-hidden="true"></i></div>
       </div>
   </section>
   <form class="addnewdo">
               <div class="add-new">
                   <input id="add-new-input" type="text" placeholder="Add to your list...">
                   <button  id="add-btn" type="submit"><i class="fa fa-level-down icon"
                           aria-hidden="true"></i></button>
               </div>
               <ul id="list" class="list drag-sort-enable">
                   <!--create To Do List by JavaScript -->
               </ul>
               <button id="clear-btn">Clear all completed</button>
   </form>  
</section>`;

  // Describe the 'Add new tasks' test suite
  describe('Add new tasks', () => {
    // Test Case 1: Check if the task is Added to the list
    test('Test ToDo-List to have 2 tasks', () => {
      todo.addTask('Task 1');
      todo.addTask('Task 2');
      expect(todo.todoList.length).toBe(2);
    });

    // Test Case 2: Check if the task is Added to the localStorage
    test('Test LocalStorage to have 2 tasks', () => {
      todo.addTask('Task 3');
      todo.addTask('Task 4');
      const todoList = JSON.parse(localStorage.getItem('todo-list'));
      expect(todoList.length).toBe(4);
    });

    // Test Case 3: Check if the task is Added to the DOM
    test('Test DOM to have 5 tasks', () => {
      todo.addTask('Task 5');
      const liElements = document.querySelectorAll('.draggable-item');
      expect(liElements).toHaveLength(5);
    });
  });
  describe('Remove Task', () => {
    // Test Case 1: Check if the task is removed from the todoList
    test('Test ToDo-List to have only 4 tasks left', () => {
      const liElements = document.querySelectorAll('.draggable-item');
      todo.removeTask(liElements[3]);
      expect(todo.todoList.length).toBe(4);
    });

    // Test Case 2: Check if the task is removed from the LocalStorage
    test('Test LocalStorage to have only 4 tasks left', () => {
      const todoList = JSON.parse(localStorage.getItem('todo-list'));
      expect(todoList.length).toBe(4);
    });

    // Test Case 3: Check if the task is removed from the DOM
    test('Test DOM to have only 4 tasks left', () => {
      const liElements = document.querySelectorAll('.draggable-item');
      expect(liElements).toHaveLength(4);
    });
  });

  describe('Update task', () => {
    // Test Case 1: Check if the task is updated in the list
    test('Test ToDo-List to have the first task updated', () => {
      const liElements = document.querySelectorAll('.draggable-item');
      liElements[0].querySelector('.task-description').value = 'Task 1 Updated';
      liElements[0].querySelector('.completed-checkbox').checked = true;
      updateTask(liElements[0], todo.todoList);
      expect(todo.todoList[0].description).toBe('Task 1 Updated');
      expect(todo.todoList[0].completed).toBe(true);
    });

    // Test Case 2: Check if the task is updated in the localStorage
    test('Test LocalStorage to have teh first task updated', () => {
      const todoList = JSON.parse(localStorage.getItem('todo-list'));
      expect(todoList[0].description).toBe('Task 1 Updated');
      expect(todoList[0].completed).toBe(true);
    });

    // Test Case 3: Check if the task is updated in the DOM
    test('Test DOM to have the first task updated', () => {
      const liElements = document.querySelectorAll('.draggable-item');
      const taskDescription = liElements[0].querySelector('.task-description').value;
      const taskStatus = liElements[0].querySelector('.completed-checkbox').checked;
      expect(taskDescription).toBe('Task 1 Updated');
      expect(taskStatus).toBe(true);
    });
  });

  describe('ClearAllCompleted tasks', () => {
    test('Test ToDo-List to have the completed tasks removed', () => {
      const liElements = document.querySelectorAll('.draggable-item');
      liElements[0].querySelector('.completed-checkbox').checked = true;
      liElements[1].querySelector('.completed-checkbox').checked = false;
      liElements[2].querySelector('.completed-checkbox').checked = true;
      liElements[3].querySelector('.completed-checkbox').checked = true;
      updateTask(liElements[0], todo.todoList);
      updateTask(liElements[2], todo.todoList);
      updateTask(liElements[3], todo.todoList);
      todo.clearAllCompleted();
      expect(todo.todoList.length).toBe(1);
    });

    test('Test LocalStorage to have teh first task updated', () => {
      const todoList = JSON.parse(localStorage.getItem('todo-list'));
      expect(todoList.length).toBe(1);
    });

    test('Test DOM to have the first task updated', () => {
      const liElements = document.querySelectorAll('.draggable-item');
      expect(liElements.length).toBe(1);
    });
  });
});
