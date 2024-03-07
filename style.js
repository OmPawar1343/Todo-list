function addTask() {
    var input = document.getElementById("new-task");
    var taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("task-list");
    var newTaskItem = document.createElement("li");
    newTaskItem.innerHTML = taskText + '<button onclick="toggleTaskCompletion(this)">Complete</button>' +
                            '<button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(newTaskItem);

    input.value = "";
}

function toggleTaskCompletion(buttonElement) {
    var listItem = buttonElement.parentElement;
    listItem.classList.toggle("completed");

    var buttonText = buttonElement.innerText;
    buttonElement.innerText = buttonText === "Complete" ? "Undo" : "Complete";
}

function deleteTask(buttonElement) {
    var listItem = buttonElement.parentElement;
    listItem.remove();
}