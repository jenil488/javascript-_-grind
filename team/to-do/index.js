// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task function (basic version)
function addTask() {
  // Get the value from the input field
  const taskText = taskInput.value.trim();

  // Check if input is empty
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new <li> element for the task
  const taskItem = document.createElement("li");
  taskItem.className = "task"; // Add a class for styling
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="complete-btn">Complete</button>
    <button class="delete-btn">Delete</button>
  `;

  // Add a "Complete" button functionality (directly using `onclick`)
  const completeBtn = taskItem.querySelector(".complete-btn");
  completeBtn.onclick = function () {
    taskItem.style.backgroundColor = "lightgreen"; // Mark task as complete (green background)
  };

  // Add a "Delete" button functionality (directly using `onclick`)
  const deleteBtn = taskItem.querySelector(".delete-btn");
  deleteBtn.onclick = function () {
    taskList.removeChild(taskItem); // Remove the task
  };

  // Append the task to the task list
  taskList.appendChild(taskItem);

  // Clear the input field after adding the task
  taskInput.value = "";
}

// Add task when the button is clicked
addTaskBtn.onclick = addTask;
