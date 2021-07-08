const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todo input");
const ul = document.querySelector("ul");

const TODOS_KEY = "todos";

// todos storage
let todos = [];

// todos를 localStorage에 저장하는 function
function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// button을 누른 todo를 삭제하는 function
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  // todos array를 button을 누른 li를 제외하고 재생성
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

// 화면에 input에 작성한 내용을 보여주는 function
function paintTodo(newTodo) {
  const li = document.createElement("li");
  // li에 id 부여
  li.id = newTodo.id;
  const button = document.createElement("button");
  button.innerText = "✔";
  button.addEventListener("click", deleteTodo);
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  // button 과 span을 순서대로 li에 넣고 li를 ul에 넣기
  li.appendChild(button);
  li.appendChild(span);
  ul.appendChild(li);
}

// todo를 control하는 function
function handleTodoSubmit(event) {
  // event.preventDefault : prevent default action
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  // object 생성 : when delete the text, to access the id
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

// todo submit
todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
