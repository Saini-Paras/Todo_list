//*  variables containing selectors
const outputArea = document.querySelector(".output__area");
const inputField = document.querySelector('input[type="text"]');
const inputArea = document.querySelector(".input__area");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const error = document.querySelector(".error");

//* function to create new todo and add to output area
function createElement() {
  //? input value
  const inputText = inputField.value;

  //? create new todo
  const newTodo = document.createElement("div");
  newTodo.classList.add("todoo");
  newTodo.innerHTML = ` <div class="todo__value">${inputText}</div>
  <div class="func__btns">
  <i class="uil uil-check i done noSelect"></i>
  <i class="uil uil-trash i noSelect remove"></i>
  </div>`;

  //? reset input field
  inputField.value = "";
  //? add new todo to the output area
  outputArea.prepend(newTodo);
}

//* adding event on input submit
inputArea.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputField.value === "") {
    error.classList.add("active");
  } else {
    error.classList.remove("active");
    createElement();
  }
});

//* done and delete functionality
outputArea.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const todo = e.target.parentNode.parentNode;
    todo.remove();
  }

  if (e.target.classList.contains("done")) {
    const todoText = e.target.parentNode.previousElementSibling;
    todoText.classList.add("completed");
  }
});

//* date and time
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

setInterval(() => {
  const newDate = new Date();
  const day = days[newDate.getDay()];
  date.textContent = day;
  let hour = newDate.getHours();
  let mins = newDate.getMinutes();
  const newTime = hour + ":" + mins + ":" + newDate.getSeconds();
  time.textContent = newTime;
}, 1000);
