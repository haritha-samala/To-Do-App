import "./styles.css";
let todos = JSON.parse(localStorage.getItem("todos")) || [];
// DOM elements
const submit = document.querySelector("#submit");
const newTask = document.querySelector("#task");
const tasksList = document.querySelector("#tasks");
// document.addEventListener("DOMContentLoaded", function () {
let vid = document.getElementById("bgVideo");
vid.addEventListener("click", () => {
  if (vid.paused) {
    vid.play();
  } else {
    vid.pause();
  }
});
// default prevent
submit.disabled = true;
// validation
newTask.onkeyup = () => {
  const inputtedText = newTask.value.trim();
  inputtedText.length > 0
    ? (submit.disabled = false)
    : (submit.disabled = true);
};

document.addEventListener("DOMContentLoaded", () => {
  todos.forEach(addTaskToDOM);
});
// form handling
document.querySelector("form").onsubmit = () => {
  const task = newTask.value.trim();

  const todo = {
    value: task,
    checked: false,
  };

  todos.push(todo);
  saveTasks();

  addTaskToDOM(todo);

  newTask.value = "";
  submit.disabled = true;
  return false;
};
// adding tasks
function addTaskToDOM(todo) {
  // created & added class
  const li = document.createElement("li");
  li.classList.add("taskItem");

  // circle
  const bullets = document.createElement("button");
  bullets.innerHTML = ` <i class="bi bi-circle"></i>`;
  bullets.classList.add("completed");

  li.appendChild(bullets);

  //  create span for task content
  const taskContent = document.createElement("span");
  taskContent.textContent = todo.value;
  li.appendChild(taskContent);

  // create edit button
  const edit = document.createElement("button");
  edit.innerHTML = `<i class="bi bi-pencil"></i>`;
  edit.classList.add("editBtn");
  li.appendChild(edit);

  // create the delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="bi bi-trash3"></i>`;
  deleteBtn.classList.add("deleteBTN");
  li.appendChild(deleteBtn);

  // appendinding li
  tasksList.appendChild(li);

  // checked(bullets);
  // task completed
  bullets.addEventListener("click", () => {
    taskContent.classList.toggle("completed");
    if (todo.checked) {
      bullets.innerHTML = `<i class="bi bi-circle" ></i>`;
    } else {
      bullets.innerHTML = `<i class="bi bi-check-circle"></i>`;
    }
    todo.checked = !todo.checked;
    saveTasks(task);
  });
  // deleting tasks
  deleteBtn.addEventListener("click", () => {
    tasksList.removeChild(li);
    todos = todos.filter((t) => t !== todo);
    saveTasks();
  });
  // editing tasks
  edit.addEventListener("click", () => {
    const updated = prompt("Edit your task: ", todo.value);
    if (updated !== null && updated.trim() !== "") {
      todo.value = updated.trim();
      taskContent.textContent = todo.value;
      saveTasks();
    }
  });
  if (todo.checked) {
    taskContent.classList.add("completed");
    // bullets.innerHTML = `<i class="bi bi-check-circle"></i>`;
  }
  // return false;
}

function saveTasks() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
// });
