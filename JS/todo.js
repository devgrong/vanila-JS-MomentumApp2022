const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
// const todoInput = todoForm.querySelector("#input");
// 위와 동일한 문장임
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  //   li는 DOM을 직접 건드린건데, mdn 문서 뒤져보니 DOM의 id는 문자열이라고 나와 있었습니다.
  // 즉 우리가 newTodo.id로 number를 넣어주었어도, DOM에선 string으로 형변환해서 받아들이는거 같습니다.
  // 위의 말과 동일 : li.id는 string이 되는 이유=document안의 element라서
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  //   아직 이 함수 내에서 굴러가고 있기 때문에 현재로서는 li의 위치가 정해지지 않았고, 그냥 span만 li의 자식이 된다!
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  console.log(todoInput.value);
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

// function sayHello(item) {
//   console.log("this is turn of", item);
// }

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  //   parsedTodos.forEach(sayHello);
  // 위 방식도 가능하다
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
