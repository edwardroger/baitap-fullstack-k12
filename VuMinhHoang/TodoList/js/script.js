var tasks = [];

// Function to add a new task
function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value.trim();
  
  if (task === "") {
    alert("Please enter a task.");
    return;
  }
  
  tasks.push(task);
  renderTasks();

  input.value = "";
}

// Function to render the task
function renderTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(function (task) {
    var li = document.createElement("li");
    li.classList.add("mb-2", "form-check");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input");
    checkbox.addEventListener("change", completeTask);

    var label = document.createElement("label");
    label.classList.add("form-check-label");
    label.appendChild(document.createTextNode(task));

    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.classList.add("btn", "btn-sm", "btn-danger");
    removeBtn.addEventListener("click", removeTask);

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
}

// Function complete task 
function completeTask() {
  var listItem = this.parentNode;
  var label = listItem.querySelector("label");
  var task = label.textContent;

  listItem.classList.toggle("completed");

  if (listItem.classList.contains("completed")) {
    tasks[tasks.indexOf(task)] = "<s>" + task + "</s>";
  } else {
    tasks[tasks.indexOf("<s>" + task + "</s>")] = task;
  }
}

// Function to remove a task
function removeTask() {
  var listItem = this.parentNode;
  var label = listItem.querySelector("label");
  var task = label.textContent;

  tasks.splice(tasks.indexOf(task), 1);
  renderTasks();
}

// Function to clear all completed tasks
function clearTasks() {
  tasks = tasks.filter(function (task) {
    return !task.startsWith("<s>") && !task.endsWith("</s>");
  });

  renderTasks();
}