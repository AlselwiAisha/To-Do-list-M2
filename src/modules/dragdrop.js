import { updateList } from './updatefun.js';

export default function enableDragSort(listClass, todoList) {
  const sortableLists = document.getElementsByClassName(listClass);
  Array.prototype.map.call(sortableLists, (list) => { enableDragList(list, todoList); });
}

function enableDragList(list, todoList) {
  Array.prototype.map.call(list.children, (item) => { enableDragItem(item, todoList); });
}

function handleDrag(item) {
  const selectedItem = item.target;
  const list = selectedItem.parentNode;
  const x = event.clientX;
  const y = event.clientY;
  selectedItem.classList.add('drag-sort-active');
  let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);

  if (list === swapItem.parentNode) {
    swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
    list.insertBefore(selectedItem, swapItem);
  }
}

function handleDrop(item) {
  item.target.classList.remove('drag-sort-active');
  updateList();
}

function enableDragItem(item) {
  item.setAttribute('draggable', true);
  item.ondrag = handleDrag;
  item.ondragend = handleDrop;
}