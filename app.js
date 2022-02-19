const inputText = document.getElementById("task");
const button = document.getElementsByClassName("add-btn")[0];
const form = document.querySelector("#add-task");
const ul = document.querySelector(".todolist-list-container");

// -----functions
// creating Task
const createTask = (taskText) => {
  return `
    <div class="list-group">
                    <li class="unchecked">${taskText}</li>
                    <button class="btn">&#128473;</i></button>
                </div>`;
};
// completed task
const completedTaskCount = () => {
  let checkedCount = ul.getElementsByClassName("checked").length;
  let taskCount = ul.getElementsByClassName("list-group").length;
  const checkedTasks = document.getElementById("checkedTasks");
  const allTasks = document.getElementById("allTasks");
  checkedTasks.innerText = checkedCount;
  allTasks.innerText = taskCount;
};
// -----events
// add task event
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputText.value != "") {
    ul.innerHTML += createTask(inputText.value);
    form.reset();
  } else {
    alert("Please type a text to add");
  }
  completedTaskCount();
});
// delete task event
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    e.target.parentElement.remove();
  }
  completedTaskCount();
});
// checking and unchecking
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("unchecked")) {
    e.target.className = "checked";
  } else {
    e.target.className = "unchecked";
  }
  completedTaskCount();
});
