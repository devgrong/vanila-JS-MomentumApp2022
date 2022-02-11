// const loginForm = document.querySelector("#login-form");

// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// 위의 형태도 가능하고 아래의 형태도 가능하다는 것만 알아두고 아래는 코드를 짧게 만듬!

const loginForm = document.querySelector("#login-form");
// const loginSpan = document.querySelector("#login-form span:first-child");
const loginInput = document.querySelector("#login-form input:nth-child(2)");
const loginContinue = document.querySelector("#login-form input:last-child");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 자기가 생성한 string이 반복될 경우 변수로 지정해놓는게 오류 방지에 좋다!

function onInputName() {
  loginContinue.classList.remove(HIDDEN_CLASSNAME);
}
function waitFiveSec() {
  setTimeout(onInputName, 5000);
}
loginInput.addEventListener("input", waitFiveSec);

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  //   greeting.innerText = "Hello " + username;
  // string과 변수를 하나로 합치는 2가지 방법 중 하나
  // ` 은 Backtick!
  paintGreetings(username);
}

function paintGreetings(username) {
  loginForm.classList.remove("loginform--display");
  showElements();
  // 함수 뒤의 (괄호) 안에 들어가는 것은 그 함수 안에서 사용할 변수의 이름을 임의로 지어주는 것 뿐입니다.
  greeting.innerText = `${pickGreeting()}, ${username}`;
  //   그래서 `function paintGreeting(username)`에서 함수가 받아오는 argument 이름을 `username`으로 정했으니 greeting.innerText = ... {username};이 되는 겁니다.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function pickGreeting() {
  const date = new Date();
  const hours = date.getHours();

  let greetingMent;
  if (hours > 6 && hours < 12) {
    greetingMent = "Good morning";
  } else if (hours >= 12 && hours < 18) {
    greetingMent = "Good afternoon";
  } else if (hours >= 18) {
    greetingMent = "Good evening";
  } else {
    greetingMent = "Take a rest";
  }
  console.log(greetingMent);
  return greetingMent;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  todoForm.classList.remove("todo-form--display");
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function showElements() {
  quote.classList.remove(HIDDEN_CLASSNAME);
  author.classList.remove(HIDDEN_CLASSNAME);
  document.querySelector("#weather span").classList.remove(HIDDEN_CLASSNAME);
  document
    .querySelector("#weather span:last-child")
    .classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  clock.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.add("todo-form--display");
}
