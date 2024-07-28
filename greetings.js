const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault()
    console.log("로그인 제출됨")
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value
    console.log("사용자 이름:", username)
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
}


function paintGreetings(username) {
    console.log("인사말 표시 중:", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
