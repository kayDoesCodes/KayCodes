const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo');
const todoListUl = document.getElementById('todo-list');

let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = todoInput.value.trim();
  if(todoText.length > 0){
    const todoObject = {
      text: todoText,
      completed: false
    }
    allTodos.push(todoObject);
    updateTodoList();
    saveTodos();
    todoInput.value = "";
  }
}

function updateTodoList() {
  todoListUl.innerHTML = "";
  allTodos.forEach((todo, todoIndex) => {
    todoItem = createTodoItem(todo, todoIndex);
    todoListUl.append(todoItem);
  })
}

function createTodoItem(todo, todoIndex) {
  const todoId = "todo-"+todoIndex;
  const todoLi = document.createElement('li');
  const todoText = todo.text;
  todoLi.className = "todo";
  todoLi.innerHTML = `
  <input type="checkbox" id="${todoId}" placeholder="none">
        <label for="${todoId}" class="custom-checkbox">
          <i class='bx bx-check'></i>
        </label>

        <label for="${todoId}" class="todo-text">
          ${todoText}
        </label>
        <button class="delete-btn">
          <i class='bx bx-trash'></i>
        </button>
  `
  const deleteBtn = todoLi.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    deleteTodoItem(todoIndex);
  })
  const checkbox = todoLi.querySelector("input");
  checkbox.addEventListener("change", () => {
    allTodos[todoIndex].completed = checkbox.checked;
    saveTodos();
  })
  checkbox.checked = todo.completed;
  return todoLi;
}

function deleteTodoItem(todoIndex) {
  allTodos = allTodos.filter((_, i)=> i !== todoIndex);
  saveTodos();
  updateTodoList();
}

function saveTodos() {
  const todoJson = JSON.stringify(allTodos);
  localStorage.setItem("todos", todoJson);
}

function getTodos() {
  const todos = localStorage.getItem("todos") || "[]";
  return JSON.parse(todos);
}