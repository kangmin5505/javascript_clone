const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // event : event에 대한 내용이 object로 담겨있음
  // event.preventDefault : event의 deault action이 일어나지 않게 함
  event.preventDefault();
  // loginForm을 제거
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreetings(username);
}

// 화면에 사용자 이름을 나타내는 function
function paintGreetings(username) {
  greeting.innerText = `Good morning, ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에서 key로 value를 가져오기
// key가 없으면 null 반환
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // 로그인 과정
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // loginForm 제출
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
