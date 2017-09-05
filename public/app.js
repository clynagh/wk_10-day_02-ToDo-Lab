var init = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

var populate = function (todos) {
  for(var task of todos){
    addItem(task);
  }
  // this function needs to:
  // - loop through the array of todos, invoking addItem() for each todo item
    // todos.forEach(function(todo){
  // })
}

var addItem = function (item) {
  var ul = document.querySelector('#todo-list');
  var elem = document.createElement('li');
  elem.innerText = item;
  ul.appendChild(elem);
  // this function needs to:
  // - create an li element containing the string 'item'
  // - append the li to the "todo-list" ul
}

var handleButtonClick = function () {
  var item = document.getElementById('new-item').value;
  addItem(item);
  save(item);
  // this function needs to:
  // - get hold of the input box's value
  // - append it to the "todo-list" ul by invoking addItem()
  // - add it to local storage by invoking save()
}

var save = function (newItem) {
  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  todosArray.push(newItem);
  var jsonString = JSON.stringify(todosArray);
  localStorage.setItem('todosArray', jsonString);
  // this function needs to:
  // - get the data back from local storage and parse to an array
  // - add the newItem to the array
  // - stringify the updated array
  // - save it back to localstoage
}

window.addEventListener('load', init);
